var playcounter = {};

function display(mode) {
/*
Master display mode switcher. Current modes:

'reset': Resets the display to normal
'link_accuracy': Shades based on the link accuracy
'route_roughness': Shades based on the route roughness value
'route_speed': Shade based on the route average speed delta to normal
'eta': Shade based on calculated ETA speed at time
'telemetry': Show telemetry markers.
'

      <div class="leftAction" onclick="display('reset')">Reset view</div>
      <div class="leftAction" onclick="display('link_accuracy')">Show link accuracy</div>
      <div class="leftAction" onclick="display('route_roughness')">Show route roughness</div>
      <div class="leftAction" onclick="display('route_speed')">Show route average speed</div>
      <div class="leftAction" onclick="display('eta')">Show route calculated speed</div>
      <div class="leftAction" onclick="display('telemetry')">Show telemetry data</div>

      <div class="leftAction" onclick="reshade_route()">Reset view</div>
      <div class="leftAction" onclick="reshade_link_accuracy()">Show link accuracy</div>
      <div class="leftAction" onclick="reshade_roughness()">Show route roughness</div>
      <div class="leftAction" onclick="reshade_speed()">Show route average speed</div>
      <div class="leftAction" onclick="reshade_eta()">Show route calculated speed</div>
      <div class="leftAction" onclick="add_all_telemetry()">Show telemetry data</div>
*/
  if(mode=='telemetry') {
    if(Object.keys(tel_objects).length==0) {
      // i.e. no telemetery has yet been instantiated.
      add_all_telemetry();
    }
    else {
      // Check to see whether a telemetric object is shown.
      if(tel_objects["offroute_0"].getVisibility()==true) {
        show_telemetry(false);
      }
      else {
        show_telemetry(true);
      }
    }
  }
  else {
    if(mode=="reset") {
        show_routelines(false);
        reshade_route();
    }
    else {
      show_routelines(true);
    }
    if(mode=="eta") {
      reshade_eta();
    }
    else if(mode=="route_roughness") {
      reshade_roughness();
    }
    else if(mode=="link_accuracy") {
      reshade_link_accuracy();
    }
    else if(mode=="route_speed") {
      reshade_speed();
    }
  }
}

function show_routelines(on_off) {
  start_marker.setVisibility(on_off);
  end_marker.setVisibility(on_off);
  for(var i=0;i<topo_sequence.length;i++) {
    route_objects[topo_sequence[i]].setStyle({ lineWidth: 4, strokeColor: "#126ef8" });
    route_objects[topo_sequence[i]].setVisibility(on_off);
  }
  route_overall.setVisibility(on_off);
  if(on_off==true) {
    map.getViewModel().setLookAtData({ bounds: route_overall.getBoundingBox() });
    $("#maneuver_pane").show();
  }
  else {
    $("#maneuver_pane").hide();
  }
}


function link_hover(link_id) {
  //Given a link ID (stored in route_objects) adjust the routeline width.

  for (var i = 0; i < topo_sequence.length; i++) {
    var route_style = route_objects[topo_sequence[i]].getStyle();
    var newStyle = { lineWidth: 4, strokeColor: route_style.strokeColor };
    route_objects[topo_sequence[i]].setStyle(newStyle);
    route_objects[topo_sequence[i]].setZIndex(1);
  }
  if (link_id == active_link) {
    active_link = "";
    //map.getViewPort().resize();
    map
      .getViewModel()
      .setLookAtData({ bounds: route_overall.getBoundingBox() });
    //$("#left_container").css({"width":"0%"});
    //$("#mapContainer").css({"width":"100%","left":"0%"});
  } else {
    active_link = link_id;
    var route_style = route_objects[link_id].getStyle();
    var newStyle = {
      lineWidth: route_style.lineWidth,
      strokeColor: route_style.strokeColor,
    };
    newStyle["lineWidth"] = 12;
    route_objects[link_id].setStyle(newStyle);
    route_objects[link_id].setZIndex(5);
    //$("#left_container").css({"width":"20%"});
    //$("#mapContainer").css({"width":"80%","left":"20%"});
    //map.getViewPort().resize();
    map
      .getViewModel()
      .setLookAtData({ bounds: route_objects[link_id].getBoundingBox() });
  }
  print_route_data();
  map.setZoom(map.getZoom() + 0.5);
}

function shade(v, rmin, rmax, r_type) {
  // Given a value between rmin and rmax, returns an appropriate shade.
  let int_max = rmax - rmin;
  let delta = v - rmin;
  let perc_delta = delta / int_max; // Gives the percentage of the way through this range.
  const ranges = {
    s_d: {
      0.0: "#126ef8",
      0.2: "#1257b8",
      0.45: "#0d5ed9",
      0.5: "#126ef8",
      0.7: "#6b9cff",
      0.85: "#00a86f",
      1.0: "#0bc7c2",
    },
    s_e: {
      0.0: "#cf001a",
      0.2: "#8f0029",
      0.4: "#ffbd09",
      0.6: "#6b9cff",
      0.8: "#00a86f",
      1.0: "#126ef8",
    },
    s_i: {
      1.0: "#990033",
      0.8: "#cc0000",
      0.6: "#ff6600",
      0.4: "#ff9933",
      0.2: "#e6e600",
      0.1: "#33cc33",
      0.0: "#009900",
    },
  };
  const r_ids = Object.keys(ranges[r_type]).sort();
  let color = ranges[r_type][r_ids[0]];
  for (var i = 1; i < r_ids.length; i++) {
    if (perc_delta > r_ids[i]) {
      color = ranges[r_type][r_ids[i]];
    }
  }
  return color;
}

function unhover() {
  for (var i = 0; i < topo_sequence.length; i++) {
    var route_style = route_objects[topo_sequence[i]].getStyle();
    var newStyle = { lineWidth: 4, strokeColor: route_style.strokeColor };
  }
}

function reshade_route() {
  // Resets the route to normal styling
  for (var i = 0; i < topo_sequence.length; i++) {
    var r_e = route_objects[topo_sequence[i]];
    r_e.setStyle({ lineWidth: 4, strokeColor: "#126ef8" });
  }
}

function reshade_eta() {
  var min_speed_delta = 10000;
  var max_speed_delta = 0;
  for (var i = 0; i < topo_sequence.length; i++) {
    var r_e = route_objects[topo_sequence[i]];
    var r_d = topo_link[topo_sequence[i]];
    var color = shade(r_d["eta_delta"], 0, 34, "s_i");
    if (r_d["eta_delta"] > max_speed_delta) {
      max_speed_delta = r_d["eta_delta"];
    }
    if (r_d["eta_delta"] < min_speed_delta) {
      min_speed_delta = r_d["eta_delta"];
    }
    r_e.setStyle({ lineWidth: 4, strokeColor: color });
  }
  console.log(min_speed_delta, max_speed_delta);
}

function reshade_link_accuracy() {
  for (var i = 0; i < topo_sequence.length; i++) {
    var r_e = route_objects[topo_sequence[i]];
    var r_d = topo_link[topo_sequence[i]];
    if (r_d["LINK_ACCURACY"] == "3") {
      r_e.setStyle({ lineWidth: 4, strokeColor: "#4080FF" });
    } else {
      r_e.setStyle({ lineWidth: 4, strokeColor: "#6b9cff" });
    }
  }
}

function reshade_speed(smin, smax) {
  if (smin == undefined) {
    smin = -7;
  }
  if (smax == undefined) {
    smax = 12;
  }
  var min_speed_delta = 10000;
  var max_speed_delta = 0;
  for (var i = 0; i < topo_sequence.length; i++) {
    var r_e = route_objects[topo_sequence[i]];
    var r_d = topo_link[topo_sequence[i]];
    var speed_delt =
      parseFloat(r_d["AVG_SPEED"]) - parseFloat(r_d["FREE_FLOW_SPEED"]);
    if (speed_delt > max_speed_delta) {
      max_speed_delta = speed_delt;
    }
    if (speed_delt < min_speed_delta) {
      min_speed_delta = speed_delt;
    }
    var color = shade(speed_delt, smin, smax, "s_d");
    r_e.setStyle({ lineWidth: 4, strokeColor: color });
  }
  console.log(min_speed_delta, max_speed_delta);
}

function reshade_roughness() {
  for (var i = 0; i < topo_sequence.length; i++) {
    var r_e = route_objects[topo_sequence[i]];
    var r_d = topo_link[topo_sequence[i]];
    if (r_d["ROUGH_AVG"] == "2") {
      r_e.setStyle({ lineWidth: 4, strokeColor: "#c41c33" });
    } else {
      r_e.setStyle({ lineWidth: 4, strokeColor: "#4080FF" });
    }
  }
}

function show_telemetry(show = false) {
  /*
    
    Shows all the telemetry objects.
    
    */
  for (let k in tel_objects) {
    tel_objects[k].setVisibility(show);
    $(tel_objects[k].dom_id).css({"background-color":tel_objects[k].nominal_background,"border-color":"var(--hds-accent)","border-width":"0rem","margin-left":"-.8rem","margin-top":"-1rem"});
  }
}

function add_all_telemetry() {
  /*
    
    Adds all events based on the data available in the events object. Each event has 
    geom: {lat, lon}
    type: string -- event type
    time: string -- how long ago event was reported
  
  var icon = new H.map.DomIcon(alertHTML),
    coords = { lat: 39.74576, lng: -105.00017 },
    marker = new H.map.DomMarker(coords, { icon: icon });
  
    */

  if (Object.keys(tel_objects).length == 0) {
    /*
      i.e. first run, populate all telemetric objects
      */
    for (var i = 0; i < demo_events.length; i++) {
      let d = demo_events[i];
      //let icon = new H.map.DomIcon(alert_html[d["type"]]),coords=d["geom"],marker=new H.map.DomMarker(coords,{icon:icon});
      let d_i = $("<i />");
      $(d_i).addClass("hds-iconlibrary-24px");
      //tel_icons[d["uid"]] = $("<i />",{"class":"hds-iconlibrary-24px"});
      let a = alert_html[d["type"]];
      if(a["font-size"]==undefined) {
        a["font-size"] = "100%";
      }
      if(a["icon-type"]==undefined) {
        a["icon-type"] = "normal";
      }

      let d_c = document.createElement("i");
      d_c.setAttribute("id","icon_"+d["uid"]);
      d_c.classList.add("hds-iconlibrary-24px");
      d_c.classList.add(a["ref"])
      d_c.style.width = a["width"];
      d_c.style.height = a["height"];
      d_c.style.lineHeight = a["line-height"];
      d_c.style.color = a["color"];
      d_c.style.backgroundColor = a["background-color"];
      d_c.style.textAlign = "center";
      d_c.style.marginLeft = a["margin-left"];
      d_c.style.marginTop = a["margin-top"];
      d_c.style.fontSize = a["font-size"];
      d_c.style.display = "inline-block";
      if(a["icon-type"]=="warning") {
        d_c.style.backgroundImage = "linear-gradient(45deg,white 47%,red 47%, red 53%,white 53%)";
        d_c.style.borderRadius = "50%";
        d_c.style.borderStyle = "solid";
        d_c.style.borderColor = "red";
        d_c.style.borderWidth = "2px";
      }
      else if(a["icon-type"]=="demo_link") {
        d_c.style.borderRadius = "50%";
        d_c.style.borderStyle = "solid";
        d_c.style.borderColor = "rgba(0,0,0,0)";
        //d_c.style.borderImage = "linear-gradient(45deg,#E29ABF,#48DAD0) 1";
        //d_c.style.borderColor = "#0d5ed9";
        //d_c.style.borderWidth = "3px"; 
      }
      else {
        d_c.style.borderStyle = "solid";
        d_c.style.borderColor = "rgba(0,0,0,0)";
        d_c.style.borderWidth = "0rem";
      }


      if(a["icon-type"]=="demo_link") {
        let d_link = document.createElement("div");
        d_link.innerHTML = "&nbsp;";
        d_link.classList.add("demo_link");
        d_link.style.width = a["bgwidth"];
        d_link.style.height = a["bgheight"];
        d_link.style.marginLeft = a["bg-margin-left"];
        d_link.style.marginTop = a["bg-margin-top"];
        //d_c.style.padding = ".2em";
        d_link.appendChild(d_c);
        d_c.style.display = "inline-block";
        tel_icons[d["uid"]] = d_link;
      }
      else {
        tel_icons[d["uid"]] = d_c;
      }
      //$("#default_controllers").append(d_i);
      
      let icon = new H.map.DomIcon(tel_icons[d["uid"]]),
        coords = d["geom"],
        marker = new H.map.DomMarker(coords, { icon: icon });
      marker.marker_object_id = parseInt(i);
      marker.logical_id = d["uid"];
      marker.dom_id = "#icon_"+d["uid"];
      marker.nominal_background = a["background-color"];
      marker.icon_type = a["icon-type"];
      if(d["uid"]=="auto_tracker") {
        marker.anim_step = 0;
        marker.anim_path = [];
        var build_done = false;
        var r_idx = 0;
        while(build_done == false) {
          var s_lat = anim_guides["a"][r_idx];
          var s_lng = anim_guides["a"][r_idx+1];
          marker.anim_path.push({"lat":s_lat,"lng":s_lng});
          r_idx += 2
          if(r_idx > anim_guides["a"].length) {
            build_done = true;
          }
        }
      }
      if(d["uid"]=="charging_demo" || d["uid"]=="lastmile_demo" || d["uid"]=="lastmile_demo_2" || d["uid"]=="auto_demo" || d["uid"] == "middlemile_demo" || d["uid"]=="shipmentvisibility_demo" || d["uid"]=="assettracking_demo" || d["uid"] == "adz_demo") {
        marker.addEventListener(
          "tap",
          function (e) {
            load_iframe_demo(this.logical_id);
          },
          false
        );
      }
      else {
        marker.addEventListener(
          "tap",
          function (e) {
            print_tel_data(this.marker_object_id);
            console.log(this);
          },
          false
        );
      }

      if(icon_types[marker.icon_type]==true) {
        // Add this if the icon type is appropriate for the demo scope.
        tel_objects[d["uid"]] = marker;
      }
    }
    var tel_ids = Object.keys(tel_objects);
    for (var i = 0; i < tel_ids.length; i++) {
      map.addObject(tel_objects[tel_ids[i]]);
    }
  } else {
    show_telemetry(true);
  }
}

function load_iframe_demo(demo_id) {
  if(demo_id==false) {
    demo_id = active_demo;
  }
  else {
    if(playcounter[demo_id]==undefined) {
      playcounter[demo_id] = 1;
    }
    else {
      playcounter[demo_id]++;
    }
    document.getElementById("loadcounter").src = "./"+demo_id+"_"+playcounter[demo_id];
  }
  if(demo_id=="charging_demo") {
    document.getElementById("demo_iframe").src = "./evrouting.html";
  }
  else if(demo_id=="auto_demo") {
    document.getElementById("demo_iframe").src = "./demo.html";
  }
  else if(demo_id=="lastmile_demo" || demo_id=="lastmile_demo_2") {
    document.getElementById("demo_iframe").src = "./lastmile/ufo.html";
  }
  else if(demo_id=="middlemile_demo") {
    document.getElementById("demo_iframe").src = "https://app.teamwalnut.com/player/?demoId=f91db6ba-3ed7-4b32-b78f-f1a52a2701b1&showGuide=true&showGuidesToolbar=false&showHotspots=true";
  }
  else if(demo_id=="assettracking_demo") {
    document.getElementById("demo_iframe").src = "https://app.teamwalnut.com/player/?demoId=2d334d5b-3187-45db-99e6-4141074b9ebf&showGuide=true&showGuidesToolbar=false&showHotspots=true";
  }
  else if(demo_id=="shipmentvisibility_demo") {
    document.getElementById("demo_iframe").src = "https://app.teamwalnut.com/player/?demoId=4f8a2f7c-52d6-45d5-b164-7b40a6a7e9c3&showGuide=true&showGuidesToolbar=false&showHotspots=true";
  }
  else if(demo_id=="adz_demo") {
    document.getElementById("demo_iframe").src = "https://app.teamwalnut.com/player/?demoId=6da354d5-2e9f-4700-99b3-96b3f66591cf&showGuide=true&showGuidesToolbar=false&showHotspots=true";
  }
  
  if(active_demo!=demo_id) {
    active_demo = demo_id;
    $("#leftTab").css({"left":"0px"});
    iframe_cycle();
  }
}

function animate_path(m) {
  // Takes as an argument a marker.
  // The marker should have forced route pathing and a step value associated with it.
  if(m.anim_step==undefined) {
    return;
  }
  m.anim_step = m.anim_step + 1;
  if(m.anim_step < m.anim_path.length-1) {
    ease(
      m.getGeometry(),
      m.anim_path[m.anim_step],
      60,
      function(coord) {
        m.setGeometry(coord);
      },
      function() { animate_path(m) }
    )
  }
  else {
    m.setGeometry(m.anim_path[0]);
    m.anim_step = 0;
    animate_path(m);
  }
}

function animate_point(point) {
  ease(
    point.getGeometry(),
    {"lat":39.75657884628864,"lng":-104.9971469039034},
    100,
    function(coord){
      point.setGeometry(coord);
    }
  )

}

function ease(
  startCoord = {lat: 0, lng: 0},
  endCoord = {lat: 1, lng: 1},
  durationMs = 200,
  onStep = console.log,
  onComplete = function() {},
) {
  var raf = window.requestAnimationFrame || function(f) {window.setTimeout(f, 16)},
      stepCount = durationMs / 16,
      valueIncrementLat = (endCoord.lat - startCoord.lat) / stepCount,
      valueIncrementLng = (endCoord.lng - startCoord.lng) / stepCount,
      sinValueIncrement = Math.PI / stepCount,
      currentValueLat = startCoord.lat,
      currentValueLng = startCoord.lng,
      currentSinValue = 0;

  function step() {
    currentSinValue += sinValueIncrement;
    currentValueLat += valueIncrementLat * (Math.sin(currentSinValue) ** 2) * 2;
    currentValueLng += valueIncrementLng * (Math.sin(currentSinValue) ** 2) * 2;

    if (currentSinValue < Math.PI) {
      onStep({lat: currentValueLat, lng: currentValueLng});
      raf(step);
    } else {
      onStep(endCoord);
      onComplete();
    }
  }

  raf(step);
}

function iframe_cycle(force_close=false) {
  /*

  This function only changes whether or not the iframe is visible, and does nothing else.

   */
  var current_left = $("#leftTab").css("left");
  console.log(current_left);
  if(force_close==true) {
    current_left = "80px";
  }
  if(current_left=="0px") {
    // This means that the tab bar is visible. So it should be removed to allow for the iframe to load.
    $("#leftTab").velocity({"left":["-80px","0px"]},150);
    $("#reload_iframe").velocity({"right":[".7em","-2.7em"]},150);
    $("#close_iframe").velocity({"left":[".2em","-2.7em"]},150);
    $("#demo_iframe_container").velocity({"left":["0%","100%"]},150);
  }
  else {
    active_demo = "";
    $("#leftTab").velocity({"left":["0px","-80px"]},150);
    $("#close_iframe").velocity({"left":["-2.7em",".2em"]},150);
    $("#reload_iframe").velocity({"right":["-2.7em",".7em"]},150);
    $("#demo_iframe_container").velocity({"left":["100%","0%"]},150);
  }
  console.log(current_left);
}

function pireduce(dec_v, hex = false) {
  var dec_v = parseFloat(dec_v); // Should be a number between 0 and 99
  var divisor = 9.0;
  if (hex == true) {
    divisor = 15.0;
  }
  var h_opt = Math.round((dec_v / 100.0) * divisor);
  if (hex == true) {
    var h_ret = {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "a",
      11: "b",
      12: "c",
      13: "d",
      14: "e",
      15: "f",
    };
    return h_ret[h_opt];
  } else {
    return "" + h_opt;
  }
}

function return_guid(args) {
  /*
    example arg
    {p1:3,
     p2:0,
     format:[["d",4],["_"],["h",7]]
    }
    */
  if (args["p2"] == undefined) {
    args["p2"] = 0;
  }
  var fin_guid = "";
  // pi_val has 2572 digits of pi
  const pi_val =
    "3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302955321165344987202755960236480665499119881834797753566369807426542527862551818417574672890977772793800081647060016145249192173217214772350141441973568548161361157352552133475741849468438523323907394143334547762416862518983569485562099219222184272550254256887671790494601653466804988627232791786085784383827967976681454100953883786360950680064225125205117392984896084128488626945604241965285022210661186306744278622039194945047123713786960956364371917287467764657573962413890865832645995813390478027590099465764078951269468398352595709825822620522489407726719478268482601476990902640136394437455305068203496252451749399651431429809190659250937221696461515709858387410597885959772975498930161753928468138268683868942774155991855925245953959431049972524680845987273644695848653836736222626099124608051243884390451244136549762780797715691435997700129616089441694868555848406353422072225828488648158456028506016842739452267467678895252138522549954666727823986456596116354886230577456498035593634568174324112515076069479451096596094025228879710893145669136867228748940560101503308";
  var dig_a = 0 + args["p1"] + args["p2"];
  var sub_d = ""; // Subdigits
  var f_dig = "00"; // First digit string
  var o_dig = "0"; // Offset string
  var new_offset = 0;
  for (var i = 0; i < args.format.length; i++) {
    var sub_f = args.format[i];
    if (typeof sub_f == "string") {
      fin_guid += sub_f; // So this just contained a divider character.
    } else {
      var ishex = false;
      if (sub_f[0] == "h") {
        ishex = true;
      }
      for (var j = 0; j < sub_f[1]; j++) {
        sub_d = pi_val.substring(dig_a, dig_a + 3);
        // This gives us a 3-digit string like "813"

        f_dig = sub_d.substring(0, 2); // 81
        o_dig = sub_d.substring(2, 3); // 3
        //console.log(dig_a,sub_d,f_dig,o_dig);
        fin_guid += pireduce(f_dig, ishex); // Appends a character to the UID string.
        // Now we need to calculate our offsets.
        new_offset = dig_a + 1 + parseInt(o_dig) + args["p2"];
        //console.log(new_offset);
        if (new_offset > 2569) {
          new_offset = new_offset - 2569;
        }
        dig_a = new_offset;
      }
    }
  }
  return fin_guid;
}

function hds_obj(args) {
  /*
    Returns an object to print to the screen.
    {
      "caption":"Object caption",
      "value":string of value
      "type":subhead,data
    }
    */
  var hds_class = "leftDataText";
  if (args["type"] != undefined) {
    if (args["type"] == "subhead") {
      hds_class = "leftSubhead";
    } else if (args["type"] == "title") {
      hds_class = "leftMainhead";
    }
  }
  var hds_dom_obj = $("<div />", { class: hds_class });
  if (hds_class == "leftDataText") {
    var left = $("<span />", { class: "leftCaption", text: args["caption"] });
    var right = $("<span />", { class: "leftValue", text: args["value"] });
    $(hds_dom_obj).append($(left));
    $(hds_dom_obj).append($(right));
  } else {
    $(hds_dom_obj).append(args["value"]);
  }
  return hds_dom_obj;
}

function return_pretty_time(t) {
  // Given a t in seconds returns a time string.
  var minutes = Math.floor(parseFloat(t) / 60);
  var seconds = parseInt(t) % 60;
  var minute_string, second_string;
  if (minutes > 0) {
    minute_string = minutes + " min, ";
  } else {
    minute_string = "";
  }
  if (seconds < 10) {
    second_string = "0" + seconds + " seconds ago";
  } else {
    second_string = seconds + " seconds ago";
  }
  return minute_string + second_string;
}

function print_tel_data(ev_idx) {
  /*
    Pretty-prints telemetric data to the screen.
    */
  var ref = demo_events[ev_idx].uid;
  $("#leftData").empty();
  show_telemetry(true);
  if(active_tel==ref) {
    active_tel = "";
  }
  else {
    active_tel = ref;
    if(demo_events[ev_idx].cluster_uid!=undefined) {
      var cluster_ref = demo_events[ev_idx].cluster_uid; // This cluster UID will be used to shade all events that are related to this one.
    }
    else {
      var cluster_ref = false;
    }
    for(var i=0;i<demo_events.length;i++) {
      if(demo_events[i].cluster_uid!=undefined) {
        if(demo_events[i].cluster_uid==cluster_ref) {
          $(tel_objects[demo_events[i].uid].dom_id).css({"background-color":"var(--hds-accent)"});
        }
      }
    }
    $(tel_objects[ref].dom_id).css({"background-color":"var(--hds-accent)"});
    $(tel_objects[ref].dom_id).css({"border-color":"var(--hds-accent)","border-width":".2rem","margin-left":"-.9rem","margin-top":"-1.1rem"});
    console.log(ev_idx);
    var tel_evt = demo_events[ev_idx];
    if (tel_evt["guid"] == undefined) {
      tel_evt["guid"] = return_guid({
        p1: ev_idx,
        format: ["00", ["d", 5], "_", ["h", 12]],
      });
    }
    if (tel_evt["vehicle_uid"] == undefined) {
      tel_evt["vehicle_uid"] = return_guid({
        p1: 14 + ev_idx,
        p2: 5,
        format: ["$_", ["h", 8]],
      });
    }
    if (tel_evt["cluster_uid"] == undefined) {
      tel_evt["cluster_uid"] = return_guid({
        p1: 14 + ev_idx,
        p2: 5,
        format: ["$_", ["h", 8]],
      });
    }
    var tel_time = return_pretty_time(parseInt(tel_evt["time"]));
    
    $("#leftData").append(hds_obj({ type: "subhead", value: "Event" }));
    $("#leftData").append(
      hds_obj({ caption: "event_guid: ", value: tel_evt["guid"] })
    );
    $("#leftData").append(
      hds_obj({ caption: "Vehicle: ", value: tel_evt["vehicle_uid"] })
    );
    $("#leftData").append(hds_obj({ caption: "Type: ", value: tel_evt["text"] }));
    $("#leftData").append(hds_obj({ caption: "Age: ", value: tel_time }));
  }

}

function reset_route_from_hover() {
  // Special function to reset route from clicking left panel
  link_hover(active_link);
}

function print_route_data() {
  $("#leftData").empty();
  if (active_link != "") {
    $("#default_controllers").hide();
    $("#maneuver_pane").hide();
    var rdat = topo_link[active_link];
    var speedlimit = parseInt(parseFloat(rdat["FREE_FLOW_SPEED"]) / 1.6);
    var speedlimit_actual = parseInt(parseFloat(rdat["AVG_SPEED"]) / 1.6);
    var controlled = "No";
    var limited_access = "No";
    var divided = "No";
    var lane_count = 2;
    if (rdat["CONTROLLED_ACCESS"] == "Y") {
      controlled = "Yes";
    }
    if (rdat["LIMITED_ACCESS_ROAD"] == "Y") {
      limited_access = "Yes";
    }
    if (rdat["DIVIDER"] == "Y") {
      divided = "Yes";
    }
    if (rdat["PHYSICAL_NUM_LANES"] != "None") {
      lane_count = rdat["PHYSICAL_NUM_LANES"];
    }
    var head_div = $("<div />", { class: "leftMainhead", text: rdat["NAME"] });
    $(head_div).on("click",function() {
      reset_route_from_hover();
    })
    $("#leftData").append(
      head_div
    );
    $("#leftData").append($("<hr />"));
    $("#leftData").append(
      $("<div />", { class: "leftSubhead", text: "Basic road segment data:" })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Functional class: " + rdat["CLASS"],
      })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Toll road: No",
      })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Limited access: " + limited_access,
      })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Controlled access: " + controlled,
      })
    );
    $("#leftData").append(
      $("<div />", { class: "leftDataText", text: "Divided: " + divided })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Number of lanes: " + lane_count,
      })
    );

    $("#leftData").append(
      $("<div />", { class: "leftSubhead", text: "ISA Readiness Data:" })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Posted speed limit: " + speedlimit + "mph",
      })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Speed category: " + rdat["SPEED_CATEGORY"],
      })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Average speed: " + speedlimit_actual + "mph",
      })
    );
    $("#leftData").append(
      $("<div />", { class: "leftDataText", text: "Last updated: 17d ago" })
    );

    $("#leftData").append(
      $("<div />", { class: "leftSubhead", text: "ADAS Readiness Data:" })
    );
    $("#leftData").append(
      $("<div />", { class: "leftDataText", text: "Road verified: Yes" })
    );
    $("#leftData").append(
      $("<div />", { class: "leftDataText", text: "Data quality: High" })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Lane category: " + rdat["LANE_CATEGORY"],
      })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Roughness parameter 1: " + rdat["IRI_AVG"],
      })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Roughness parameter 2: " + rdat["ROUGH_AVG"],
      })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Slope parameters: " + rdat["SLOPES"],
      })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Headings: " + rdat["HEADINGS"],
      })
    );
    $("#leftData").append(
      $("<div />", {
        class: "leftDataText",
        text: "Curvature: " + rdat["CURVATURES"],
      })
    );
  } else {
    $("#default_controllers").show();
    $("#maneuver_pane").show();
  }
}
