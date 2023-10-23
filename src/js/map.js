import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';
import XYZ from 'ol/source/XYZ';
import LayerGroup from 'ol/layer/Group';
import ImageWMS from 'ol/source/ImageWMS.js';
import ImageLayer from 'ol/layer/Image.js';

const runMap = (map) => {
  var map;
  var format = 'image/png';
  // var degreeBounds = [752353.0575999, 1689982.6895, 895148.0916999, 1780937.0496999];
  var degreeBounds = [107.5249, 15.3215, 108.5357, 16.1098];
  // ---------------------------------
  // ----------Map Layer--------------
  // ---------------------------------

  var baseLayerGroup = new LayerGroup({
    title: 'Base layers',
    // openInLayerSwitcher: true,
    layers: [
      new TileLayer({
        title: 'Google Map',
        baseLayer: true,
        preload: Infinity,
        type: 'base',
        visible: false,
        source: new XYZ({
          url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga',
          crossOrigin: 'anonymous',
        }),
      }),
      new TileLayer({
        preload: Infinity,
        title: 'Water Color',
        baseLayer: true,
        visible: false,
        source: new Stamen({ layer: 'watercolor', attributions: [], attributionsCollapsible: false }),
      }),
      new TileLayer({
        preload: Infinity,
        title: 'Toner',
        baseLayer: true,
        visible: false,
        source: new Stamen({ layer: 'toner', attributions: [], attributionsCollapsible: false }),
      }),
      new TileLayer({
        preload: Infinity,
        baseLayer: true,
        source: new OSM({
          attributions: [],
          attributionsCollapsible: false,
        }),
        visible: true,
        title: 'Open Street Map',
      }),
      new TileLayer({
        baseLayer: true,
        visible: true,
        title: 'No Basemap',
      }),
    ],
  });

  var mainLayerGroup = new LayerGroup({
    title: 'Main layers',
    // openInLayerSwitcher: true,
    layers: [
      new ImageLayer({
        title: 'Hồ chứa nước',
        source: new ImageWMS({
          ratio: 1,
          url: 'https://gis.dut.udn.vn/geoserver/WebGIS_TamKy2/wms',
          params: {
            FORMAT: format,
            VERSION: '1.1.1',
            LAYERS: 'WebGIS_TamKy2:HoChuaQuangNam',
            STYLES: 'WebGIS_TamKy2:style_ho-chua-quang-nam',
          },
          displayOutsideMaxExtent: false,
          crossOrigin: 'anonymous',
          wrapX: false,
          serverType: 'geoserver',
        }),
      }),
      new ImageLayer({
        title: 'Trạm khí tượng',
        source: new ImageWMS({
          ratio: 1,
          url: 'https://gis.dut.udn.vn/geoserver/WebGIS_TamKy2/wms',
          params: {
            FORMAT: format,
            VERSION: '1.1.1',
            LAYERS: 'WebGIS_TamKy2:TramKhiTuongThuyVan',
            STYLES: 'WebGIS_TamKy2:style_tram-khi-tuong-thuy-van',
          },
          displayOutsideMaxExtent: false,
          crossOrigin: 'anonymous',
          wrapX: false,
          serverType: 'geoserver',
        }),
      }),
    ],
  });

  map.addLayer(baseLayerGroup);
  map.addLayer(mainLayerGroup);

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
