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
from xml.dom import minidom

#braking = "-104.7201420833803,39.83323327212702,0 -104.7213943154014,39.83319807919264,0 -104.7226764653306,39.83316211809764,0 -104.7244165086774,39.83316622578045,0 -104.7258592325131,39.83322809536554,0 -104.7271796603893,39.83327037835253,0 -104.7297763945536,39.83343010732145,0 -104.733364034073,39.83380991787968,0"
#onroute = "-104.7351183072594,39.83380111974999,0 -104.6840831823499,39.83342584102798,0 -104.7638768872629,39.83402396186508,0 -104.7792929816595,39.83030898949192,0 -104.7834648863758,39.82671391787348,0 -104.786423515832,39.80884918194339,0 -104.8215590947746,39.77177097851215,0 -104.8027719632084,39.769329253249,0 -104.7905586031924,39.77870484312422,0 -104.8531563555553,39.77449197810012,0 -104.9007554952208,39.7782917828704,0 -105.001966636765,39.7637535160126,0 -104.9971469039034,39.75657884628864,0"
#offroute = "-104.9407267182034,39.74720397286534,0 -104.9494181251746,39.79968853245806,0 -104.9123324480024,39.76195401579129,0 -104.9216784091962,39.74001811119823,0 -104.9313876219013,39.80826736746261,0 -104.9311832585939,39.82121298421944,0 -105.0059076287219,39.78366434801477,0 -104.8259116815488,39.73971417959893,0 -104.9134529806271,39.85724292099317,0 -104.8652440378517,39.75955671654374,0 -104.9100201365588,39.79132596799396,0 -104.7583739152768,39.75468258468383,0 -105.0000415041227,39.71302822181518,0 -104.84513996393,39.79853428926117,0 -104.7527584087497,39.86675833193951,0 -104.9426276622884,39.83097249965048,0 -104.7618447093967,39.88992348576144,0 -104.8279479884134,39.68982293781957,0 -104.930751440106,39.708563480107,0 -104.8857102573443,39.73955306762799,0 -104.9798847524737,39.7399437691348,0 -104.7165987036771,39.79687286380432,0 -104.9216547395343,39.79452163124892,0 -104.8475822509333,39.72554608116148,0 -104.825042853751,39.72455695538984,0 -104.9288346154204,39.67207710821015,0 -104.9901231672107,39.70299821428454,0 -104.7165568575338,39.77127252061237,0 -104.7866519631011,39.76441527598797,0 -104.8291216096834,39.70055664603677,0"

braking = ""
onroute = ""
offroute = ""

xmldoc = minidom.parse("./event_geos.kml")

pathslist = xmldoc.getElementsByTagName("Placemark")
for p in pathslist:
    pname = p.getElementsByTagName("name")[0].childNodes[0].nodeValue
    pval = p.getElementsByTagName("coordinates")[0].childNodes[0].nodeValue.strip()
    if pname == "braking":
        braking = pval
    elif pname == "onroute":
        onroute = pval
    elif pname == "offroute":
        offroute = pval


ojs = open("./demo_events.js","w")

ojs.write("var demo_events = [\n")

off_evts = offroute.split(" ")
processed = 0
for o in off_evts:
    oj_coords = o.split(",")
    ojs.write("\t{\n")
    ojs.write("\t\t\"geom\":{\"lat\":")
    ojs.write(oj_coords[1])
    ojs.write(",\"lng\":{}}},\n".format(oj_coords[0]))
    ojs.write("\t\t\"uid\":\"offroute_{}\",\n".format(processed))
    processed = processed + 1
    evt_cat = int("{}".format(oj_coords[1])[-1])
    print(evt_cat)
    ev_type = "moisture_off"
    if evt_cat == 0 or evt_cat == 1:
        ev_type = "visibility_off"
        ev_text = "Automatic fog-light activation."
    elif evt_cat == 2 or evt_cat == 3:
        ev_type = "traction_off"
        ev_text = "Traction control system activated."
    elif evt_cat == 4:
        ev_type = "attention_off"
        ev_text = "ABS event: excessive braking."
    ojs.write("\t\t\"type\":\"{}\",\n".format(ev_type))
    ojs.write("\t\t\"text\":\"{}\",\n".format(ev_text))
    ojs.write("\t\t\"time\":\"900\",\n")
    ojs.write("\t\t\"group\":[],\n")
    ojs.write("\t},\n")

on_evts = onroute.split(" ")
for o in on_evts:
    oj_coords = o.split(",")
    ojs.write("\t{\n")
    ojs.write("\t\t\"geom\":{\"lat\":")
    ojs.write(oj_coords[1])
    ojs.write(",\"lng\":{}}},\n".format(oj_coords[0]))
    ojs.write("\t\t\"uid\":\"offroute_{}\",\n".format(processed))
    processed = processed + 1
    evt_cat = int("{}".format(oj_coords[1])[-1])
    print(evt_cat)
    ev_type = "moisture"
    ev_text = "Moisture on road indicated."
    ev_time = 600 + (processed + random.randint(0,2))
    if evt_cat == 0 or evt_cat == 1:
        ev_type = "visibility"
        ev_text = "Automatic fog-light activation."
    elif evt_cat == 2 or evt_cat == 3:
        ev_type = "traction"
        ev_text = "Traction control system activated."
    elif evt_cat == 4:
        ev_type = "attention"
        ev_text = "ABS event: excessive braking."
    ojs.write("\t\t\"type\":\"{}\",\n".format(ev_type))
    ojs.write("\t\t\"text\":\"{}\",\n".format(ev_text))
    ojs.write("\t\t\"time\":\"{}\",\n".format(ev_time))
    ojs.write("\t\t\"group\":[],\n")
    ojs.write("\t},\n")

on_evts = braking.split(" ")
b_processed = 0
for o in on_evts:
    oj_coords = o.split(",")
    ojs.write("\t{\n")
    ojs.write("\t\t\"geom\":{\"lat\":")
    ojs.write(oj_coords[1])
    ojs.write(",\"lng\":{}}},\n".format(oj_coords[0]))
    ojs.write("\t\t\"uid\":\"braking_{}\",\n".format(processed))
    processed = processed + 1
    evt_cat = int("{}".format(oj_coords[1])[-1])
    print(evt_cat)
    ev_type = "moisture"
    ev_text = "Moisture on road indicated."
    ev_time = 540
    if evt_cat == 0 or evt_cat == 1:
        ev_type = "visibility"
        ev_text = "Automatic fog-light activation."
        ev_time = 326
    elif evt_cat == 2 or evt_cat == 3:
        ev_type = "traction"
        ev_text = "Traction control system activated."
        ev_time = 345
    elif evt_cat == 4:
        ev_type = "attention"
        ev_text = "ABS event: excessive braking."
    if b_processed == 0:
        ev_type = "disabled"
        ev_text = "Airbag deployment"
        ev_time = 326
    elif b_processed == 1:
        ev_type = "attention"
        ev_text = "ABS event: excessive braking"
        ev_time = 328
    elif b_processed == 2:
        ev_type = "traction"
        ev_text = "Traction control system alert"
        ev_time = 330
    elif b_processed == 3:
        ev_type = "attention"
        ev_text = "ABS event: excessive braking"
        ev_time = 335
    elif b_processed == 4:
        ev_time = 338
    elif b_processed == 5:
        ev_type = "moisture"
        ev_time = 344
        ev_text = "Moisture on road indicated."
    elif b_processed == 6:
        ev_time = 356
    elif b_processed == 7:
        ev_time = 390
    
    b_processed = b_processed + 1 
    ojs.write("\t\t\"vehicle_uid\":\"{}\",\n".format("$_752f1f3f"))
    ojs.write("\t\t\"cluster_uid\":\"{}\",\n".format("demo_cluster"))
    ojs.write("\t\t\"type\":\"{}\",\n".format(ev_type))
    ojs.write("\t\t\"text\":\"{}\",\n".format(ev_text))
    ojs.write("\t\t\"time\":\"{}\",\n".format(ev_time))
    ojs.write("\t\t\"group\":[],\n")
    ojs.write("\t},\n")

ojs.write("];")
ojs.close()