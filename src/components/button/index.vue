<template>
  <!-- <div class="cursor-pointer n-button icon-only">
    <i class="hover:bg-black-light icon" :class="icon">
      <slot></slot>
    </i>
  </div> -->
  <i
    :style="{ fontSize: size + 'px' }"
    class="cursor-pointer hover:bg-black-light n-button icon-only"
    :class="icon"
    v-on="$listeners"
  >
    <slot></slot>
  </i>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      defaul: 32,
    },
    icon: {
      default: '',
      type: String,
    },
  },
};
</script>

<style lang="scss">
.icon-only {
  display: inline;
  color: var(--secondaryColor);
  text-align: center;
  font-size: 16px;
  padding: 4px 4px;
  // line-height: 1;
  box-sizing: border-box;
}
</style>
