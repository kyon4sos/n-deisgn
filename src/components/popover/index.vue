<template>
  <div class="popover-wrap" v-popo>
    <slot></slot>
  </div>
</template>

<script>
import popo from '@/directive/popover.js';
export default {
  name: 'popover',
  directives: {
    popo,
  },
};
</script>

<style>
#tooltip {
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
}
.popover-wrap {
  background-color: aqua;
}
</style>
