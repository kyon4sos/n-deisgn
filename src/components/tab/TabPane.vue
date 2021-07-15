<template>
  <div class="tab-pane" :class="{ display }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab-pane',
  props: {
    name: {
      default: '',
      type: String,
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    display() {
      return this.$parent.activeName == this.name;
    },
  },
};
</script>

<style>
.tab-pane {
  display: none;
}
.display {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
