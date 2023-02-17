fetch('http://iot-mapsjs.builds.release.in.here.com/testFiles/datasets/airports.js')
  .then(req => req.text())
  .then(txt => eval(`(function(){${txt}; return data.dataPoints})()`))
  .then((dataPoints) => {
    const data = dataPoints.map(
        ({latitude, longitude}) => new H.clustering.DataPoint(latitude, longitude));

    let clusterProvider = self.clusterProvider = new H.clustering.Provider(data, {
      clusteringOptions: {
        eps: 50,
        minWeight: 1,
        strategy: H.clustering.Provider.Strategy.DYNAMICGRID
      },
    });

    let clusteringStart;
    clusterProvider.addEventListener('start', () => clusteringStart = performance.now());
    clusterProvider.addEventListener('end', () => console.log(performance.now() - clusteringStart));

    map.addLayer(new H.map.layer.ObjectLayer(self.clusterProvider));
    map.setZoom(3);
  });
