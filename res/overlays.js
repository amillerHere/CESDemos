// animated overlay:
const animeOverlay = new mapsjs.map.Overlay(
    new mapsjs.geo.Rect(55, 4, 47, 16),
    ' ',
    {
      opacity: 0.2,
      data: {
        start: function() {
          if (!this.handle) {
            this.handle = setInterval(function() {
              animeOverlay.setBitmap('data:image/gif;base64,R0lGODlhAQABAPAAA' +
              ['AAAAP', 'AAA//', 'AD/AP', 'AD///', 'P8AAP', 'P8A//', 'P//AP']
                [((Date.now() / 1000) << 0) % 7] + '///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
            }, 1000);
          }
        },

        stop: function() {
          if (this.handle) {
            clearInterval(this.handle);
            this.handle = 0;
          }
        }
      }
    }
);
map.addObject(animeOverlay).getData().start();

// simple overlay:
map.addObject(new mapsjs.map.Overlay(
    new mapsjs.geo.Rect(55, 18, 47, 30),
    'data:image/gif;base64,R0lGODlhAQABAPAAAAAAAP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
    {
      opacity: 0.5
    })
);

// an overlay that crosses the date border:
map.addObject(new mapsjs.map.Overlay(
    new mapsjs.geo.Rect(90, 170, 0, -170),
    'data:image/gif;base64,R0lGODlhAQABAPAAAAAA/////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
    {
      opacity: 0.5
    })
);

// an overlay that covers 360 degrees:
map.addObject(new mapsjs.map.Overlay(
    new mapsjs.geo.Rect(-90, -180, 0, 180),
    'data:image/gif;base64,R0lGODlhAQABAPAAAAD/AP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
    {
      opacity: 0.5
    })
);

// SVG overlay:
map.addObject(new mapsjs.map.Overlay(
    new mapsjs.geo.Rect(50, -100, 30, -75),
    'http://iot-mapsjs.builds.release.in.here.com:8081/testFiles/images/testIcons/icon.svg',
    {
      opacity: 0.5,
      crossOrigin: true
    })
);

// PNG overlay:
map.addObject(new mapsjs.map.Overlay(
    new mapsjs.geo.Rect(0, 0, -89, 179),
    'http://iot-mapsjs.builds.release.in.here.com:8081/testFiles/images/testIcons/icon_nokiaDrive.png',
    {
      opacity: 0.5,
      min: 2,
      crossOrigin: true
    })
);

map.setZoom(1);
map.setCenter({lat: 0, lng: 0});
