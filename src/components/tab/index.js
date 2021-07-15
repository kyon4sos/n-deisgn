import Tab from './Tab.vue';
import TabPane from './TabPane.vue';

export default {
  install(Vue) {
    Vue.component(Tab.name, Tab);
    Vue.component(TabPane.name, TabPane);
  },
};
