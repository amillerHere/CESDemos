// Initialize communication with the platform
var platform = new H.service.Platform({
      app_id: 'DemoAppId01082013GAL',
      app_code: 'AJKnXv84fjrb0KIHawS0Tg'
    }),

    // Pass poi parameter to the layers in order to see the POI icons on the base map
    defaultLayers = platform.createDefaultLayers(undefined, undefined, undefined, undefined, undefined, true),

    // Initialize a map
    map = new H.Map(document.getElementById('map'), defaultLayers.normal.map, {
      // initial center and zoom level of the map
      zoom: 16,
      // Champs-Élysées
      center: {lat: 48.869145, lng: 2.314298}
    }),

    // Make the map interactive
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map)),

    // Add default UI controls to the map
    ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

// Detects pointer move events on the map and changes it back to normal
map.addEventListener('pointermove', function(e) {
  if (e.target === map) {
    map.getElement().style.cursor = '';
    resetPreviousSpatialStyle();
  }
});

const placesService = platform.getPlacesService(),
      placesSearch = new H.places.Search(placesService),


      CATEGORIES = {
        'buildings': 'Buildings',
        'transit_stops': 'Transit Stops',
        'POIs': 'Places',
        'labels': 'Labels',
        'city center labels': 'City center labels',
        'street labels': 'Street labels'
      };

/**
 * Returns array of meta info categories which are selected
 * @return {Array.<string>} Category IDs
 */
function getCategoryIds() {
  return $('#controls input:not(:checked)').map(function(i, el) {
    return el.value;
  });
}

/**
 * Adds meta information layer to the map and makes supported geographic objects
 * (street names, city labels, parks, transit stations etc) "interactive".
 *
 * @param {H.Map} map Reference to initialized map object
 */
function updateMetaInfoLayer(map) {
  // Hack to create meta info Provider with building shapes enabled
  var metaInfoService = platform.getMetaInfoService(),
      // Retrieve blacklisted category IDs
      categoriesFilter = getCategoryIds(),
      // Create new meta information layer with specified default settings and category filter
      layer = metaInfoService.createTileLayer(256, window.devicePixelRatio, categoriesFilter, {pois: '!F'}),
      // Retrieve provider of the layer
      tileProvider = layer.getProvider();

  // Remove previous layer as it has different category filter
  if (map.metaInfoLayer) {
    map.removeLayer(map.metaInfoLayer);
  }

  // Add meta info layer to the map
  map.addLayer(layer);

  // Remember reference to the meta info layer for further use
  map.metaInfoLayer = layer;


  // Subscribe for tap events on metaInfo objects.
  // Because we are interested only in metaInfo object events,
  // we use an event delegation on TileProvider of the metaInfo layer.
  tileProvider.addEventListener('tap', onSpatialTap);

  // Change cursor when hovering over geographic objects
  tileProvider.addEventListener('pointermove', onMapObjectPointerMove);
}

/**
 * Resets style of the previously highlighted spatial
 */
function resetPreviousSpatialStyle() {
  var prevSpatial = map.$prevSpatial;
  // Reset style of the previous spatial to the default one
  if (prevSpatial) {
    prevSpatial.setStyle(prevSpatial.$defaultStyle);
    map.$prevSpatial = null;
  }
}

/**
 * Handles pointer move events on the map objects
 * @param {H.mapevents.Event} e Fired event
 */
function onMapObjectPointerMove(e) {
  var spatial = e.target,
      mapContainer = map.getElement(),
      cursorStyle = '',
      defaultStyle,
      category;

  // We are interested only in our Spatial objects
  if (spatial !== map && spatial instanceof H.map.Spatial) {
    category = spatial.getData()['category'];

    // Show category of the spatial on pointer move
    $('#spatialCategory').html(CATEGORIES[category]);

    // If spatial is a building which is not the current highlighted one, highlight it
    if (category === 'buildings' && spatial !== map.$prevSpatial) {
      defaultStyle = spatial.getStyle();
      // Remember default style so that when hovering out we can reset building style back to original one
      spatial.$defaultStyle = defaultStyle.getCopy();

      // Highlight the building
      spatial.setStyle(defaultStyle.getCopy({
        strokeColor: 'rgba(0, 85, 170, 0.6)',
        lineWidth: 1,
        fillColor: 'rgba(255, 0, 0, 0.3)'
      }));

      // Reset previously highlighted building
      resetPreviousSpatialStyle();

      // Remember reference to the current highlighted building
      map.$prevSpatial = spatial;
    }

    cursorStyle = 'pointer';
  } else {
    resetPreviousSpatialStyle();
  }

  // Update cursor style
  mapContainer.style.cursor = cursorStyle;
}


/**
 * Handler for metInfo tap/click events
 *
 * @param {H.mapevents.Event} e Fired event
 */
function onSpatialTap(e) {
  var spatial = e.target,
      placeMetaInfo = spatial.getData(),
      text = JSON.stringify(placeMetaInfo, null, 2);

  text = text.replace(/&/g, '&amp;').replace(/"(\w+)":/g, '$1:');

  $('#codeViewer').html('<code class="language-javascript">'+ text +'</code>');
  Prism.highlightElement($('#codeViewer code')[0]);

  // Fetch detailed place information form Places API

  $('#placeDetails').hide();

  if (placeMetaInfo.category == 'POIs') {
    searchForPlaces(placeMetaInfo);
  }
}

/**
 * Performs search query on the Places API for the object with the given meta information
 * @param  {Object} placeMetaInfo Place meta information
 */
function searchForPlaces(placeMetaInfo) {
  var items,
      totalAmount,
      warningText = 'No result have been found.';

  // TODO Once meta info response contains place id this step won't be necessary
  //      Note that meta info service category response does not match Places API categories,
  //      so we can not narrow down the search query here!
  placesSearch.request({
    at: placeMetaInfo.geoposition.latitude + ',' + placeMetaInfo.geoposition.longitude,
    q: placeMetaInfo.name
  }, {}, function(data) {
    items = data.results.items;
    totalAmount = items.length;

    if (data && totalAmount === 1) {
      getPlaceById(items[0].id, items[0].href);
    } else {
      $('#placeDetails').show();
      $('#placeDetails a').html('');

      if (totalAmount) {
        warningText = items.length + ' results were found.';
      }

      $('#placeDetails span').html(warningText).show();
    }
  })
}

/**
 * Retrieves detailed information about place from Places API
 * @param  {string} placeId Place ID
 * @param  {string=} href    URL of the place to use when loading information from the Places API
 * @return {[type]}         [description]
 */
function getPlaceById(placeId, href) {
  if (href) {
    $.ajax({
      dataType: 'json',
      url: href,
      success: function(data) {
        if (data) {
          $('#placeDetails').show();
          $('#placeDetails span').hide();
          $('#placeDetails a').attr('href', data.view).html('See ' + data.name + ' on HERE.com');
        }
      }
    });
  }
}



$(document).ready(function() {
  // Render a label for each category
  $.each(CATEGORIES, function(id, label) {
    $('#controls').append($('<label><input type="checkbox" checked="checked" value="' + id + '"> ' + label + '</label>'));
  });

  // Handle checkbox state change events on category labels
  $('#controls input').change(function() {
    updateMetaInfoLayer(map);
  });

  // Handle click events on location change button
  $('#changeLocation').click(function() {
    map.setCenter({lat: 40.76459020663607, lng: -73.97143146801658});
    map.setZoom(18);
  })

  // Trigger update of the meta information layer
  updateMetaInfoLayer(map);
});
