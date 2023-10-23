<template>
  <div class="container-fluid shadow h-100">
    <div class="row text-white" style="background-color: #002688; height: 100%">
      <div class="col-1 d-flex align-items-center justify-content-center">
        <a-button type="link" style="color: white" @click="navigateSideBar">
          <span><i class="fa-solid fa-align-justify fs-4"></i></span>
        </a-button>
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
            <a-button type="link" style="color: white; font-weight: bold">
              <span> <i class="fa-solid fa-house me-2 fs-6"></i></span>
              <span>Trang chủ</span>
            </a-button>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-center">
            <a-button type="link" style="color: white; font-weight: bold">
              <span><i class="fa-solid fa-radio me-2 fs-6"></i></span>
              <span>Tin tức</span>
            </a-button>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-end">
            <a-button type="link" style="color: white; font-weight: bold">
              <span><i class="fa-solid fa-right-to-bracket me-2 fs-6"></i></span>
              <span>Đăng nhập</span>
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, inject, provide } from 'vue';
export default defineComponent({
  components: {},
  setup() {
    const value = ref('');
    const test = '2';
    const testValue = ref(test);
    // const sideBarVisible = inject('sideBarVisible');

    const onSearch = (searchValue) => {
      //   console.log('use value', searchValue);
    };
    return {
      onSearch,
      value,
      testValue,
      test,
      // sideBarVisible,
    };
  },
  methods: {
    navigateSideBar() {
      // this.test = this.test + 1;
      // console.log(this.test);
      // console.log(this.testValue);
      // console.log(this.sideBarVisbile);
      // this.sideBarVisbile = true;
      this.$emit('navigateSideBar');
      // if (this.sideBarVisbile) this.sideBarVisbile = false;
      // else this.sideBarVisbile = true;
    },
  },
});
</script>
