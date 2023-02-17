var active_link = ""; // Link for which information is being displayed.
var active_marker = "";
var active_demo = ""; // This is the demo that will need to be reloaded in the iframe.
var active_tel = ""; // The ID of the active telemetric data.
var active_cluster = ""; // The ID (vehicle ID? cluster ID?) for which all should be highlighted
let route_objects = {}; // This is the container for all the route subcomponents
let tel_objects = {}; // This is the container for all the telemetric events
let tel_icons = {}; // This contains separate icons for the different marker types.

const icon_types = {}; // Stores which kind of icon types we should display.

const start_icon = "<div class=\"domMarker container_marker without_highlight has_svg\" style=\"background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDQwIDUwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0zNC4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOSAxOS4wNkMzOSA4LjU0OSAzMC40NzggMCAyMCAwUzEgOC41NSAxIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE5Ljk3NSA0NiAzMi44MyAzMy4xMDRjLjQwNy0uMzc0IDEuNDE5LTEuNDUyIDEuNDE5LTEuNDUyeiIvPjxtYXNrIGlkPSJjIiB3aWR0aD0iMzgiIGhlaWdodD0iNDYiIHg9IjAiIHk9IjAiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PGVsbGlwc2UgaWQ9ImIiIGN4PSIxOS44MDciIGN5PSIxOS4xNjgiIHJ4PSIxMi4zNjMiIHJ5PSIxMi4xOTciLz48bWFzayBpZD0iZCIgd2lkdGg9IjI1LjcyNSIgaGVpZ2h0PSIyNS4zOTQiIHg9Ii0uNSIgeT0iLS41Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi45NDQgNi40NzFoMjUuNzI1djI1LjM5NEg2Ljk0NHoiLz48dXNlIHhsaW5rOmhyZWY9IiNiIi8+PC9tYXNrPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxlbGxpcHNlIGN4PSIyMCIgY3k9IjQ1LjE2IiBmaWxsPSIjRkZGIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS13aWR0aD0iLjI1IiByeD0iMy41IiByeT0iMy41Ii8+PHVzZSBmaWxsPSIjMzIzMjMyIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGZpbGw9IiM3RDdEN0QiIGQ9Ik0xMi4wMTEgMzcuODA1aDE1Ljk3OGwtNy45MTYgOHoiLz48dXNlIHN0cm9rZT0iIzdDN0M3QyIgc3Ryb2tlLXdpZHRoPSIuNSIgbWFzaz0idXJsKCNlKSIgeGxpbms6aHJlZj0iI2EiLz48dXNlIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIuNSIgbWFzaz0idXJsKCNjKSIgeGxpbms6aHJlZj0iI2EiLz48ZWxsaXBzZSBmaWxsPSIjRkZGIiBjeD0iMTkuODA3IiBjeT0iMTkuMTY4IiByeD0iMTIuMzYzIiByeT0iMTIuMTk3Ii8+PHBhdGggZmlsbD0iIzMyMzIzMiIgZD0iTTYuODEyIDYuOTQ4aDYuNDV2Ni4zNjRoLTYuNDV6bTAgMTIuNzI3aDYuNDV2Ni4zNjRoLTYuNDV6bTYuNDUtNi4zNjNoNi40NXY2LjM2NGgtNi40NXptMCAxMi43MjdoNi40NXY2LjM2NGgtNi40NXptNi40NS0xOS4wOTFoNi40NXY2LjM2NGgtNi40NXptMCAxMi43MjdoNi40NXY2LjM2NGgtNi40NXptNi40NS02LjM2M2g2LjQ1djYuMzY0aC02LjQ1em0wIDEyLjcyN2g2LjQ1djYuMzY0aC02LjQ1eiIvPjx1c2Ugc3Ryb2tlPSIjRkZGIiBtYXNrPSJ1cmwoI2QpIiB4bGluazpocmVmPSIjYiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48L3N2Zz4='); background-color: rgb(1, 182, 178); z-index: 2; transform: matrix(1, 0, 0, 1, 612, 555.5); position: absolute;\"></div>";
const end_icon = "<div class=\"domMarker container_marker without_highlight has_svg\" style=\"background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDQwIDUwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImIiIGQ9Ik0zNC4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOSAxOS4wNkMzOSA4LjU0OSAzMC40NzggMCAyMCAwUzEgOC41NSAxIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE5Ljk3NSA0NiAzNC4yNSAzMS42NTJ6Ii8+PHBhdGggaWQ9ImEiIGQ9Ik0zNC4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOSAxOS4wNkMzOSA4LjU0OSAzMC40NzggMCAyMCAwUzEgOC41NSAxIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE5Ljk3NSA0NiAzNC4yNSAzMS42NTJ6Ii8+PG1hc2sgaWQ9ImMiIHdpZHRoPSIzOCIgaGVpZ2h0PSI0NiIgeD0iMCIgeT0iMCIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iMjAiIGN5PSI0NS4xNiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjOTc5Nzk3IiBzdHJva2Utd2lkdGg9Ii4yNSIgcng9IjMuNSIgcnk9IjMuNSIvPjx1c2UgZmlsbD0iIzAxQjZCMiIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBmaWxsPSIjMzIzMjMyIiBmaWxsLW9wYWNpdHk9Ii41IiBkPSJNMTEuODEgMzcuNjZoMTYuMzhsLTguMiA4eiIvPjx1c2Ugc3Ryb2tlPSIjNDE2QTg2IiBzdHJva2Utd2lkdGg9Ii41IiBtYXNrPSJ1cmwoI2MpIiB4bGluazpocmVmPSIjYSIvPjxlbGxpcHNlIGN4PSIxOS44MSIgY3k9IjE5LjE5IiBmaWxsPSIjRkZGIiByeD0iNC44MSIgcnk9IjQuODEiLz48L2c+PC9zdmc+'); background-color: rgb(1, 182, 178); z-index: 3; transform: matrix(1, 0, 0, 1, 506, 621); position: absolute;\"></div>";

const svgMarkup =
  '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
  'height="22" /><text x="12" y="18" font-size="12pt" ' +
  'font-family="hds-iconlibrary-core-ui-24px" font-weight="bold" text-anchor="middle" ' +
  'fill="white">&#xF103;</text></svg>';
const style_inactive = "var(--hds-background-inverse)";
const style_active = "var(--hds-action)";
const icon_width = "1.6em";
const l_icon_width = "5rem";
const l_icon_lineheight = "5.5rem";
const icon_marginleft = ".05rem";
const icon_margintop = ".35rem";
const bg_marginleft = "-3.4rem";
const bg_margintop = "-2rem";
const bg_width = "6rem";
const alert_html = {
  moisture:{
    "ref":"hds-icon-devices-sensors-sensor-humidity_outline_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_active,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  moisture_off:{
    "ref":"hds-icon-devices-sensors-sensor-humidity_outline_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_inactive,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  visibility:{
    "ref":"hds-icon-weather-fog_outline_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_active,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  visibility_off:{
    "ref":"hds-icon-weather-fog_outline_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_inactive,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  attention:{
    "ref":"hds-icon-core-ui-alert_outline_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_active,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  attention_off:{
    "ref":"hds-icon-core-ui-alert_outline_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_inactive,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  traction:{
    "ref":"hds-icon-travel-transport-tracking-road-hazard_solid_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_active,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  traction_off:{
    "ref":"hds-icon-travel-transport-tracking-road-hazard_solid_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_inactive,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  speed:{
    "ref":"hds-icon-travel-transport-tracking-speedalert_outline_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_active,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  speed_off:{
    "ref":"hds-icon-travel-transport-tracking-speedalert_outline_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_inactive,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  disabled:{
    "ref":"hds-icon-travel-transport-tracking-disabled-vehicle_outline_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"white",
    "background-color":style_active,
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
  },
  truck:{
    "ref":"hds-icon-travel-transport-tracking-semi-trailer_outline_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"black",
    "background-color":"white",
    "margin-left":"-.8rem",
    "margin-top":"-1rem",
    "icon-type":"warning",
  },
  charging:{
    "ref":"hds-icon-poi-car-charging_outline_24px",
    "width":l_icon_width,
    "height":l_icon_width,
    "bgwidth":bg_width,
    "bgheight":bg_width,
    "line-height":l_icon_lineheight,
    "color":"black",
    "background-color":"white",
    "margin-left":icon_marginleft,
    "margin-top":icon_margintop,
    "bg-margin-left":bg_marginleft,
    "bg-margin-top":bg_margintop,
    "icon-type":"demo_link",
    "font-size":"300%"
  },
  lastmile:{
    "ref":"hds-icon-travel-transport-tracking-planned-tour_outline_24px",
    "width":l_icon_width,
    "height":l_icon_width,
    "bgwidth":bg_width,
    "bgheight":bg_width,
    "line-height":l_icon_lineheight,
    "color":"black",
    "background-color":"white",
    "margin-left":icon_marginleft,
    "margin-top":icon_margintop,
    "bg-margin-left":bg_marginleft,
    "bg-margin-top":bg_margintop,
    "icon-type":"demo_link",
    "font-size":"300%"
  },
  autodemo:{
    "ref":"hds-icon-misc-car-wifi-on_outline_24px",
    "width":l_icon_width,
    "height":l_icon_width,
    "bgwidth":bg_width,
    "bgheight":bg_width,
    "line-height":l_icon_lineheight,
    "color":"black",
    "background-color":"white",
    "margin-left":icon_marginleft,
    "margin-top":icon_margintop,
    "bg-margin-left":bg_marginleft,
    "bg-margin-top":bg_margintop,
    "icon-type":"demo_link",
    "font-size":"300%"
  },
  shipmentvisibility:{
    "ref":"hds-icon-travel-transport-tracking-shipment_solid_24px",
    "width":l_icon_width,
    "height":l_icon_width,
    "bgwidth":bg_width,
    "bgheight":bg_width,
    "line-height":l_icon_lineheight,
    "color":"black",
    "background-color":"white",
    "margin-left":icon_marginleft,
    "margin-top":icon_margintop,
    "bg-margin-left":bg_marginleft,
    "bg-margin-top":bg_margintop,
    "icon-type":"demo_link",
    "font-size":"300%"
  },
  middlemile:{
    "ref":"hds-icon-data-catalog_solid_24px",
    "width":l_icon_width,
    "height":l_icon_width,
    "bgwidth":bg_width,
    "bgheight":bg_width,
    "line-height":l_icon_lineheight,
    "color":"black",
    "background-color":"white",
    "margin-left":icon_marginleft,
    "margin-top":icon_margintop,
    "bg-margin-left":bg_marginleft,
    "bg-margin-top":bg_margintop,
    "icon-type":"demo_link",
    "font-size":"300%"
  },
  assettracking:{
    "ref":"hds-icon-travel-transport-tracking-tracker_solid_24px",
    "width":l_icon_width,
    "height":l_icon_width,
    "bgwidth":bg_width,
    "bgheight":bg_width,
    "line-height":l_icon_lineheight,
    "color":"black",
    "background-color":"white",
    "margin-left":icon_marginleft,
    "margin-top":icon_margintop,
    "bg-margin-left":bg_marginleft,
    "bg-margin-top":bg_margintop,
    "icon-type":"demo_link",
    "font-size":"300%"
  },
  tracker:{
    "ref":"hds-icon-navigation-image-brightness-off_solid_24px",
    "width":icon_width,
    "height":icon_width,
    "line-height":"1.8rem",
    "color":"black",
    "background-color":"white",
    "margin-left":"-.8rem",
    "margin-top":"-.8rem",
    "icon-type":"tracker",
    "font-size":"200%"
  },
  adz:{
    "ref":"hds-icon-tools-road_solid_24px",
    "width":l_icon_width,
    "height":l_icon_width,
    "bgwidth":bg_width,
    "bgheight":bg_width,
    "line-height":l_icon_lineheight,
    "color":"black",
    "background-color":"white",
    "margin-left":icon_marginleft,
    "margin-top":icon_margintop,
    "bg-margin-left":bg_marginleft,
    "bg-margin-top":bg_margintop,
    "icon-type":"demo_link",
    "font-size":"300%"
  },
}

const basic_events = [
{
    "geom":{"lat":40.084130667042864,"lng":-74.84238729671429},
    "uid":"notruck_0",
    "type":"truck",
    "icon-type":"warning",
    "text":"",
    "time":"900",
    "group":[],
},
{
    "geom":{"lat":40.08268593283715,"lng":-74.84234974580721},
    "uid":"notruck_1",
    "type":"truck",
    "icon-type":"warning",
    "text":"",
    "time":"900",
    "group":[],
},
{
    "geom":{"lat":40.09273439659936,"lng": -74.82740997641746},
    "uid":"notruck_2",
    "type":"truck",
    "icon-type":"warning",
    "text":"",
    "time":"900",
    "group":[],
},
{
    "geom":{"lat":39.5367899,"lng": -119.7880164},
    "uid":"charging_demo",
    "type":"charging",
    "text":"",
    "time":"900",
    "group":[],
},
{
    "geom":{"lat":36.1740088,"lng": -115.1448298},
    "uid":"lastmile_demo",
    "type":"lastmile",
    "text":"",
    "time":"900",
    "group":[],
},
{
    "geom":{"lat":39.8856711,"lng": -104.9074817},
    "uid":"auto_demo",
    "type":"autodemo",
    "text":"",
    "time":"900",
    "group":[],
},
{
    "geom":{"lat":40.7885384,"lng": -74.0991456},
    "uid":"shipmentvisibility_demo",
    "type":"shipmentvisibility",
    "text":"",
    "time":"900",
    "group":[],
},
{
    "geom":{"lat":39.9423516,"lng": -75.1301551},
    "uid":"middlemile_demo",
    "type":"middlemile",
    "text":"",
    "time":"900",
    "group":[],
},
{
    "geom":{"lat":40.4637796,"lng": -79.9807418},
    "uid":"assettracking_demo",
    "type":"assettracking",
    "text":"",
    "time":"900",
    "group":[],
},
{
    "geom":{"lat":39.9905777,"lng": -78.3190548},
    "uid":"lastmile_demo_2",
    "type":"lastmile",
    "text":"",
    "time":"900",
    "group":[],
},
{
    "geom":{"lat":37.6346969,"lng": -122.41924},
    "uid":"adz_demo",
    "type":"adz",
    "text":"",
    "time":"900",
    "group":[],
}
]

for(var i=0;i<basic_events.length;i++) {
    demo_events.push(basic_events[i]);
}


