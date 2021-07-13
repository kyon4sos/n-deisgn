// import { createPopper } from '@popperjs/core';
const Popover = {
  bind() {
    const ele = document.createElement('div');
    const tooltip = document.querySelector('#tooltip');
    console.log(tooltip);
    ele.style.width = '100px';
    ele.style.height = '100px';
    ele.style.setProperty('backgroundColor', 'red');
    console.log(ele);
    ele.innerText = '你好';
    // console.log(ele);
    // createPopper(tooltip, ele, {
    //   placement: 'right',
    // });
  },
  unbind(el) {
    console.log(el);
  },
};

export default Popover;
