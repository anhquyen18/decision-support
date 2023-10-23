<template>
  <!-- <Header @navigateSideBar="navigateSideBar" ref="headerRef"></Header>

  <div class="container-fluid p-0" style="height: 94vh">
    <div class="row g-0 d-flex h-100 w-100">
      <div v-if="sideBarVisible" class="" :class="{ 'col-2': sideBarVisible }">
        <SideBar></SideBar>
      </div>

      <div class="content-panel" :class="{ 'col-10': sideBarVisible, 'col-12': !sideBarVisible }">
        <div class="map-container" id="map"></div>

        <div class="detail-chart-container row g-0 h-100 w-100">
          <div class="col-9 d-flex justify-content-end" id="chart-container">
            <ChartPanel ref="chartPanelRef"></ChartPanel>
          </div>
          <div class="col-3" id="detail-container">
            <DetailPanel @showChart="showChart"></DetailPanel>
          </div>
        </div>

        <div class="bottom-right-nav align-items-center">
          <LayerManager class="mt-5"></LayerManager>
        </div>
      </div>
    </div>
  </div>
  <FeatureInfoPopup @showChart="showChart"></FeatureInfoPopup> -->

  <a-layout style="max-height: 100vh; min-height: 100vh; padding: 0; margin: 0">
    <a-layout-header style="height: 6vh; padding: 0">
      <Header @navigateSideBar="navigateSideBar" ref="headerRef"></Header>
    </a-layout-header>

    <a-layout has-sider style="padding: 0; background: #fff" :style="{ padding: '0', margin: '0', height: '100%' }">
      <a-layout-sider
        :style="{ overflow: 'hidden' }"
        theme="light"
        width="250"
        :trigger="null"
        v-model:collapsed="sideBarVisible"
        collapsedWidth="0"
        collapsible>
        <SideBar></SideBar>
      </a-layout-sider>

      <a-layout-content style="height: 94vh; width: 100vw">
        <!-- <div class="content-panel" :class="{ 'col-10': sideBarVisible, 'col-12': !sideBarVisible }"> -->
        <div class="content-panel" style="height: 100%; width: 100%">
          <div class="map-container" id="map"></div>

          <div class="detail-chart-container row g-0 h-100 w-100">
            <div class="col-9 d-flex justify-content-end" id="chart-container">
              <ChartPanel ref="chartPanelRef"></ChartPanel>
            </div>
            <div class="col-3" id="detail-container">
              <DetailPanel @showChart="showChart"></DetailPanel>
            </div>
          </div>

          <div class="bottom-right-nav align-items-center">
            <LayerManager class="mt-5"></LayerManager>
          </div>
        </div>
      </a-layout-content>
    </a-layout>
    <FeatureInfoPopup @showChart="showChart"></FeatureInfoPopup>
  </a-layout>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, provide, inject } from 'vue';
import { message } from 'ant-design-vue';
import Header from '../components/header.vue';
import SideBar from '../components/side-bar.vue';
import DetailPanel from '../components/detail-panel.vue';
import ChartPanel from '../components/chart-panel.vue';
import { mapState } from '../stores/map-state';
import { storeToRefs } from 'pinia';
import runMap from '../js/map.js';
import FeatureInfoPopup from '../components/ol-tools/feature-info-popup.vue';
// import FeatureInfoPopup from '../components/ol-tools/feature-info-popup.vue';
import LayerManager from '../components/ol-tools/layer-manager.vue';

import { Map, View } from 'ol';

export default defineComponent({
  components: { Header, SideBar, DetailPanel, ChartPanel, FeatureInfoPopup, LayerManager },
  setup() {
    const chartPanelVisible = ref(false);
    provide('chartPanelVisible', chartPanelVisible);

    const detailPanelVisible = ref(false);
    provide('detailPanelVisible', detailPanelVisible);

    const featureData = ref({ name: '', type: '' });
    provide('featureData', featureData);

    const sideBarVisible = ref(false);
    provide('sideBarVisible', sideBarVisible);

    const detailPanelFeatureData = ref(false);
    provide('detailPanelFeatureData', detailPanelFeatureData);

    const lakeData = ref('');
    provide('lakeData', lakeData);
    const stationData = ref('');
    provide('stationData', stationData);

    const featureDetail = ref('');
    provide('featureDetail', featureDetail);

    const chartSelectedKey = ref('');
    provide('chartSelectedKey', chartSelectedKey);

    // const isLoading = ref(true);

    let fetchLake = () => {
      axios
        .get('http://127.0.0.1:8000/api/lake-data')
        .then((response) => {
          if (response) {
            lakeData.value = response.data.data;
            console.log('lake');
          }
        })
        .catch((error) => {
          // signInVisible.value = true;
          console.log(error);
        });
    };

    let fetchHydrological = () => {
      axios
        .get('http://127.0.0.1:8000/api/hydrological-data')
        .then((response) => {
          if (response) {
            stationData.value = response.data.data;
            console.log('hydrological station');
          }
        })
        .catch((error) => {
          // signInVisible.value = true;
          console.log(error);
        });
    };

    fetchLake();
    fetchHydrological();

    // lakeData.value = lakeDataFromPCTT.data;
    // stationData.value = hydrologicalDataFromPCTT.data;
    // const lakeData = ref(false);
    // provide('detailPanelFeatureData', detailPanelFeatureData);
    // const detailPanelFeatureData = ref(false);
    // provide('detailPanelFeatureData', detailPanelFeatureData);

    // provide('chartPanelVisible', chartPanelVisible);
    // axios
    //   .post(
    //     'http://pctt.quangnam.vn/index.php?option=com_baocaothuydien&controller=luongmua&task=getListBaocaoluongmua'
    //   )
    //   .then((response) => {
    //     if (response) {
    //       console.log(response);
    //     }
    //   })
    //   .catch((error) => {
    //     // signInVisible.value = true;
    //     console.log(error);
    //   });
    return {
      sideBarVisible,
    };
  },

  data() {
    return {
      // sideBarVisible: true,
    };
  },

  mounted() {
    const mapStore = mapState();
    const { getMap, setMap } = mapStore;
    const map = new Map({
      layers: [],
      target: 'map',

      view: new View({
        projection: 'EPSG:4326',
        minZoom: 5,
        maxZoom: 22,
      }),
    });
    mapState().setMap(map);
    runMap(map);

    // fetch('http://pctt.quangnam.vn/index.php?option=com_baocaothuydien&view=hienthi&controller=hienthi&type=0')
    //   .then((response) => response.text())
    //   .then((html) => {
    //     const parser = new DOMParser();
    //     const doc = parser.parseFromString(html, 'text/html');

    //     const titleElement = doc.querySelector('title');
    //     const paragraphElements = doc.querySelectorAll('p');

    //     console.log(titleElement);
    //     console.log(paragraphElements);

    //     const pageTitle = titleElement.textContent;
    //     const paragraphs = Array.from(paragraphElements).map((p) => p.textContent);

    //     // Do something with the data
    //     console.log('Page Title:', pageTitle);
    //     console.log('Paragraphs:', paragraphs);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching or parsing the webpage:', error);
    //   });
    // let config = {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // };

    // axios
    //   .get(
    //     'http://pctt.quangnam.vn/index.php?option=com_baocaothuydien&controller=hienthi&task=getHienthiTime&type=bang_theo_doi_khac&filter_ngaybatdau=25/08/2023&filter_ngayketthuc=06/09/2023',
    //     '',
    //     config
    //   )
    //   .then((response) => {
    //     if (response) {
    //       console.log(response);
    //       // router.push({ name: 'home-page' });
    //       // console.log(response.data['data'][0]['thoigianxa']);
    //     }
    //   })
    //   .catch((error) => {
    //     // signInVisible.value = true;
    //     console.log(error);
    //   });

    // axios
    //   .get('http://127.0.0.1:8000/api/crawl-data')
    //   .then((response) => {
    //     if (response) {
    //       // router.push({ name: 'home-page' });
    //       console.log(response.data['data'][0]['thoigianxa']);
    //     }
    //   })
    //   .catch((error) => {
    //     // signInVisible.value = true;
    //     console.log(error);
    //   });
  },

  methods: {
    showChart() {
      // console.log('test show chart');
      // this.sideBarVisible = true;
      // this.chartSelectedKey = '';
      this.$refs.chartPanelRef.chartShower();
    },
    navigateSideBar() {
      // console.log('test show chart');
      // this.sideBarVisible = true;

      // this.$refs.chartPanelRef.chartShower();

      // console.log(this.sideBarVisible);
      if (this.sideBarVisible) this.sideBarVisible = false;
      else this.sideBarVisible = true;
    },
  },
});
</script>

<style lang="scss" scoped>
.container-fluid {
  overflow: hidden;
}
.content-panel {
  position: relative;
}

.detail-chart-container {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

.map-container {
  position: relative;
  width: 100%;
  height: 100%;
  // position: fixed;
  // height: 50%;
  // width: 500px;
  // width: 800px;
  // height: 100vh;
  // width: 100vw;
  // height: 100vh;
}

.bottom-right-nav {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
}

.processing-cursor {
  cursor: wait !important;
}
</style>
