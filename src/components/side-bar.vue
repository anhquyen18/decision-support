<template>
  <!-- <scrolly class="vertical-scrollbar-demo" :passive-scroll="true">
    <scrolly-viewport> -->
  <div class="side-bar border-end">
    <div class="logo-container d-flex justify-content-center align-items-center border-bottom">
      <!-- <img class="rounded" src="../assets/logo/Logo-DUT.png" alt="" width="100" height="100" /> -->
      <img class="rounded" alt="" width="100" height="100" />
    </div>

    <a-card
      :bodyStyle="{ padding: 0 }"
      :tab-list="tabList"
      :active-tab-key="tabKey"
      @tabChange="(tabKey) => onTabChange(tabKey, 'key')"
      style="padding: 0 !important">
      <template #customTab="item">
        <span>
          <i :class="item.icon"></i>
          {{ item.tab }}
        </span>
      </template>
      <div v-if="tabKey === 'dataTab'">
        <a-collapse v-model:activeKey="activeKey" :bordered="false" ghost>
          <a-collapse-panel key="1" header="Dữ liệu hồ">
            <div class="switch-item">
              <a-checkbox v-model:checked="checked" @change="openDrawer()">Hồ nước</a-checkbox>
            </div>
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ Bách Khoa</a-checkbox>
            </div>
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ Nghiên Cứu</a-checkbox>
            </div>
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ Đà Nẵng</a-checkbox>
            </div>
            <template #extra><i class="fa-solid fa-house-flood-water-circle-arrow-right"></i></template>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="Mô hình dự báo mưa">
            <div class="switch-item">
              <a-switch v-model:checked="checked" class="me-2" />
              <p class="">Mô hình 1</p>
            </div>
            <div class="switch-item">
              <a-switch v-model:checked="checked" class="me-2" />
              <p>Mô hình 2</p>
            </div>
            <div class="switch-item">
              <a-switch v-model:checked="checked" class="me-2" />
              <p>Mô hình 3</p>
            </div>
            <template #extra><i class="fa-solid fa-cloud-rain"></i></template>
          </a-collapse-panel>
          <a-collapse-panel key="1" header="Dữ liệu hồ">
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ nước</a-checkbox>
            </div>
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ Bách Khoa</a-checkbox>
            </div>
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ Nghiên Cứu</a-checkbox>
            </div>
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ Đà Nẵng</a-checkbox>
            </div>
            <template #extra><i class="fa-solid fa-house-flood-water-circle-arrow-right"></i></template>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="Mô hình dự báo mưa">
            <div class="switch-item">
              <a-switch v-model:checked="checked" class="me-2" />
              <p class="">Mô hình 1</p>
            </div>
            <div class="switch-item">
              <a-switch v-model:checked="checked" class="me-2" />
              <p>Mô hình 2</p>
            </div>
            <div class="switch-item">
              <a-switch v-model:checked="checked" class="me-2" />
              <p>Mô hình 3</p>
            </div>
            <template #extra><i class="fa-solid fa-cloud-rain"></i></template>
          </a-collapse-panel>
          <a-collapse-panel key="1" header="Dữ liệu hồ">
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ nước</a-checkbox>
            </div>
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ Bách Khoa</a-checkbox>
            </div>
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ Nghiên Cứu</a-checkbox>
            </div>
            <div class="switch-item">
              <a-checkbox v-model:checked="checked">Hồ Đà Nẵng</a-checkbox>
            </div>
            <template #extra><i class="fa-solid fa-house-flood-water-circle-arrow-right"></i></template>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="Mô hình dự báo mưa">
            <div class="switch-item">
              <a-switch v-model:checked="checked" class="me-2" />
              <p class="">Mô hình 1</p>
            </div>
            <div class="switch-item">
              <a-switch v-model:checked="checked" class="me-2" />
              <p>Mô hình 2</p>
            </div>
            <div class="switch-item">
              <a-switch v-model:checked="checked" class="me-2" />
              <p>Mô hình 3</p>
            </div>
            <template #extra><i class="fa-solid fa-cloud-rain"></i></template>
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
// import { Scrolly, ScrollyViewport, ScrollyBar } from 'vue-scrolly';

export default defineComponent({
  components: {},
  setup() {
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

    const detailPanelVisible = inject('detailPanelVisible');
    const openDrawer = () => {
      detailPanelVisible.value = true;
    };

    return { tabList, tabKey, onTabChange, activeKey, checked: ref(false), openDrawer };
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
