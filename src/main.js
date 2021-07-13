import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import NButton from '@/components/button/index.js';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/element-variables.scss';
import 'tailwindcss/tailwind.css';
import './assets/css/index.css';
import Popover from '@/components/popover/index.js';
// import VTooltip from 'v-tooltip';
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip';

Vue.directive('tooltip', VTooltip);
Vue.directive('close-popover', VClosePopover);
Vue.component('v-popover', VPopover);
Vue.config.productionTip = false;
Vue.use(NButton);
Vue.use(Popover);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
