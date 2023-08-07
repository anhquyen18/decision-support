import { defineStore } from 'pinia';

export const mapState = defineStore('map', {
  state: () => ({
    map: null,
  }),

  actions: {
    setMap(map) {
      this.map = map;
      //   return 'anhquyen';
    },
  },

  getters: {
    getMap() {
      return this.map;
      //   console.log('anhquyen');
      //   return 'anhquyen';
    },
  },
});
