<template>
  <!-- <scrolly class="vertical-scrollbar-demo" :passive-scroll="true">
    <scrolly-viewport> -->
  <div class="side-bar border-end">
    <div class="logo-container d-flex justify-content-center align-items-center border-bottom">
      <img class="rounded" src="../assets/logo/Logo-DUT.png" alt="" width="100" height="100" />
      <!-- <img class="rounded" alt="" width="100" height="100" /> -->
    </div>

    <a-card
      :bodyStyle="{ padding: 0 }"
      :tab-list="tabList"
      :active-tab-key="tabKey"
      @tabChange="(tabKey) => onTabChange(tabKey, 'key')"
      style="padding: 0 !important">
      <template #customTab="item">
        <span style="font-size: 0.9rem; padding: 0; margin: 0">
          <i :class="item.icon"></i>
          {{ item.tab }}
        </span>
      </template>
      <div v-if="tabKey === 'dataTab'">
        <a-collapse v-model:activeKey="activeKey" :bordered="false" ghost @change="collapseChange">
          <a-collapse-panel key="1" header="Dữ liệu vận hành hồ" collapsible="header">
            <div v-for="lake in lakes" class="switch-item">
              <a-button type="text" @click="showFeatureDetailPanel(lake.id)">{{ lake.name }}</a-button>
            </div>
            <template #extra>
              <a-switch
                v-model:checked="lakeVisible"
                checked-children="Bật"
                un-checked-children="Tắt"
                @change="lakeVisibleChange" />
            </template>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="Dữ liệu thuỷ văn" collapsible="header">
            <div v-for="station in hydrologicalStation[0]" class="switch-item">
              <a-button type="text">{{ station }}</a-button>
            </div>
            <div class="switch-item" v-if="moreStation === false">
              <a-button type="link" @click="moreStationClick">more</a-button>
            </div>
            <div v-if="moreStation === true" v-for="station in hydrologicalStation[1]" class="switch-item">
              <!-- <a-switch v-model:checked="checked" class="me-2" /> -->
              <a-button type="text">{{ station }}</a-button>
            </div>
            <template #extra>
              <a-switch
                v-model:checked="stationVisible"
                checked-children="Bật"
                un-checked-children="Tắt"
                @change="stationVisibleChange" />
            </template>
          </a-collapse-panel>
        </a-collapse>
      </div>

      <div v-if="tabKey === 'searchTab'">
        <div>this is tab tim kiem</div>
      </div>
    </a-card>
  </div>
  <!-- </scrolly-viewport>
    <scrolly-bar axis="y"></scrolly-bar>
  </scrolly> -->
</template>

<script>
import { defineComponent, ref, reactive, toRefs, inject } from 'vue';
import { mapState } from '../stores/map-state';
// import { Scrolly, ScrollyViewport, ScrollyBar } from 'vue-scrolly';

export default defineComponent({
  components: {},
  setup() {
    const detailPanelVisible = inject('detailPanelVisible');
    const featureDetail = inject('featureDetail');
    const featureData = inject('featureData');
    const chartPanelVisible = inject('chartPanelVisible');

    const activeKey = ref(['1']);
    const tabList = [
      {
        key: 'dataTab',
        tab: 'Danh mục dữ liệu',
        icon: 'fa-solid fa-database',
      },
      {
        key: 'searchTab',
        tab: 'Tìm kiếm',
        icon: 'fa-solid fa-magnifying-glass',
      },
    ];

    const tabKey = ref('dataTab');
    const onTabChange = (value, type) => {
      if (type === 'key') {
        tabKey.value = value;
      } else if (type === 'noTitleKey') {
        noTitleKey.value = value;
      }
    };
    // const detailPanelVisible = inject('detailPanelVisible');
    const openDrawer = () => {
      // detailPanelVisible.value = true;
    };
    openDrawer();

    return {
      detailPanelVisible,
      featureDetail,
      tabList,
      tabKey,
      onTabChange,
      activeKey,
      checked: ref(false),
      openDrawer,
      featureData,
      chartPanelVisible,
    };
  },

  data() {
    return {
      lakes: [
        { name: 'Hồ thuỷ điện A Vương', id: 'HoChuaQuangNam.39' },
        { name: 'Hồ thuỷ điện Đăk Mi 4', id: 'HoChuaQuangNam.45' },
        { name: 'Hồ thuỷ điện Sông Bung 4', id: 'HoChuaQuangNam.41' },
        { name: 'Hồ thuỷ điện Sông Tranh 2', id: 'HoChuaQuangNam.40' },
      ],
      hydrologicalStation: [
        ['Thành Mỹ', 'Nông Sơn', 'Câu Lâu', 'Ái Nghĩa'],
        [
          'Hiên',
          'Phước Sơn',
          'Hội Khách',
          'Trà My',
          'Tiên Phước',
          'Hiệp Đức',
          'Giao Thuỷ',
          'Hội An',
          'KT Tam Kỳ',
          'TV Tam Kỳ',
        ],
      ],
      moreStation: false,
      lakeVisible: true,
      stationVisible: true,
    };
  },

  computed: {
    map() {
      return mapState().getMap;
    },
  },

  methods: {
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

    getFeatureById(id) {
      document.body.style.cursor = 'wait';

      const featureURL = `https://gis.dut.udn.vn/geoserver/WebGIS_TamKy2/wfs?service=WFS&version=2.0.0&request=GetFeature&typenames=WebGIS_TamKy2:${
        id.split('.')[0]
      }&filter=%3Cfes:Filter%20xmlns:fes=%22https://www.opengis.net/fes/2.0%22%3E%3Cfes:ResourceId%20rid=%22${id}%22/%3E%3C/fes:Filter%3E&outputFormat=application%2Fjson`;
      axios
        .get(featureURL)
        .then((response) => {
          if (response) {
            this.featureDetail = response.data.features[0];
            this.featureData.type = this.featureDetail.id.split('.')[0];
            this.featureData.type = this.featureDetail.id.split('.')[0];
            this.detailPanelVisible = true;

            if (this.featureData.type === 'HoChuaQuangNam')
              this.featureData.name = this.featureDetail.properties['Name'];
            else if (this.featureData.type === 'TramKhiTuongThuyVan')
              this.featureData.name = this.featureDetail.properties['Station'];
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          document.body.style.cursor = 'auto';
        });
    },

    showFeatureDetailPanel(id) {
      this.chartPanelVisible = false;

      this.featureDetail = '';

      this.detailPanelVisible = false;

      this.getFeatureById(id);
    },

    moreStationClick() {
      this.moreStation = true;
    },

    collapseChange() {
      this.moreStation = false;
    },

    visibleChange(visible, layer) {
      // console.log(layer.getVisible());
      if (visible) layer.setVisible(visible);
      else layer.setVisible(false);
    },

    lakeVisibleChange() {
      this.visibleChange(this.lakeVisible, this.getMainLayerByTitle('Hồ chứa nước'));
    },

    stationVisibleChange() {
      this.visibleChange(this.stationVisible, this.getMainLayerByTitle('Trạm khí tượng'));
    },
  },
});
</script>

<style lang="scss" scoped>
.vertical-scrollbar-demo {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
}
.side-bar {
  position: relative;
  height: 94vh;
  width: 100%;
  // margin-left: calc(100vw - 100%);
  overflow-x: hidden;
  overflow-y: overlay;
  // scrollbar-gutter: stable;
  // overflow: hidden !important;
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 3px;
  }
  &:hover {
    // overscroll-behavior-y: overlay;
  }
}

.logo-container {
  height: 15%;
  width: 100%;
}

.switch-item {
  display: inline-flex;
  width: 100%;
  // height: 100px;
  margin-left: 2rem;
  margin-bottom: 0.3rem;
  // justify-content: center;
  // align-items: center;
  & p {
    margin: 0;
    // height: 100px;
    // align-items: center;
    // align-self: center;
    // width: 100%;
  }
}
</style>
