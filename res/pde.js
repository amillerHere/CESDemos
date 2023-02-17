var pdePlatform = new mapsjs.service.Platform({
      app_id: 'xNMB6lgtCInlEZGQGXAr',
      app_code: 'zcJHoxl2nnuVhcmUiH3F-A'
    }),

    pdeService = pdePlatform.getPlatformDataService(),

    // var layer = pdeService.createTileLayer({layer: 'PSTLCB_MP', level: 12}, {
    //   resultType: mapsjs.service.extension.platformData.TileProvider.ResultType.MARKER
    // });

    layer = pdeService.createTileLayer({layer: 'PSTLCB_GEN', level: 12}, {
      resultType: mapsjs.service.extension.platformData.TileProvider.ResultType.POLYGON
    }),
    currentHighlightedSpatial;

map.setZoom(13);
map.setCenter({lat: 52.530334163986666, lng: 13.338519813129437});


// var layer = pdeService.createTileLayer({layer: 'ADMIN_POLY_2', level: 9}, {
//   resultType: mapsjs.service.extension.platformData.TileProvider.ResultType.POLYLINE
// });



map.addLayer(layer);

const pdeProvider = layer.getProvider();

pdeProvider.addEventListener('tap', function(e) {
  console.log(e.target.getData());
});

pdeProvider.addEventListener('pointermove', function(e) {
  var spatial = e.target;

  // We are interested only in our Spatial objects
  if (spatial instanceof H.map.Spatial) {
    // Remember default style so that when hovering out we can reset it back to original
    if (spatial.highlighted) {
      if (currentHighlightedSpatial != spatial) {
        resetPreviousSpatialStyle();
      }
    } else {
      if (currentHighlightedSpatial != spatial) {
        resetPreviousSpatialStyle();
      }
      spatial.$defaultStyle = spatial.getStyle().getCopy();
      spatial.setStyle({
        'fillColor': 'rgba(255, 0, 0, 0.5)',
        'strokeColor': 'rgba(0, 255, 0, 0.5)',
        'lineWidth': 4
      });
      spatial.highlighted = true;
      currentHighlightedSpatial = spatial;
    }
  }
});

// // Detects pointer move events on the map and changes it back to normal
map.addEventListener('pointermove', function(e) {
  if (e.target === map) {
    resetPreviousSpatialStyle();
  }
});


/**
 * Resets style of the previously highlighted spatial
 */
function resetPreviousSpatialStyle() {
  // Reset style of the previous spatial to the default one
  if (currentHighlightedSpatial) {
    currentHighlightedSpatial.setStyle(currentHighlightedSpatial.$defaultStyle);
    currentHighlightedSpatial.highlighted = false;

    delete currentHighlightedSpatial.$defaultStyle;
    currentHighlightedSpatial = null;
  }
}
