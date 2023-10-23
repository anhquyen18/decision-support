<template>
  <div class="chart-panel" :class="{ 'panel--active': chartPanelVisible }">
    <!-- <a-button type="dashed" size="small" @click="chartShower">Biểu đồ</a-button> -->

    <a-drawer
      :headerStyle="{ padding: 0, margin: 0 }"
      :bodyStyle="{ padding: 0 }"
      :get-container="false"
      v-model:open="chartPanelVisible"
      placement="bottom"
      @afterOpenChange="afterVisibleChange"
      width="100%"
      height="100%"
      :mask="false"
      :maskClosable="false"
      :autofocus="false"
      :forceRender="true">
      <template #closeIcon>
        <i class="fa-solid fa-xmark fs-4 text-black" style="position: absolute; top: 0.5rem; right: 1rem"></i>
      </template>
      <!-- <p v-if="!lakeChartTitle">Chưa có dữ liệu</p> -->
      <canvas id="myChart" style="height: 100%; width: 100%" v-if="chartShow === true"></canvas>
      <!-- <a-button type="primary" @click="testButton">abc</a-button> -->
      <!-- <canvas
        id="myChart"
        style="height: 100%; width: 100%; display: none"
        :class="{ 'chart--show': featureData.type === 'HoChuaQuangNam' }"></canvas> -->
      <!-- <canvas id="myChart2" style="height: 100%; width: 100%"></canvas> -->
    </a-drawer>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, inject, toHandlers } from 'vue';
import { mapState } from '../stores/map-state';

import runMap from '../js/map.js';

export default defineComponent({
  components: {},
  setup() {
    const afterVisibleChange = (bool) => {
      // console.log('visible', bool);
    };

    const headerDrawerStyle = 'background-color: #4494F1; ';
    // const chartPanelVisible = ref(false);
    const chartPanelVisible = inject('chartPanelVisible');
    const featureData = inject('featureData');
    const lakeData = inject('lakeData');
    const stationData = inject('stationData');
    const chartSelectedKey = inject('chartSelectedKey');

    // console.log(detailPanelVisible.value);
    return {
      chartPanelVisible,
      afterVisibleChange,
      headerDrawerStyle,
      lakeData,
      stationData,
      featureData,
      chartSelectedKey,
    };
  },

  data() {
    return {
      stationChartTitle: '',
      selectedStation: '',
      lakeChartTitle: '',
      lakeChart: '',
      lakeChartCanvas: '',
      selectedLake: { name: '', mucnuoc: '', den: '', chaymay: '', xatran: '' },
      chartShow: true,
    };
  },

  methods: {
    testButton() {
      this.chartShow = false;
      console.log(this.chartShow);
    },
    chartShower() {
      // switch(this.featureData.name){
      //   case:
      // }
      // console.log(this.processText('anhquyen1809000'));

      // console.log(this.lakeData[0]['chaymay0']);
      // this.chartShow = false;
      this.chartPanelVisible = true;
      // this.chartShow = false;
      let that = this;
      // console.log(this.chartShow);
      this.chartShow = false;

      // console.log(this.chartShow);
      // console.log(this.chartSelectedKey);
      // if (!this.chartShow) {
      // this.renderLakeChart();
      // }
      // if (this.lakeChart) {
      setTimeout(function () {
        // that.renderLakeChart();
        console.log(that.featureData);
        console.log(that.chartSelectedKey);
        if (that.featureData.type == 'HoChuaQuangNam' && that.lakeData) {
          switch (that.chartSelectedKey) {
            case '1':
              that.renderLakeChart();
              break;
            case '2':
              that.chartPanelVisible = false;
              break;
          }
        }

        // else if (that.featureData.type == 'TramKhiTuongThuyVan') that.renderStationChart();
      }, 5);
      // }

      // console.log('testChart');
    },

    renderChart() {
      // console.log(this.lakeChart);

      this.lakeChart.data.labels = this.lakeData.map((row) => row.gioxa + '-' + row.ngayxa);

      this.lakeChart.data.datasets[0].data = this.lakeData.map((row) => row.mucnuoc0);
      this.lakeChart.data.datasets[1].data = this.lakeData.map((row) => row.den0);
      this.lakeChart.data.datasets[2].data = this.lakeData.map((row) => row.chaymay0);
      this.lakeChart.data.datasets[3].data = this.lakeData.map((row) => row.xatran0);
      // this.lakeChart.update();
    },

    renderLakeChart() {
      this.chartShow = true;
      this.lakeChartTitle = '';
      // this.chartShow = true;
      // this.chartShow = false;
      let name = 'Ho ' + this.featureData.name.replaceAll('_', ' ');
      let that = this;

      // console.log(name);
      Object.keys(this.lakeData[0]).forEach((x, i, arr) => {
        // console.log(that.removeAccents(that.lakeData[0][x]));
        if (that.removeAccents(that.lakeData[0][x]) === name) {
          // console.log(that.lakeData[0][x]);
          that.lakeChartTitle = that.lakeData[0][x];
          that.selectedLake.mucnuoc = 'mucnuoc' + that.processText(x)[0][1];
          that.selectedLake.den = 'den' + that.processText(x)[0][1];
          that.selectedLake.chaymay = 'chaymay' + that.processText(x)[0][1];
          that.selectedLake.xatran = 'xatran' + that.processText(x)[0][1];

          // console.log(that.selectedLake.mucnuoc);
          // console.log(that.selectedLake.den);
          // console.log(that.selectedLake.chaymay);
          // console.log(that.selectedLake.xatran);
          arr.length = i + 1;
        }
      });

      if (this.lakeChartTitle) {
        setTimeout(function () {
          new Chart(document.getElementById('myChart'), {
            type: 'bar',
            options: {
              maintainAspectRatio: false,
              responsive: true,
              layout: {
                padding: 0,
              },
              plugins: {
                title: {
                  display: true,
                  position: 'left',
                  text: that.lakeChartTitle,
                  padding: 5,
                  color: '#4494F1',
                  font: { weight: 'bold', size: '16' },
                },
              },
              stacked: false,
              scales: {
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                },
                y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',

                  // grid line settings
                  grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                  },
                },
              },
            },
            data: {
              labels: that.lakeData.map((row) => row.gioxa + '-' + row.ngayxa),
              datasets: [
                {
                  label: 'Mực nước (m)',
                  data: that.lakeData.map((row) => row[that.selectedLake.mucnuoc]),
                  stack: 'combined',
                  type: 'line',
                  // cubicInterpolationMode: 'monotone',
                  // tension: 0.4,
                  yAxisID: 'y1',
                },
                {
                  label: 'Lưu lượng đến (m3/s)',
                  data: that.lakeData.map((row) => row[that.selectedLake.den]),
                  stack: 'combined',
                  type: 'line',
                  // cubicInterpolationMode: 'monotone',
                  // tension: 0.4,
                  yAxisID: 'y',
                },
                {
                  label: 'Lưu lượng chạy máy (m3/s)',
                  data: that.lakeData.map((row) => row[that.selectedLake.chaymay]),
                  stack: 'combined',
                  type: 'line',
                  // cubicInterpolationMode: 'monotone',
                  // tension: 0.4,
                  yAxisID: 'y',
                },
                {
                  label: 'Lưu lượng qua tràn (m3/s)',
                  data: that.lakeData.map((row) => row[that.selectedLake.xatran]),
                  stack: 'combined',
                  type: 'line',
                  // cubicInterpolationMode: 'monotone',
                  // tension: 0.4,
                  yAxisID: 'y',
                },
              ],
            },
          });
        }, 15);
      }

      // console.log(this.lakeChart.options.plugins.title.text);
      // this.lakeChart.data.labels = this.lakeData.map((row) => row.gioxa + '-' + row.ngayxa);

      // this.lakeChart.data.datasets[0].data = this.lakeData.map((row) => row.mucnuoc2);
      // this.lakeChart.data.datasets[1].data = this.lakeData.map((row) => row.den2);
      // this.lakeChart.data.datasets[2].data = this.lakeData.map((row) => row.chaymay2);
      // this.lakeChart.data.datasets[3].data = this.lakeData.map((row) => row.xatran2);
      // this.lakeChart.update();
      // this.lakeChart.data.labels = this.lakeData.map((row) => row.gioxa + '-' + row.ngayxa);
      // this.lakeChart.data.datasets[0].data = this.lakeData.map((row) => row[this.selectedLake.mucnuoc]);
      // this.lakeChart.data.datasets[1].data = this.lakeData.map((row) => row[this.selectedLake.den]);
      // this.lakeChart.data.datasets[2].data = this.lakeData.map((row) => row[this.selectedLake.chaymay]);
      // this.lakeChart.data.datasets[3].data = this.lakeData.map((row) => row[this.selectedLake.xatran]);

      // this.lakeChart.update();
    },

    renderStationChart() {
      // console.log(this.featureData.type);
      this.chartShow = true;
      this.stationChartTitle = this.featureData.name;
      let name = this.featureData.name.replaceAll(' ', '').toLowerCase();
      let that = this;

      if (name && this.stationData) {
        setTimeout(function () {
          new Chart(document.getElementById('myChart'), {
            type: 'bar',
            options: {
              maintainAspectRatio: false,
              responsive: true,
              layout: {
                padding: 0,
              },
              plugins: {
                title: {
                  display: true,
                  position: 'left',
                  text: 'Trạm ' + that.stationChartTitle,
                  padding: 5,
                  color: '#4494F1',
                  font: { weight: 'bold', size: '16' },
                },
              },
              stacked: false,
              scales: {
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                },
              },
            },
            data: {
              labels: that.stationData.map((row) => row.giomua + '-' + row.ngaymua),
              datasets: [
                {
                  label: 'Lượng mưa (mm)',
                  data: that.stationData.map((row) => row[name + 'x']),
                  stack: 'combined',
                  type: 'line',
                  cubicInterpolationMode: 'monotone',
                  tension: 0.4,
                  yAxisID: 'y',
                },
              ],
            },
          });
        }, 15);
      }
      // console.log(name);
      // Object.keys(this.stationData).forEach((x, i, arr) => {
      //   // console.log(that.removeAccents(that.lakeData[0][x]));
      //   if (that.removeAccents(that.lakeData[0][x]) === name) {
      //     arr.length = i + 1;
      //   }
      // });
    },

    processText(inputText) {
      var output = [];
      var json = inputText.split(' '); // Split text by spaces into array

      json.forEach(function (item) {
        // Loop through each array item
        var out = item.replace(/\'/g, ''); // Remove all single quote '  from chunk
        out = out.split(/(\d+)/); // Now again split the chunk by Digits into array
        out = out.filter(Boolean); // With Boolean we can filter out False Boolean Values like -> false, null, 0
        output.push(out);
      });

      return output;
    },

    removeAccents(str) {
      if (str) {
        var AccentsMap = [
          'aàảãáạăằẳẵắặâầẩẫấậ',
          'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
          'dđ',
          'DĐ',
          'eèẻẽéẹêềểễếệ',
          'EÈẺẼÉẸÊỀỂỄẾỆ',
          'iìỉĩíị',
          'IÌỈĨÍỊ',
          'oòỏõóọôồổỗốộơờởỡớợ',
          'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
          'uùủũúụưừửữứự',
          'UÙỦŨÚỤƯỪỬỮỨỰ',
          'yỳỷỹýỵ',
          'YỲỶỸÝỴ',
        ];
        for (var i = 0; i < AccentsMap.length; i++) {
          var re = new RegExp('[' + AccentsMap[i].substring(1) + ']', 'g');
          var char = AccentsMap[i][0];
          str = str.replace(re, char);
        }
        return str;
      }
    },
  },

  mounted() {
    // const ctx = document.getElementById('myChart').getContext('2d');
    // this.lakeChartCanvas = document.getElementById('myChart').getContext('2d');
    // axios
    //   .get('http://127.0.0.1:8000/api/lake-data')
    //   .then((response) => {
    //     if (response) {
    //       this.lakeData = response.data.data;
    //       console.log('lake');
    //     }
    //   })
    //   .catch((error) => {
    //     // signInVisible.value = true;
    //     console.log(error);
    //   });
    // axios
    //   .get('http://127.0.0.1:8000/api/hydrological-data')
    //   .then((response) => {
    //     if (response) {
    //       this.stationData = response.data.data;
    //       console.log('hydrological station');
    //     }
    //   })
    //   .catch((error) => {
    //     // signInVisible.value = true;
    //     console.log(error);
    //   });
    // console.log(data);
    // this.lakeChart = new Chart(this.lakeChartCanvas, {
    //   type: 'line',
    //   options: this.chartOptions,
    //   data: {
    //     labels: '',
    //     datasets: [],
    //   },
    // });
    // this.lakeChart = new Chart(this.lakeChartCanvas, {
    //   type: 'line',
    //   options: this.chartOptions,
    //   data: {
    //     labels: '',
    //     datasets: [
    //       {
    //         label: 'Mực nước (m)',
    //         data: '',
    //         stack: 'combined',
    //         type: 'line',
    //         cubicInterpolationMode: 'monotone',
    //         tension: 0.4,
    //         yAxisID: 'y1',
    //       },
    //       {
    //         label: 'Lưu lượng đến (m3/s)',
    //         data: '',
    //         stack: 'combined',
    //         type: 'line',
    //         cubicInterpolationMode: 'monotone',
    //         tension: 0.4,
    //         yAxisID: 'y',
    //       },
    //       {
    //         label: 'Lưu lượng chạy máy (m3/s)',
    //         data: '',
    //         stack: 'combined',
    //         type: 'line',
    //         cubicInterpolationMode: 'monotone',
    //         tension: 0.4,
    //         yAxisID: 'y',
    //       },
    //       {
    //         label: 'Lưu lượng qua tràn (m3/s)',
    //         data: '',
    //         stack: 'combined',
    //         type: 'line',
    //         cubicInterpolationMode: 'monotone',
    //         tension: 0.4,
    //         yAxisID: 'y',
    //       },
    //     ],
    //   },
    // });
    // console.log(this.lakeData);
    // console.log(this.hydrologicalData);
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

.chart--show {
  display: block !important;
}
</style>
