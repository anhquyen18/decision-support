<template>
  <!-- <router-view></router-view> -->
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#0135A7',
        sizeStep: 4,
        sizeUnit: 2,
        borderRadius: 8,
        wireframe: false,
      },
    }">
    <router-view></router-view>
  </a-config-provider>
</template>
