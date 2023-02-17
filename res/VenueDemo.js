/* global map, platform, ui */

let venueLayer;
let venuesProvider;
let infoBubble;


const venueLevelControl = new H.venues.ui.LevelControl();
const venueDrawingControl = new H.venues.ui.DrawingControl();


/**
 * This functions demonstrates how to initialize the venue data load, rendering & UI controls
 * @param {number} venueId
 * @param {Object} options
 * @param {string} options.apikey
 * @param {string} options.token
 * @param {string} options.hrn
 * @param {string} options.engineType
 */
const loadVenue = (venueId, options = {}) => {
  const venuesService = platform.getVenuesService(options, 2);
  return venuesService.loadVenue(venueId).then((venue) => {
    if (!venueLayer) {
      venuesProvider = new H.venues.Provider({engineType: options.engineType});
      venueLayer = new H.map.layer.TileLayer(venuesProvider);

      ui.addControl('level-control', venueLevelControl);
      ui.addControl('drawing-control', venueDrawingControl);
      enableBubbleOnTap();
    }

    // We add the venue model to the provider
    venuesProvider.addVenue(venue);
    venuesProvider.setActiveVenue(venue);

    // Venue bounds can be used to focus viewport on the venue
    map.getViewModel().setLookAtData({bounds: venue.getBoundingBox()});

    // Or center on venue
    // map.setCenter(venue.getCenter());

    // Enable drawing control ui. Only needs to be enabled if multiple buildings
    venueDrawingControl.setVenue(venue);

    // Enable level control ui
    venueLevelControl.setVenue(venue);

    // Add layer to map
    map.addLayer(venueLayer)
  });
};

/**
 * For a given location open an information popup and highlight geometry.
 * @param {mapsjs.geo.Point} position tapped on map
 * @param {H.venues.Geometry} geometry which was tapped
 * @param {boolean} highlight geometry or not
 */
const onGeometryTap = (position, geometry) => {
  const popUpContent = (geometry) =>
    `${geometry.getIdentifier()}: ${geometry.getName()} <br>`;

  if (!infoBubble) {
    infoBubble = new H.ui.InfoBubble(position, {
      onStateChange: (evt) => {
        if (evt.target.getState() === 'closed') {
          // On closing the popup, removing highlight from the geometry
          venuesProvider
            .getActiveVenue()
            .setHighlightedGeometries(false, [evt.target.getData()]);
        }
      }
    });

    // Prepare the content of the InfoBubble
    const domElement = document.createElement('div');
    domElement.innerHTML = popUpContent(geometry);
    domElement.setAttribute('style', 'width: max-content;');

    ui.addBubble(infoBubble);
  }

  // Set the new position of the InfoBubble
  infoBubble.setPosition(position);

  // Update its content
  infoBubble.getContentElement().innerHTML = popUpContent(geometry);

  // Set a new geometry in the data payload of the info bubble
  infoBubble.setData(geometry);

  // Highlight the geometry
  venuesProvider
    .getActiveVenue()
    .setHighlightedGeometries(true, [geometry], undefined, true);

  // Open the InfoBubble if geometry is not undefined
  return geometry ? infoBubble.open() : infoBubble.close();
};

/**
 * This function demonstrates how to add an event listener to the venue
 */
const enableBubbleOnTap = () => {
  venuesProvider.addEventListener('tap', (e) => {
    const geometry = e.target;
    if (geometry) {
      const position = map.screenToGeo(
          e.currentPointer.viewportX,
          e.currentPointer.viewportY
      );
      setTimeout(() => onGeometryTap(position, geometry), 0);
    }
  });
};

window.VenueDemo = {loadVenue};
