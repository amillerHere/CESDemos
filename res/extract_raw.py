#!/usr/bin/env python
# -*- coding: UTF-8 -*-

import re
import time
from datetime import datetime
import os
import shutil
import string
import json
import sys
import flexpolyline as fp
import math
import random

link_data = {}
processed_meta = {
  "ADAS_ATTRIB_FC1":["BUA_ROAD","BUA_ROAD_VERIFIED","LINK_ACCURACY","SLOPES","HEADINGS","CURVATURES"],
  "ADAS_ATTRIB_FC3":["BUA_ROAD","BUA_ROAD_VERIFIED","LINK_ACCURACY","SLOPES","HEADINGS","CURVATURES"],
  "ADAS_ATTRIB_FC4":["BUA_ROAD","BUA_ROAD_VERIFIED","LINK_ACCURACY","SLOPES","HEADINGS","CURVATURES"],
  "ADAS_ATTRIB_FC5":["BUA_ROAD","BUA_ROAD_VERIFIED","LINK_ACCURACY","SLOPES","HEADINGS","CURVATURES"],
  "SPEED_LIMITS_FC1":["FROM_REF_SPEED_LIMIT","TO_REF_SPEED_LIMIT","SPEED_LIMIT_SOURCE","SPEED_LIMIT_UNIT"],
  "SPEED_LIMITS_FC3":["FROM_REF_SPEED_LIMIT","TO_REF_SPEED_LIMIT","SPEED_LIMIT_SOURCE","SPEED_LIMIT_UNIT"],
  "SPEED_LIMITS_FC4":["FROM_REF_SPEED_LIMIT","TO_REF_SPEED_LIMIT","SPEED_LIMIT_SOURCE","SPEED_LIMIT_UNIT"],
  "SPEED_LIMITS_FC5":["FROM_REF_SPEED_LIMIT","TO_REF_SPEED_LIMIT","SPEED_LIMIT_SOURCE","SPEED_LIMIT_UNIT"],
  "ROAD_GEOM_FC1":["NAME"],
  "ROAD_GEOM_FC3":["NAME"],
  "ROAD_GEOM_FC4":["NAME"],
  "ROAD_GEOM_FC5":["NAME"],
  "LINK_ATTRIBUTE_FC1":["VEHICLE_TYPES","TRANSPORT_VERIFIED","TRAVEL_DIRECTION","DIVIDER","SPEED_CATEGORY","LANE_CATEGORY","COVERAGE_INDICATOR","CONTROLLED_ACCESS","LIMITED_ACCESS_ROAD","PHYSICAL_NUM_LANES"],
  "LINK_ATTRIBUTE_FC3":["VEHICLE_TYPES","TRANSPORT_VERIFIED","TRAVEL_DIRECTION","DIVIDER","SPEED_CATEGORY","LANE_CATEGORY","COVERAGE_INDICATOR","CONTROLLED_ACCESS","LIMITED_ACCESS_ROAD","PHYSICAL_NUM_LANES"],
  "LINK_ATTRIBUTE_FC4":["VEHICLE_TYPES","TRANSPORT_VERIFIED","TRAVEL_DIRECTION","DIVIDER","SPEED_CATEGORY","LANE_CATEGORY","COVERAGE_INDICATOR","CONTROLLED_ACCESS","LIMITED_ACCESS_ROAD","PHYSICAL_NUM_LANES"],
  "LINK_ATTRIBUTE_FC5":["VEHICLE_TYPES","TRANSPORT_VERIFIED","TRAVEL_DIRECTION","DIVIDER","SPEED_CATEGORY","LANE_CATEGORY","COVERAGE_INDICATOR","CONTROLLED_ACCESS","LIMITED_ACCESS_ROAD","PHYSICAL_NUM_LANES"],
  "TRAFFIC_PATTERN_FC1":["AVG_SPEED","FREE_FLOW_SPEED"],
  "TRAFFIC_PATTERN_FC3":["AVG_SPEED","FREE_FLOW_SPEED"],
  "TRAFFIC_PATTERN_FC4":["AVG_SPEED","FREE_FLOW_SPEED"],
  "TRAFFIC_PATTERN_FC5":["AVG_SPEED","FREE_FLOW_SPEED"],
  "ROAD_ROUGHNESS_FC1":["ROUGH_AVG","IRI_AVG"],
  "ROAD_ROUGHNESS_FC3":["ROUGH_AVG","IRI_AVG"],
  "ROAD_ROUGHNESS_FC4":["ROUGH_AVG","IRI_AVG"],
  "ROAD_ROUGHNESS_FC5":["ROUGH_AVG","IRI_AVG"],
  "TRAFFIC_SIGN_FC1":["TRAFFIC_SIGN_TYPE","TRAFFIC_SIGN_VALUE","TRAFFIC_SIGN_CATEGORY","TRAFFIC_SIGN_SUBCATEGORY"],
  "TRAFFIC_SIGN_FC3":["TRAFFIC_SIGN_TYPE","TRAFFIC_SIGN_VALUE","TRAFFIC_SIGN_CATEGORY","TRAFFIC_SIGN_SUBCATEGORY"],
  "TRAFFIC_SIGN_FC4":["TRAFFIC_SIGN_TYPE","TRAFFIC_SIGN_VALUE","TRAFFIC_SIGN_CATEGORY","TRAFFIC_SIGN_SUBCATEGORY"],
  "TRAFFIC_SIGN_FC5":["TRAFFIC_SIGN_TYPE","TRAFFIC_SIGN_VALUE","TRAFFIC_SIGN_CATEGORY","TRAFFIC_SIGN_SUBCATEGORY"],
}

def truncate(number, decimals=0):
    """
    Returns a value truncated to a specific number of decimal places.
    """
    if not isinstance(decimals, int):
        raise TypeError("decimal places must be an integer.")
    elif decimals < 0:
        raise ValueError("decimal places has to be 0 or more.")
    elif decimals == 0:
        return math.trunc(number)

    factor = 10.0 ** decimals
    return math.trunc(number * factor) / factor

def populate_link(l_id):
    global link_data
    # Links are indexed by topology. Here are the values they can have:
    ["BUA_ROAD","BUA_ROAD_VERIFIED","LINK_ACCURACY"]
    link_data[l_id] = {}
    for m in processed_meta:
        for d in processed_meta[m]:
            link_data[l_id][d] = False

with open("./raw_data.json") as f:
    data = f.read()

jdata = json.loads(data)
jtiles = jdata["Tiles"]
#for t in jtiles:
max_t = len(jtiles)
#max_t = 1
okay_parse = True
first_error = False

for t in range(0,max_t):
    m = jtiles[t]["Meta"]
    r = jtiles[t]["Rows"]
    lname = m["layerName"]
    if lname not in processed_meta and okay_parse == True:
        okay_parse = False
        print(lname)
        if "TOPOLOGY_ID" in r[0]:
            print("Has Topo")
        for r_i in r:
            len(r_i) #print(len(r_i))
        for r_i in r[0]:
            print(r_i,r[0][r_i])

    if okay_parse == True:
        for r_i in r:
            if "TOPOLOGY_ID" in r_i or "TOPOLOGY_IDS" in r_i:
                if "TOPOLOGY_ID" in r_i:
                    topo_id = r_i["TOPOLOGY_ID"]
                else:
                    topo_id = r_i["TOPOLOGY_IDS"]
                if topo_id not in link_data:
                    populate_link(topo_id)
                    link_data[topo_id]["CLASS"] = lname[-1]
                if lname[0:14] == "ROAD_ROUGHNESS":
                    # Special handling for road roughness averages
                    rough_avg = -1
                    iri_avg = -1
                    if r_i["FROM_AVG_ROUGHN_CAT"] != None and r_i["TO_AVG_ROUGHN_CAT"] != None:
                        # Both to/from are defined, so rough_avg is the highest of them.
                        if int(r_i["FROM_AVG_ROUGHN_CAT"]) > int(r_i["TO_AVG_ROUGHN_CAT"]):
                            rough_avg = int(r_i["FROM_AVG_ROUGHN_CAT"])
                        else:
                            rough_avg = int(r_i["TO_AVG_ROUGHN_CAT"])
                    else:
                        if r_i["FROM_AVG_ROUGHN_CAT"] != None:
                            rough_avg = int(r_i["FROM_AVG_ROUGHN_CAT"])
                        else:
                            rough_avg = int(r_i["TO_AVG_ROUGHN_CAT"])
                    if r_i["FROM_AVG_IRI"] != None and r_i["TO_AVG_IRI"] != None:
                        # Both to/from are defined, so rough_avg is the average of them.
                        # Note that these are floats.
                        avg_iri_val = float(r_i["FROM_AVG_IRI"]) + float(r_i["TO_AVG_IRI"])
                        avg_iri_val = avg_iri_val/2.0
                        iri_avg = truncate(avg_iri_val,1)
                    else:
                        if r_i["FROM_AVG_IRI"] != None:
                            iri_avg = truncate(float(r_i["FROM_AVG_IRI"]),1)
                        else:
                            iri_avg = truncate(float(r_i["TO_AVG_IRI"]),1)
                    link_data[topo_id]["ROUGH_AVG"] = rough_avg
                    link_data[topo_id]["IRI_AVG"] = iri_avg
                for dp in processed_meta[lname]:
                    if link_data[topo_id][dp] == False:
                        link_data[topo_id][dp] = r_i[dp]
            else:
                if first_error == False:
                    print(r_i)
                    first_error = True
#    for r_i in r:
#        print(len(r_i))

#for k in jtiles[1]["Rows"][0]:
#    print(k)

rtes = {}

with open("./route_json.json") as f:
    data = f.read()
rdata = json.loads(data)
rte = rdata["routes"][0]["sections"][0]
p_line = rte["polyline"]
res = fp.decode(p_line)
spans = rte["spans"]
previous_end = 0
previous_sid = ""
complete = 0
for s in spans:
    complete = complete + 1
    s_id = s["topologySegmentId"].split(":")[3]
    start = s["offset"]
    tval = random.randint(0,4)
    if complete > 30:
        tval = tval + random.randint(2,7)
    if complete > 40 and complete < 50:
        tval = tval - random.randint(0,4)
    if complete > 60:
        tval = tval + random.randint(4,15)
    if complete > 70 and complete < 80:
        tval = tval + random.randint(5,12)
    if previous_sid != "":
        rtes[previous_sid] = {
            "route":[],
            "start":previous_end,
            "end":int(s["offset"]),
            "traffic":tval
        }
        previous_end = int(s["offset"])
    previous_sid = s_id
rtes[previous_sid] = {"route":[],"start":previous_end,"end":len(res)-1,"traffic":3}

for rt in rtes:
    for i in range(rtes[rt]["start"],rtes[rt]["end"]+1):
        rtes[rt]["route"].append([res[i][0],res[i][1]])

#print(rtes["456329303"])

print(len(link_data))
links = []
json_out = open("topo_links.js","w")
json_out.write("var topo_sequence = [")
for i in range(0,len(spans)):
    s = spans[i]
    s_id = s["topologySegmentId"].split(":")[3]
    json_out.write("\"{}\"".format(s_id))
    if i < len(spans):
        json_out.write(",")
json_out.write("];\n")
json_out.write("var topo_link = {\n")
for l in link_data:
    if l in rtes:
        json_out.write("\t\"{}\":{{\n".format(l))
        json_out.write("\t\t\"geom\":{},\n".format(rtes[l]["route"]))
        json_out.write("\t\t\"eta_delta\":{},\n".format(rtes[l]["traffic"]))
        for m in link_data[l]:
            json_out.write("\t\t\"{}\":\"{}\",\n".format(m,link_data[l][m]))
        json_out.write("\t},\n")
json_out.write("};")
json_out.close()


#print(links)
#print(link_data["807999726"])