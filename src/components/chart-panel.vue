<template>
  <div class="chart-panel" :class="{ 'panel--active': detailPanelVisible }">
    <a-drawer
      :style="{ position: 'absolute', width: '100%', height: '100%' }"
      :get-container="false"
      :bodyStyle="{ padding: '0' }"
      v-model:visible="detailPanelVisible"
      placement="bottom"
      @after-visible-change="afterVisibleChange"
      :mask="false"
      :maskClosable="false"
      :autofocus="false">
      <template #closeIcon
        ><i class="fa-solid fa-xmark fs-4 text-black" style="position: absolute; top: 0.5rem; right: 1rem"></i
      ></template>
      <!-- <template #title><span style="color: #ffffff; font-weight: bold">THÔNG TIN</span></template> -->
      <canvas id="myChart" style="width: 100%; height: 100%"></canvas>
    </a-drawer>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, inject } from 'vue';
import { mapState } from '../stores/map-state';

import runMap from '../js/map.js';

export default defineComponent({
  components: {},
  setup() {
    const afterVisibleChange = (bool) => {
      console.log('visible', bool);
    };

    const headerDrawerStyle = 'background-color: #4494F1; ';
    const detailPanelVisible = inject('detailPanelVisible');
    console.log(detailPanelVisible.value);
    return { detailPanelVisible, afterVisibleChange, headerDrawerStyle };
    a;
  },
  data() {
    return {};
  },

  mounted() {
    const ctx = document.getElementById('myChart');
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
      { year: 2016, count: 28 },
    ];
    // new Chart(ctx, {
    //   type: 'bar',

    //   data: {
    //     labels: data.map((row) => row.year),
    //     datasets: [
    //       {
    //         label: 'Acquisitions by year',
    //         data: data.map((row) => row.count),
    //         borderWidth: 0,
    //       },
    //     ],
    //   },
    //   options: {
    //     // animation: false,
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //         // max: 50,
    //       },
    //     },
    //     plugins: {
    //       legend: {
    //         display: true,
    //       },
    //       tooltip: {
    //         enabled: true,
    //       },
    //     },
    //   },
    // });
    const data1 = [
      { x: 'Jan', net: 100, cogs: 50, gm: 50 },
      { x: 'Feb', net: 120, cogs: 55, gm: 75 },
      { x: 'March', net: 120, cogs: 55, gm: 75 },
    ];
    const cfg = {
      type: 'bar',
      options: {
        layout: {
          padding: 0,
        },
        plugins: {
          title: {
            display: true,
            text: 'BIỂU ĐỒ GÌ GÌ ĐÓ',
            position: 'left',
            padding: 5,
            color: '#4494F1',
          },
        },
      },
      data: {
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'Net sales',
            data: data1,
            parsing: {
              yAxisKey: 'net',
            },
          },
          {
            label: 'Cost of goods sold',
            data: data1,
            parsing: {
              yAxisKey: 'cogs',
            },
          },
          {
            label: 'Gross margin',
            data: data1,
            parsing: {
              yAxisKey: 'gm',
            },
          },
        ],
      },
    };
    new Chart(ctx, cfg);
  },
});
</script>

<style lang="scss" scoped>
.chart-panel {
  position: relative;
  width: 100%;
  height: 30%;
  align-self: flex-end;
  background: transparent;
}

.panel--active {
  pointer-events: all;
}
</style>
