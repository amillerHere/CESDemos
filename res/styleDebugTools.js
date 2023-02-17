/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
var template = document.createElement('template');

template.innerHTML = `<div  style="position: absolute; left: 50%; transform: translateX(-50%); top: 0;
    background-color: grey; padding: 2px 2px; z-index:10">
    <input id="enableRasterEl" type="checkbox" /><label for="enableRasterEl"> Show raster layer</label>
    <input id="splitScreenEl" type="checkbox" /><label for="splitScreenEl"> Side by side</label>
  </div>`;

document.body.appendChild(template.content.firstChild);

const mapContainer = document.getElementById('mapContainer');
const splitScreenEl = document.getElementById('splitScreenEl');
const enableRasterEl = document.getElementById('enableRasterEl');

let rasterMap;
let rasterMapContainer;

function toggleRasterMap(show) {
  if (show && !rasterMap) {
    // create container node
    rasterMapContainer = document.createElement('div');
    mapContainer.parentNode.appendChild(rasterMapContainer);

    // fix style to have split screen
    const width = splitScreenEl.checked ? 50 : 100;
    mapContainer.setAttribute(
        'style',
        `position: absolute; width:${width}%; top:0; bottom:0; left: 0; visibility: ${
          splitScreenEl.checked ? 'visible' : 'hidden'
        }`
    );
    rasterMapContainer.setAttribute(
        'style',
        `position: absolute; width:${width}%; top:0; bottom: 0; right: 0; border-left: 1px solid black`
    );

    // init 2nd map instance
    rasterMap = new mapsjs.Map(
        rasterMapContainer,
        maptypes.raster.normal.map, // P2D
        {
          zoom: map.getZoom(),
          center: map.getCenter(),
          engineType: mapsjs.Map.EngineType['P2D'],
          renderBaseBackground: {lower: 2, higher: 2},
          pixelRatio: map.getPixelRatio()
        }
    );
    rasterMap.onWindowResize = () => rasterMap.getViewPort().resize();
    window.addEventListener('resize', rasterMap.onWindowResize);

    const viewModel = map.getViewModel();
    const rasterMapViewModel = rasterMap.getViewModel();

    rasterMap.updateLookAtData = () => {
      if (
        JSON.stringify(viewModel.getLookAtData()) !==
        JSON.stringify(rasterMapViewModel.getLookAtData())
      ) {
        rasterMapViewModel.setLookAtData(viewModel.getLookAtData());
      }
    };
    map.addEventListener('mapviewchange', rasterMap.updateLookAtData);
    rasterMap.addEventListener('mapviewchange', () => {
      if (
        JSON.stringify(rasterMapViewModel.getLookAtData()) !==
        JSON.stringify(viewModel.getLookAtData())
      ) {
        viewModel.setLookAtData(rasterMapViewModel.getLookAtData());
      }
    });
    new mapsjs.mapevents.Behavior(new mapsjs.mapevents.MapEvents(rasterMap));
  } else {
    mapContainer.style.visibility = 'visible';
    mapContainer.style.width = '100%';
    window.removeEventListener('resize', rasterMap.onWindowResize);
    map.removeEventListener('mapviewchange', rasterMap.updateLookAtData);
    rasterMap.dispose();
    rasterMapContainer.parentNode.removeChild(rasterMapContainer);
    rasterMapContainer = rasterMap = undefined;
    map.getViewPort().resize();
    splitScreenEl.checked = false;
  }
}
enableRasterEl.addEventListener('change', ({target}) =>
  toggleRasterMap(target.checked)
);
splitScreenEl.addEventListener('change', ({target}) => {
  if (target.checked) {
    if (!enableRasterEl.checked) {
      enableRasterEl.checked = true;
      toggleRasterMap(true);
    }
    rasterMapContainer.style.width = mapContainer.style.width = '50%';
  } else {
    rasterMapContainer.style.width = mapContainer.style.width = '100%';
  }
  mapContainer.style.visibility = target.checked ? 'visible' : 'hidden';

  rasterMap.getViewPort().resize();
  map.getViewPort().resize();
});

// Set all OMV layers interactive:
function getLayerNames(root, arr = [], prefix) {
  for (const key in root) {
    if (key === 'draw' && prefix) {
      arr.push(prefix);
    } else if (typeof root[key] === 'object') {
      getLayerNames(root[key], arr, prefix ? `${prefix}.${key}` : key);
    }
  }

  return arr.sort();
}
const style = maptypes.vector.normal.map.getProvider().getStyle();
style.listenOnce('change', () =>
  style.setInteractive(getLayerNames(style.getProperty('layers')), true)
);

// Enable OMV layer stats and feature data on "tap" event of screen
const scene = map.engine_.scene_.scene_;

if (typeof scene.getTileStats !== 'function') {
  console.warn(
      'uncomment "getTileStats()" methods in "scene" and "scene_worker" (Tangram)'
  );
} else {
  const sourceId = map.getBaseLayer().getProvider().uid;

  map.addEventListener(
      'tap',
      ({currentPointer: {viewportX, viewportY}}) => {
        scene.getTileStats(sourceId, viewportX, viewportY).then((stats) => {
          console.log('Stats:', stats[0]);
        });
      }
  );
}

map.addEventListener('tap', ({currentPointer: {viewportX, viewportY}}) => {
  map.getObjectAt(viewportX, viewportY, (feature) => {
    console.log('Feature:', feature ? feature.getData() : 'none');
  });
});

// =================== URL hash to look-at and vise versa ===================

// show current lookAt information in URL
map.addEventListener('mapviewchangeend', () => {
  var lookAt = map.getViewModel().getLookAtData(),
      hash = lookAtToHash(lookAt);

  if (hash !== location.hash) {
    history.replaceState(lookAt, hash, hash);
  }
});

if (location.hash) {
  const matches = hashToLookAt(location.hash);
  if (matches) {
    const [zoom, lat, lng] = matches;
    map.getViewModel().setLookAtData({
      zoom,
      position: {lat, lng}
    });
  }
}

function hashToLookAt(hash) {
  const matches = hash.match(/^#([^\/]+)\/([^\/]+)\/([^\/]+)$/);

  if (matches && matches.length === 4) {
    return matches.slice(1).map(parseFloat);
  }
}

function lookAtToHash(lookAtData) {
  // We use dynamic zoom precision depending from the zoom.
  // Bigger zoom leads to higher precision.
  const precision = Math.max(
      0,
      Math.floor(Math.log(lookAtData.zoom * 5) / Math.LN2)
  );
  const hashString = [
    lookAtData.zoom.toFixed(3),
    lookAtData.position.lat.toFixed(precision),
    lookAtData.position.lng.toFixed(precision)
  ]
    .map(parseFloat)
    .join('/');

  return `#${hashString}`;
}
