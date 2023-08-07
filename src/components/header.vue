<template>
  <div class="container-fluid shadow">
    <div class="row text-white" style="background-color: #6794e0; min-height: 6vh; max-height: 6vh">
      <div class="col-1 d-flex align-items-center justify-content-center">
        <span><i class="fa-solid fa-align-justify fs-4"></i></span>
      </div>

      <div class="col-7 d-flex justify-content-start align-items-center">
        <a-input-search
          v-model:value="value"
          placeholder="Nhập từ khoá để tìm kiếm"
          enter-button
          @search="onSearch"
          style="width: 40%"
          allowClear />
      </div>

      <!-- <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">a</div> -->

      <div class="col-4">
        <div class="row h-100">
          <div class="col-4 d-flex align-items-center justify-content-center">
            <span><i class="fa-solid fa-house me-2 fs-6"></i></span>
            <span>Trang chủ</span>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-center">
            <span><i class="fa-solid fa-radio me-2 fs-6"></i></span>
            <span>Tin tức</span>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-end">
            <span><i class="fa-solid fa-right-to-bracket me-2 fs-6"></i></span>
            <span>Đăng nhập</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';
export default defineComponent({
  components: {},
  setup() {
    const value = ref('');

    const onSearch = (searchValue) => {
      //   console.log('use value', searchValue);
    };
    return {
      onSearch,
      value,
    };
  },
});
</script>
