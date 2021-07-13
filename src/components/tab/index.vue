<template>
  <div class="tab">
    <div class="tab__wrap">
      <div
        class="tab-item hover_color-wh-1"
        v-for="(tab, idx) in tabs"
        @click="onClick(idx)"
        :key="idx"
      >
        {{ tab }}
      </div>
    </div>
    <div class="tab-pane__wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import TabPane from '@/components/tab/TabPane';
export default {
  components: {
    // TabPane,
  },
  data() {
    return {
      activeName: 'name1',
      tabs: [],
      names: [],
    };
  },
  methods: {
    onClick(idx) {
      this.activeName = this.names[idx];
      console.log('activeName', this.activeName);
    },
  },
  mounted() {
    this.tabs = this.$children.map((t) => t.label);
    this.names = this.$children.map((t) => t.name);
  },
  computed: {
    tabpans() {
      return this.$slots.default;
    },
  },
  model: {
    prop: 'active',
    event: 'click',
  },
  props: {
    active: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style lang="scss">
.tab {
  display: flex;
  flex-direction: column;
  .tab-item {
    padding: 16px 0px;
    cursor: pointer;
    color: var(--secondaryColor);
    margin-right: 16px;
  }
}
.tab-pane__wrap {
  display: flex;
}
.tab__wrap {
  display: flex;
  flex-direction: row;
}
</style>
