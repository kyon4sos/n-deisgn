// import PopoverComponent from './popover.jsx';
import PopoverComponent from './index.vue';
const Popover = {
  install(Vue) {
    Vue.component(PopoverComponent.name, PopoverComponent);
  },
};

export default Popover;
