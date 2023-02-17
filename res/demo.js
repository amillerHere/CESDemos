const DemoUtils = window.DemoUtils;
/// <reference path="../../../dist/row/public_npm/index.d.ts" />
/// If this URL above ^^^^^ is not available run ``grunt make-dts`` to generate one
const isRow = DemoUtils.region !== "cn";
//const apikeyRow = 'bGKdgWos4SIQlvctc8qub_sl7Qq9Scz5w5JMAeTlRzw';
const apikeyRow = "nFzH895UFsAsq9oV0CRsIfEF-bwKe_1q5Gf1NxD3j4U";
const apikeyChina = "INmA8YUHkdghq8Wj0OuFFEh4WBQWziCGWrSQNwGtM4c";
const apikey = !isRow ? apikeyChina : apikeyRow;

const pixelRatio = window.devicePixelRatio || 1,
  servicesConfig = {};

const platform = new H.service.Platform({ apikey, servicesConfig });


let engineType;
if (!isRow) {
  engineType = H.Map.EngineType["HARP"];
} else if (DemoUtils.queryParams.engineType) {
  engineType = H.Map.EngineType[DemoUtils.queryParams.engineType];
} else {
  engineType = H.Map.EngineType["WEBGL"];
}

const maptypes = platform.createDefaultLayers({
  tileSize: pixelRatio === 1 ? 256 : 512,
  ppi: pixelRatio === 1 ? undefined : 320,
  engineType,
});


const baseLayer =
  engineType === H.Map.EngineType.P2D
    ? maptypes.raster.normal.map
    : maptypes.vector.normal.map;

const centers = {
  london: { lat: 51.5, lng: 0 },
  berlin: { lat: 52.5189, lng: 13.4158 },
  beijing: { lat: 39.9139, lng: 116.358 },
  denver: { lat: 39.77068, lng: -104.78638 },
  philadelphia: {lat: 40.40077272495935, lng: -76.9537960041855},
};
const defaultzoom = 13;
const center = isRow ? centers["denver"] : centers["beijing"];

const map = new H.Map(document.getElementById("mapContainer"), baseLayer, {
  zoom: 13,
  center,
  engineType,
  renderBaseBackground: {
    lower: 2,
    higher: 2,
  },
  pixelRatio,
});

// eslint-disable-next-line no-unused-vars
const ui = H.ui.UI.createDefault(map, maptypes, "en-US");
new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

let route_geo = new H.geo.LineString(); // This is the geometry for the entirety of the route, not its subcomponents

for (var i = 0; i < topo_sequence.length; i++) {
  var ls = new H.geo.LineString();
  var geom = topo_link[topo_sequence[i]]["geom"];
  for (var j = 0; j < geom.length; j++) {
    ls.pushLatLngAlt(geom[j][0], geom[j][1], 0);
    route_geo.pushLatLngAlt(geom[j][0], geom[j][1], 0);
  }
  var routeLine = new H.map.Polyline(ls, {
    style: { strokeColor: "#126ef8", lineWidth: 4 },
  });
  routeLine.route_object_id = topo_sequence[i];
  routeLine.setZIndex(1);
  routeLine.setVisibility(false);
  routeLine.addEventListener(
    "tap",
    function (e) {
      link_hover(this.route_object_id);
      console.log(this);
    },
    false
  );
  route_objects[topo_sequence[i]] = routeLine;
}

const route_overall = new H.map.Polyline(route_geo, {
  style: { strokeColor: "black", lineWidth: 6.5 },
});

/*
let ls = new H.geo.LineString;
for(var i=0;i<routepoly.length;i++) {
  ls.pushLatLngAlt(routepoly[i][0],routepoly[i][1],0);
}

        let startMarker = new H.map.Marker(section.departure.place.location);

        // Create a marker for the end point:
        let endMarker = new H.map.Marker(section.arrival.place.location);

        // Add the route polyline and the two markers to the map:
        map.addObjects([routeLine, startMarker, endMarker]);

        // Set the map's viewport to make the whole route visible:
        map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});

var routeLine = new H.map.Polyline(ls, {
  style: { strokeColor: 'blue', lineWidth: 6 }
  });
for 
*/
//routeLine.addEventListener("tap",function() { console.log(this)},false);

let start_dom_icon = new H.map.DomIcon(end_icon),
        start_coords = route_geo.extractPoint(0),
        start_marker = new H.map.DomMarker(start_coords, { icon: start_dom_icon });

let end_dom_icon = new H.map.DomIcon(start_icon),
        end_coords = route_geo.extractPoint(route_geo.getPointCount() - 1),
        end_marker = new H.map.DomMarker(end_coords, { icon: end_dom_icon });

route_overall.setVisibility(false);
start_marker.setVisibility(false);
end_marker.setVisibility(false);


for (var i = 0; i < topo_sequence.length; i++) {
  map.addObject(route_objects[topo_sequence[i]]);
}
map.addObjects([route_overall, start_marker, end_marker]);
map.getViewModel().setLookAtData({ bounds: route_overall.getBoundingBox() });
//map.addObject(routeLine);

window.addEventListener("resize", () => map.getViewPort().resize());

$("#maneuver_pane").hide();

icon_types["normal"] = true;
icon_types["attention_off"] = true;
icon_types["traction_off"] = true;
icon_types["moisture_off"] = true;
icon_types["visibility_off"] = true;
icon_types["speed_off"] = true;
icon_types["disabled_off"] = true;
icon_types["attention"] = true;
icon_types["traction"] = true;
icon_types["moisture"] = true;
icon_types["visibility"] = true;
icon_types["speed"] = true;
icon_types["disabled"] = true;

// ###########################################  ADDITIONAL DEMOS  ####################################################
// DemoUtils.loadScript('./res/3dmodel.js');
// DemoUtils.loadScript('./res/styleDebugTools.js');
// DemoUtils.loadScript('./res/tileGridLayer.js');
// DemoUtils.loadScript('./res/tilt.js'); // tilt and heading helpers
// DemoUtils.loadScript('./res/resize.js'); // resizable container
// DemoUtils.loadScript('./res/pde.js');
// DemoUtils.loadScript('./res/clustering.js');
// DemoUtils.loadScript('./res/overlays.js');
// DemoUtils.loadScript('http://code.jquery.com/jquery-2.1.4.min.js'); loadScript('./res/metaInfo.js');
// DemoUtils.loadScript('./res/VenueDemo.js').then(() => {
//   const venueId = 25556;
//   // eslint-disable-next-line no-undef
//   VenueDemo.loadVenue(venueId, {
//     engineType,
//     apikey: '',
//     hrn: ''
//   })
// }) // adds VenueDemo Object to window object
