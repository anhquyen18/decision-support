import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index.js';
import { Button, message, Menu, Input, Card, Collapse, Checkbox, Switch, Drawer } from 'ant-design-vue';

import App from './App.vue';
import axios from 'axios';
window.axios = axios;

import './lib/fontawesome-free-6.4.0-web/css/all.min.css';
import 'ant-design-vue/dist/antd.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css';

// import '../node_modules/vue-scrolly/dist/vue-scrolly.esm.js';
// import '../node_modules/vue-scrolly/dist/vue-scrolly.min.js';
// import '../node_modules/vue-scrolly/dist/vue-scrolly.js';
// import '../node_modules/vue-scrolly/rollup.config.esm.js';

const app = createApp(App);
app.use(createPinia());

app.use(router);

app.use(Button);
app.use(Menu);
app.use(Input);
app.use(Card);
app.use(Collapse);
app.use(Checkbox);
app.use(Switch);
app.use(Drawer);

app.mount('#app');

app.config.globalProperties.$message = message;
// app.config.errorHandler = () => null;
// app.config.warnHandler = () => null;
