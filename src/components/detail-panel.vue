<template>
  <div class="detail-panel" :class="{ 'panel--active': detailPanelVisible }">
    <a-drawer
      :headerStyle="{ backgroundColor: '#4494F1' }"
      :style="{ position: 'absolute', width: '100%', height: '100%' }"
      :get-container="false"
      v-model:visible="detailPanelVisible"
      placement="right"
      @after-visible-change="afterVisibleChange"
      :mask="false"
      :maskClosable="false"
      :autofocus="false">
      <template #closeIcon><i class="fa-solid fa-xmark fs-4 text-white"></i></template>
      <template #title><span style="color: #ffffff; font-weight: bold">THÔNG TIN</span></template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
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

  mounted() {},
});
</script>

<style lang="scss" scoped>
.detail-panel {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
}

.panel--active {
  pointer-events: all;
}
</style>
