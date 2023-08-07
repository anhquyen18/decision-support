import { defineStore } from 'pinia';

export const panelState = defineStore('panel', {
  state: () => ({
    detailPanelState: true,
    chartPanelState: false,
  }),

  actions: {
    changeDetailPanelState() {
      if (this.detailPanelState === false) this.detailPanelState = true;
      else if (this.detailPanelState === true) this.detailPanelState = false;
    },
  },

  getters: {
    getDetailPanelVisible() {
      return this.detailPanelState;
    },
  },
});
