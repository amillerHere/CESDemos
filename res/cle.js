var cleService = platform.getCustomLocationService();


// Fetch list of available layers
cleService.request(
  mapsjs.service.extension.customLocation.Service.EntryPoint.LAYERS_LIST,
  mapsjs.service.extension.customLocation.Service.EntryPointType.JSON,
  null,
  console.log,
  console.error);


// Airports
map.getViewModel().setCameraData({
  zoom: 4,
  position: {lat: 47.607152153092,lng: -122.32560647419578}
});
map.addLayer(cleAirportsLayer = cleService.createTileLayer({
    layerId: 'QAD_AIRPORTS_4'
  }, {
  resultType: mapsjs.service.extension.TileProvider.ResultType.MARKER,
  min: 0
}));



// // Spatials
// map.getViewModel().setCameraData({
//   zoom: 17,
//   position: {lat: 47.607152153092, lng: -122.32560647419578}
// });
// map.addLayer(cleSpatialsLayer = cleService.createTileLayer({
//     layerId: 'KP_SEATTLE_14'
//   }, {
//   resultType: mapsjs.service.extension.TileProvider.ResultType.POLYGON
// }));
