<template>
  <Header></Header>

  <div class="container-fluid p-0">
    <div class="row g-0">
      <div class="col-2"><SideBar></SideBar></div>
      <div class="col-10 content-panel">
        <div class="map-container" id="map"></div>

        <div class="panel-container row g-0 w-100 h-100">
          <div class="col-9 d-flex justify-content-end">
            <ChartPanel></ChartPanel>
          </div>
          <div class="col-3">
            <DetailPanel></DetailPanel>
          </div>
        </div>
      </div>
      <!-- <div class="col-11"></div> -->
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, provide } from 'vue';
import { message } from 'ant-design-vue';
import Header from '../components/header.vue';
import SideBar from '../components/side-bar.vue';
import DetailPanel from '../components/detail-panel.vue';
import ChartPanel from '../components/chart-panel.vue';
import { mapState } from '../stores/map-state';
import { storeToRefs } from 'pinia';
import runMap from '../js/map.js';

export default defineComponent({
  components: { Header, SideBar, DetailPanel, ChartPanel },
  setup() {
    const detailPanelVisible = ref(false);
    provide('detailPanelVisible', detailPanelVisible);
    return {};
  },

  mounted() {
    const mapStore = mapState();
    const { getMap, setMap } = mapStore;
    const map = new ol.Map({
      layers: [],
      target: 'map',

      view: new ol.View({
        projection: 'EPSG:4326',
        minZoom: 5,
        maxZoom: 22,
      }),
    });
    mapState().setMap(map);
    runMap(map);
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

.panel-container {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

.map-container {
  width: 100%;
  height: 100%;
}
</style>
