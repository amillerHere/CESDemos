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

console.log(maptypes);

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
  demo_tl: { lat: 40.40077272495935, lng: -76.9537960041855},
  demo_ak: { lat: 65.35969638779534, lng: -153.51963353961014}
};
const center = centers["demo_ak"];
let demo_z = 7;
if(center==centers["demo_tl"]) {
  demo_z = 8;
}
else if(center==centers["demo_ak"]) {
    demo_z = 5.3;
}

const map = new H.Map(document.getElementById("mapContainer_AK"), baseLayer, {
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

//map.addObjects([start_marker,end_marker]);

window.addEventListener("resize", () => map.getViewPort().resize());

icon_types["demo_link"] = true;
icon_types["tracker"] = true;

function ak_redraw() {
    var ak_style = map.getBaseLayer().getProvider().getStyle();
    var ak_water = ak_style.extractConfig("water");
    var uses = ["park","national_park","glacier","forest"];
    var labels = ["text_visible_admin","text_visible_populated_places", "text_visible_neighbourhoods", "text_visible_water_labels", "text_visible_building","text_visible_address", "text_visible_roads", "text_visible_ferry","text_visible_ski_run", "text_visible_chair_lift"]
    for(var i=0;i<uses.length;i++) {
        var ak_park_substyle = ak_style.extractConfig("landuse."+[uses[i]]);
        ak_park_substyle.layers.landuse[uses[i]].draw.polygons.color = $("#land_color").val();
        ak_style.mergeConfig(ak_park_substyle);
    }
    //ak_style.setProperty("global.land_color",$("#land_color").val());
    //ak_style.setProperty("global.scene_background_color",$("#land_color").val());
    ak_water.layers.water.draw.polygons.color = $("#water_color").val();
    ak_style.mergeConfig(ak_water);
    for(var i=0;i<labels.length;i++) {
        ak_style.setProperty("global."+labels[i],false);
    }
    ak_style.setProperty("global.scene_background_color",$("#land_color").val()); 
    ak_style.setProperty("global.water_color",$("#water_color").val());
    ak_style.setProperty("global.highway_width",0);
    ak_style.setProperty("global.highway_trunk_width",0);
    ak_style.setProperty("global.major_road_width",0);
    ak_style.setProperty("global.minor_road_width",0);
}

//add_all_telemetry();

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
