<template>
  <div class="detail-panel" :class="{ 'panel--active': detailPanelVisible }">
    <a-drawer
      :bodyStyle="{ padding: 0 }"
      :headerStyle="{ backgroundColor: '#0135A7', fontSize: '0.5rem' }"
      :get-container="false"
      v-model:open="detailPanelVisible"
      placement="right"
      width="100%"
      @afterOpenChange="afterVisibleChange"
      :mask="false"
      :maskClosable="false"
      :autofocus="false"
      :closable="false"
      style="border-left: 0.5px solid rgb(193, 193, 193)">
      <template #extra>
        <a @click="closeDetailPanel">
          <i class="fa-solid fa-xmark fs-4 text-white" style="font-size: 1.2rem !important"></i>
        </a>
      </template>

      <!-- <template #closeIcon>
        <i class="fa-solid fa-xmark fs-4 text-white" style="font-size: 1.2rem !important"></i>
      </template> -->
      <template #title><span style="color: #ffffff; font-weight: bold; font-size: 0.9rem">THÔNG TIN</span></template>

      <a-collapse v-model:activeKey="activeKey" :bordered="false">
        <a-collapse-panel key="1">
          <template #header>
            <p class="ms-2 fw-bold fs-6">Biểu đồ</p>
          </template>
          <template #extra>
            <i class="fa-solid fa-chart-simple me-2"></i>
          </template>
          <div>
            <a-menu @click="chartShower">
              <a-menu-item key="1"> Mực nước lưu lượng </a-menu-item>
              <a-menu-item key="2"> Lượng mưa </a-menu-item>
            </a-menu>
          </div>
        </a-collapse-panel>
        <a-collapse-panel key="2">
          <template #header>
            <p class="ms-2 fw-bold fs-6">Thuộc tính</p>
          </template>

          <template #extra>
            <i class="fa-regular fa-rectangle-list me-2"></i>
          </template>
          <div v-if="featureDetail" v-for="item in Object.keys(featureDetail.properties)">
            <p class="fw-bold">{{ item }}</p>
            <p>{{ featureDetail.properties[item] }}</p>
            <a-divider style="background-color: black" />
          </div>
          <p v-else>Đang cập nhật</p>
        </a-collapse-panel>
      </a-collapse>
    </a-drawer>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, inject } from 'vue';
import { mapState } from '../stores/map-state';
// :style="{ position: 'absolute', width: '100%', height: '100%' }"
// style="position: absolute; top: 0; left: -20px; width: 110%; height: 100%"
import runMap from '../js/map.js';

export default defineComponent({
  components: {},
  setup() {
    const activeKey = ref(['2']);

    const afterVisibleChange = (bool) => {
      // console.log(featureDetail.value);..
    };

    const headerDrawerStyle = 'background-color: #4494F1; ';
    const chartSelectedKey = inject('chartSelectedKey');

    const detailPanelVisible = inject('detailPanelVisible');
    const featureData = inject('featureData');
    const lakeData = inject('lakeData');
    const stationData = inject('stationData');
    const featureDetail = inject('featureDetail');
    // const detailPanelVisible = ref(false);
    // console.log(detailPanelVisible.value);
    return {
      detailPanelVisible,
      afterVisibleChange,
      headerDrawerStyle,
      activeKey,
      lakeData,
      stationData,
      featureData,
      featureDetail,
      chartSelectedKey,
    };
  },
  data() {
    return {};
  },

  methods: {
    closeDetailPanel() {
      this.detailPanelVisible = false;
    },

    chartShower({ key }) {
      this.chartSelectedKey = key;
      this.$emit('showChart');
    },
  },

  mounted() {
    // this.detailPanelVisible = true;
  },
});
</script>

<style lang="scss" scoped>
.detail-panel {
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  // border: 1px solid black;
}

.panel--active {
  pointer-events: all;
}
</style>
