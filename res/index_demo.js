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
  burlington: {lat: 40.08509, lng: -74.83503},
  demo: {lat:40.10769,lng:-97.48195},
  demo_auto: {lat: 38.14517694309281,lng:-113.82940635574798},
  demo_tl: { lat: 40.40077272495935, lng: -76.9537960041855}
};
const center = centers["demo_tl"];
let demo_z = 7;
if(center==centers["demo_tl"]) {
  demo_z = 8;
}

const map = new H.Map(document.getElementById("indexMapContainer"), baseLayer, {
  zoom: demo_z,
  center: center,
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

var route_ids = Object.keys(index_routes);

let route_geo = new H.geo.LineString(); // This is the geometry for the entirety of the route, not its subcomponents

for (var i = 0; i < route_ids.length; i++) {
  var index_route = index_routes[route_ids[i]]; // ID of a route used for story generation
  var ls = new H.geo.LineString();
  var j = 0;
  while(j<index_route.length) {
    ls.pushLatLngAlt(index_route[j], index_route[j+1], 0);
    j+=2;
  }
  if(route_ids[i]=="truck0" || route_ids[i]=="truck1" || route_ids[i]=="truck2") {
    var routeLine = new H.map.Polyline(ls, {
      style: { strokeColor: 'rgba(191, 128, 255, 1.0)', lineWidth: 3 },
    });
    var routeArrows = new H.map.Polyline(ls, {
      style: { strokeColor: 'rgba(191, 128, 255, 1.0)', lineWidth: 3 },
    });
  }
  else {
    var routeLine = new H.map.Polyline(ls, {
      style: { strokeColor: 'rgba(0, 128, 255, 0.7)', lineWidth: 10, lineTailCap: "arrow-tail", lineHeadCap:"arrow-head" },
    });
    var routeArrows = new H.map.Polyline(ls, {
      style: { fillColor: 'white', strokeColor: "rgba(255,255,255,1)", lineWidth: 10, lineDash: [0,2],lineTailCap:"arrow-tail","lineHeadCap":"arrow-head" },
    });
  }


  routeLine.route_object_id = topo_sequence[i];
  //routeLine.setZIndex(1);
  route_objects[route_ids[i]] = routeLine;
  route_objects[route_ids[i]+"_arrows"] = routeArrows;
}

let start_dom_icon = new H.map.DomIcon(start_icon),
        start_coords = {lat:40.0840865,lng:-74.8393653},
        start_marker = new H.map.DomMarker(start_coords, { icon: start_dom_icon });

let end_dom_icon = new H.map.DomIcon(end_icon),
        end_coords = {lat:40.0819308,lng:-74.8439008},
        end_marker = new H.map.DomMarker(end_coords, { icon: end_dom_icon });

for (var i = 0; i < route_ids.length; i++) {
  map.addObject(route_objects[route_ids[i]]);
  map.addObject(route_objects[route_ids[i]+"_arrows"]);
}

//map.addObjects([start_marker,end_marker]);

window.addEventListener("resize", () => map.getViewPort().resize());

icon_types["demo_link"] = true;
icon_types["tracker"] = true;

add_all_telemetry();

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
