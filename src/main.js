import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index.js';
import {
  Button,
  message,
  Layout,
  Input,
  Drawer,
  Popover,
  Form,
  Checkbox,
  Collapse,
  Tooltip,
  Divider,
  Card,
  Table,
  ConfigProvider,
  Switch,
  Modal,
  Select,
  SelectOption,
  Radio,
  DatePicker,
  Dropdown,
  Menu,
} from 'ant-design-vue';

import App from './App.vue';
import axios from 'axios';
window.axios = axios;

import './lib/fontawesome-free-6.4.0-web/css/all.min.css';
// import 'ant-design-vue/dist/antd.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css';
import '../node_modules/ol/dist/ol.js';
import '../node_modules/ol/ol.css';

// import '../node_modules/vue-scrolly/dist/vue-scrolly.esm.js';
// import '../node_modules/vue-scrolly/dist/vue-scrolly.min.js';
// import '../node_modules/vue-scrolly/dist/vue-scrolly.js';
// import '../node_modules/vue-scrolly/rollup.config.esm.js';

const app = createApp(App);
app.config.productionTip = false;

app.use(createPinia());

app.use(router);

app.use(Button);
app.use(Layout);
app.use(Input);
app.use(Drawer);
app.use(Popover);
app.use(Form);
app.use(Checkbox);
app.use(Collapse);
app.use(Tooltip);
app.use(Divider);
app.use(Card);
app.use(Table);
app.use(ConfigProvider);
app.use(Switch);
app.use(Modal);
app.use(Select);
app.use(SelectOption);
app.use(Radio);
app.use(DatePicker);
app.use(Dropdown);
app.use(Menu);

app.mount('#app');

app.config.globalProperties.$message = message;
// app.config.errorHandler = () => null;
// app.config.warnHandler = () => null;
