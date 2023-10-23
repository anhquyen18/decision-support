<template>
  <div id="popup" class="ol-popup" style="display: block">
    <a href="#" id="popup-closer" class="ol-popup-closer fs-6"></a>
    <div id="popup-content">
      <a-card
        size="small"
        style="width: 300px"
        :bodyStyle="{ padding: 0 }"
        :headStyle="{ paddingLeft: '8px', fontSize: '1rem' }"
        :bordered="false">
        <template #title>
          <div class="d-flex">
            <span style="font-weight: bold" class="me-2">{{ title }}</span>
            <!-- <a-button type="dashed" size="small" @click="chartShower">Biểu đồ</a-button> -->
            <a-dropdown trigger="click" v-if="featureData.type === 'HoChuaQuangNam'">
              <template #overlay>
                <a-menu @click="chartShower">
                  <a-menu-item key="1"> Mực nước lưu lượng </a-menu-item>
                  <a-menu-item key="2"> Lượng mưa </a-menu-item>
                </a-menu>
              </template>
              <a-button type="dashed" size="small">Biểu đồ<i class="fa-solid fa-chevron-down ms-2"></i></a-button>
            </a-dropdown>

            <a-dropdown trigger="click" v-if="featureData.type === 'TramKhiTuongThuyVan'">
              <template #overlay>
                <a-menu v-model:selectedKeys="chartSelectedKey">
                  <a-menu-item key="1"> Lưu lượng </a-menu-item>
                  <a-menu-item key="2"> Mực nước </a-menu-item>
                  <a-menu-item key="3"> Lượng mưa </a-menu-item>
                </a-menu>
              </template>
              <a-button type="dashed" size="small">Biểu đồ<i class="fa-solid fa-chevron-down ms-2"></i></a-button>
            </a-dropdown>
          </div>
        </template>

        <a-table
          class="ant-table-striped"
          tableLayout="fixed"
          :columns="columns"
          :data-source="rows"
          size="small"
          :pagination="false"
          :showHeader="false"
          :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
          :style="{ fontSize: '0.8rem', borderRadius: '8px' }"
          bordered>
          <template #footer>
            <div class="d-flex justify-content-around">
              <a-button type="primary" size="small"
                >Phóng to <i class="fa-solid fa-magnifying-glass-plus ms-1"></i>
              </a-button>
              <a-button type="primary" size="small">Dẫn đường <i class="fa-solid fa-location-dot ms-1"></i></a-button>
            </div>
          </template>
        </a-table>
      </a-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, inject } from 'vue';
import { mapState } from '../../stores/map-state';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Overlay, Feature } from 'ol';
import GeoJSON from 'ol/format/GeoJSON.js';
import ChartPopup from '../chart-panel.vue';
//   import ChartPopup from './chart-popup.vue';

export default defineComponent({
  components: {
    ChartPopup,
  },
  setup() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        align: 'center',
        width: 150,
      },
      {
        title: 'Value',
        dataIndex: 'value',
        align: 'center',
        width: 147,
      },
    ];
    const chartPanelVisible = inject('chartPanelVisible');
    const featureData = inject('featureData');
    const chartSelectedKey = inject('chartSelectedKey');
    return {
      columns,
      chartPanelVisible,
      featureData,
      chartSelectedKey,
    };
  },

  computed: {
    map() {
      return mapState().getMap;
    },
  },

  data() {
    return {
      featureProp: [],
      title: '',
      rows: [],
      featureShow: 'a',
      overlay: '',
      highlightLayer: '',

      // signInState: true,
      // test: '123',
      // anhquyen: '321123',
      // map: new ol.Map({}),
    };
  },

  mounted() {
    // console.log(this.map);
    // console.log(this.$el.querySelector('div'));
    // console.log(this.map);
  },

  watch: {
    map: {
      handler() {
        this.addClick();
      },
      deep: false,
    },
  },

  methods: {
    // changeLayerManagerImage(image) {
    //   this.layerManagerImage = image;
    // },
    test: function () {
      // console.log(this.testData);
      // console.log('anhquydsa');
      // console.log(this.testa);
      // console.log('a');t
    },

    getMainLayerByTitle(title) {
      var layer;
      this.map
        .getLayers()
        .getArray()[1]
        .getLayers()
        .getArray()
        .forEach((element) => {
          if (element.get('title') == title) {
            layer = element;
          }
        });
      return layer;
    },

    addClick() {
      let closer = document.getElementById('popup-closer');
      this.highlightLayer = new VectorLayer({
        title: 'Feature popup highlight',
        source: new VectorSource({}),
      });
      this.highlightLayer.setVisible(false);
      this.overlay = new Overlay({
        title: 'Feature popup',
        id: 'featurePopupOverlay',
        element: document.getElementById('popup'),
        autoPan: {
          animation: {
            duration: 250,
          },
        },
      });

      let that = this;
      closer.onclick = function () {
        that.highlightLayer.getSource().clear();
        that.overlay.setPosition(undefined);
        closer.blur();
        return false;
      };

      this.map.addOverlay(this.overlay);
      this.map.addLayer(this.highlightLayer);
      this.highlightLayer.setVisible(true);
      this.map.on('singleclick', function (evt) {
        this.chartPanelVisible = false;
        that.featureProp = [];
        that.highlightLayer.getSource().clear();
        // that.featureProp = [];
        // highlightLayer.getSource().clear();
        // console.log('anhquyen');
        // clickedFeatureList.forEach((v, index, arr) => {
        //   v.feature = getClickedFeature(evt.coordinate, map.getView(), v.layer);
        //   if (v.feature) {
        //     console.log(v.feature);
        //   }
        // });
        // console.log(that.getMainLayerByTitle('Trạm khí tượng layer'));
        // console.log(
        //   that.getClickedFeature(evt.coordinate, that.map.getView(), that.getMainLayerByTitle('Trạm khí tượng layer'))
        // );

        that.getClickedFeature(evt.coordinate, that.map.getView(), that.getMainLayerByTitle('Trạm khí tượng'));
      });
    },

    showChart() {
      axios
        .post('http://127.0.0.1:8000/api/get-measuring-data', this.stationData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response) {
            // router.push({ name: 'home-page' });
            console.log(response);
          }
        })
        .catch((error) => {
          // signInVisible.value = true;
          console.log(error);
        });
    },

    getClickedFeature(coord, view, layer) {
      const queryLayers = [];
      const titles = [];
      this.map
        .getLayers()
        .getArray()[1]
        .getLayers()
        .getArray()
        .forEach((item) => {
          // Khi nào rãnh nghiên cứu code chuỗi query sang event thay đổi của các checkbox visible ở layer panel
          // thay vì thay mỗi lần request phải chạy lại chuỗi query
          if (item.getVisible()) {
            titles.push({ title: item.get('title'), id: item.getSource().getParams()['LAYERS'].split(':')[1] });
            queryLayers.push(item.getSource().getParams()['LAYERS']);
          }
        });
      let that = this;

      var resolutionFactor = 1.0;

      var url = layer
        .getSource()
        .getFeatureInfoUrl(coord, view.getResolution() * resolutionFactor, view.getProjection(), {
          INFO_FORMAT: 'application/json',
          FEATURE_COUNT: 10,
          QUERY_LAYERS: queryLayers.reverse().toString(),
          LAYERS: queryLayers.reverse().toString(),
          STYLES: '',
        });

      if (url) {
        axios
          .get(url)
          .then((response) => {
            const feature = response.data.features[response.data.features.length - 1];
            if (feature) {
              let featureProp = {};
              // featureProp.title = layer.get('title');
              for (let i = 0; i < titles.length; i++) {
                if (titles[i].id === feature.id.split('.')[0]) {
                  featureProp.title = titles[i].title;
                  break;
                }
              }
              featureProp.rows = [];
              featureProp.geom = feature.geometry;
              let props = feature.properties;

              Object.keys(props).forEach((x, i, arr) => {
                featureProp.rows.push({
                  key: i + 1,
                  name: x.toUpperCase(),
                  value: props[x],
                });

                if (i > 10) {
                  arr.length = i + 1;
                }
              });
              if (featureProp.rows.length) {
                that.featureProp.push(featureProp);
              }
            }

            if (that.featureProp.length) {
              that.title = that.featureProp[0].title;
              that.rows = that.featureProp[0].rows;

              // that.featureData.name = that.featureProp[0].rows[2].value;
              // console.log(that.featureProp[0].rows[1].value);
              that.featureData.type = feature.id.split('.')[0];
              if (that.featureData.type === 'HoChuaQuangNam') that.featureData.name = that.featureProp[0].rows[2].value;
              else if (that.featureData.type === 'TramKhiTuongThuyVan')
                that.featureData.name = that.featureProp[0].rows[1].value;

              this.overlay.setPosition(coord);
              var vectorSource = new VectorSource({
                features: new GeoJSON().readFeatures(feature),
              });
              this.chartPanelVisible = false;

              this.highlightLayer.setSource(vectorSource);
            } else {
              this.chartPanelVisible = false;
              this.overlay.setPosition(undefined);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    popupCloser() {
      console.log(this.$el.querySelector('.ol-popup'));
    },

    chartShower({ key }) {
      this.chartSelectedKey = key;
      // this.chartPanelVisible = false;
      this.$emit('showChart');
    },
  },
});
</script>

<style scoped lang="scss">
// #feature-info-popup {
//   width: 200px;
//   height: 200px;
//   background-color: salmon;
// }

.ol-popup {
  background: transparent;
  // background-color: red;
  position: absolute;
  // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  // border-radius: 10px;
  // border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
  // min-width: 280px;
}
.ol-popup:after,
.ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}
.ol-popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}
.ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 2px;
  right: 8px;
  z-index: 1000;
}
.ol-popup-closer:after {
  content: '✖';
}

#popup-content {
  // & > div {
  //   padding: 0 !important;
  // }
}

// .demo-dropdown-wrap :deep(.ant-dropdown-button) {
//   margin-right: 8px;
//   margin-bottom: 8px;
// }

[data-doc-theme='light'] .ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
[data-doc-theme='dark'] .ant-table-striped :deep(.table-striped) td {
  background-color: rgb(29, 29, 29);
}
</style>
