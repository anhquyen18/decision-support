const runMap = (map) => {
  var map;
  var format = 'image/png';
  var degreeBounds = [108.66931915300006, 11.769107818000062, 109.46916961700003, 12.86867141600004];

  // ---------------------------------
  // ----------Map Layer--------------
  // ---------------------------------

  var baseLayerGroup = new ol.layer.Group({
    title: 'Base Layers',
    // openInLayerSwitcher: true,
    layers: [
      new ol.layer.Tile({
        title: 'Google Map',
        baseLayer: true,
        preload: Infinity,
        type: 'base',
        visible: false,
        source: new ol.source.XYZ({
          url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga',
          crossOrigin: 'anonymous',
        }),
      }),
      new ol.layer.Tile({
        preload: Infinity,
        title: 'Water Color',
        baseLayer: true,
        visible: false,
        source: new ol.source.Stamen({ layer: 'watercolor', attributions: [], attributionsCollapsible: false }),
      }),
      new ol.layer.Tile({
        preload: Infinity,
        title: 'Toner',
        baseLayer: true,
        visible: false,
        source: new ol.source.Stamen({ layer: 'toner', attributions: [], attributionsCollapsible: false }),
      }),
      new ol.layer.Tile({
        preload: Infinity,
        baseLayer: true,
        source: new ol.source.OSM({
          attributions: [],
          attributionsCollapsible: false,
        }),
        visible: true,
        title: 'Open Street Map',
      }),
      new ol.layer.Tile({
        baseLayer: true,
        visible: true,
        title: 'No Basemap',
      }),
    ],
  });

  map.addLayer(baseLayerGroup);

  map.getView().fit(degreeBounds, map.getSize());

  // var hover = new ol.interaction.Hover({ cursor: 'pointer' });
  // map.addInteraction(hover);
  // hover.on('enter', function (e) {
  // hover.setCursor('pointer');
  // switch (e.feature.getGeometry().getType()) {
  //   case 'LineString':
  //     hover.setCursor('copy');
  //     break;
  //   case 'Polygon':
  //     hover.setCursor('help');
  //     break;
  //   default:
  //     hover.setCursor('pointer');
  //     break;
  // }
  // });
  // map.setVisible(false);
};

export default runMap;
