<template>
  <div class="nsider" :style="{ width: width + 'px' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 232,
    },
  },
};
</script>

<style>
.nsider {
  height: 100%;
  border-right: 1px solid #131418;
}
</style>
