<template>
  <div class="flex flex-col justify-between h-full py-2">
    <div class="flex flex-col content-center justify-center px-2 gap-y-2">
      <n-button
        :key="idx"
        v-for="(b, idx) in tools"
        :icon="`iconfont ${b.icon}`"
        :class="current == b.type ? 'active' : ''"
        @click="onClick(b.type, idx)"
        v-tooltip.right="{ content: b.tooltip, classes: ['tooltip'] }"
      ></n-button>
    </div>
    <div class="flex flex-col content-center justify-center px-1">
      <n-button
        icon="el-icon-files"
        v-tooltip.right="{ content: '图层', classes: ['tooltip'] }"
      ></n-button>
      <n-button
        icon="el-icon-folder-add"
        v-tooltip.right="{ content: '组件', classes: ['tooltip'] }"
      ></n-button>
      <n-button
        icon="el-icon-collection"
        v-tooltip.right="{ content: '资源库', classes: ['tooltip'] }"
      ></n-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: 'none',
    },
  },
  data() {
    return {
      current: this.active,
      tools: [
        {
          icon: 'icon-rectangle',
          type: 'rect',
          tooltip: '矩形',
        },
        {
          icon: 'icon-duobianxing',
          type: 'polygon',
          tooltip: '多边形',
        },
        {
          icon: 'icon-yuan',
          type: 'circle',
          tooltip: '圆形',
        },
        {
          icon: 'icon-bofangsanjiaoxing',
          type: 'triangle',
          tooltip: '三角形',
        },
        {
          icon: 'icon-star',
          type: 'star',
          tooltip: '星星',
        },
        {
          icon: 'icon-Line',
          type: 'line',
          tooltip: '直线',
        },
        {
          icon: 'icon-t',
          type: 'text',
          tooltip: '文本',
        },
        {
          icon: 'icon-KnifeOutline',
          type: 'knife',
          tooltip: '切片',
        },
        {
          icon: 'icon-pic',
          type: 'pic',
          tooltip: '图片',
        },
        {
          icon: 'icon-kongbaiye',
          type: 'board',
          tooltip: '画板',
        },
      ],
    };
  },
  mounted() {
    window.addEventListener('click', (e) => {
      console.log('click', e);
    });
  },

  watch: {
    active(a) {
      this.current = a;
    },
  },
  methods: {
    onClick(type) {
      this.$emit('my-draw', type);
      this.current = type;
    },
  },
};
</script>

<style>
.active {
  color: var(--primaryColor);
}
</style>
