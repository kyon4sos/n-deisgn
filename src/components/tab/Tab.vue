<template>
  <div class="n-tab">
    <div class="tab-header">
      <slot name="search"></slot>
      <div
        class="tab-item hover_color-wh-1"
        :class="activeName == tab.name ? 'active' : ''"
        v-for="(tab, idx) in tabs"
        @click="onClick(idx)"
        :key="idx"
      >
        {{ tab.label }}
      </div>
    </div>
    <div class="tab-pane__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'n-tab',
  props: {
    active: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      activeName: this.active,
      tabs: [],
      names: [],
    };
  },
  methods: {
    onClick(idx) {
      this.activeName = this.tabs[idx].name;
      document.documentElement.style.setProperty(
        '--indDelytaX',
        `${idx * 40}px`
      );
      this.$emit('click', this.activeName);
    },
  },
  mounted() {
    console.log(this.$slots);
    console.log(this);
    this.tabs = this.$slots.default.map((vnode) => vnode.child);
    console.log(this.tabs);
  },
  computed: {
    tabpans() {
      return this.$slots.default;
    },
  },
  model: {},
};
</script>

<style lang="scss">
.n-tab {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  .tab-item {
    cursor: pointer;
    color: var(--secondaryColor);
    padding: 4px 8px;
    position: relative;
    transition: all 10s ease-in;
    transform: translate(0px, 0);
  }

  .active {
    transition: all 0.4s ease;
  }
  .active::after {
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    top: 28px;
    left: 0;
    // transform: translateX(-50%);
    background-color: red;
  }
  .tab-pane__body {
    width: 100%;
    display: flex;
  }
  .tab-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    position: relative;
  }
}
</style>
