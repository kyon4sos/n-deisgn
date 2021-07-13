<template>
  <div class="flex flex-col justify-between h-full py-2">
    <div class="flex flex-col content-center justify-center px-1 gap-y-2">
      <!-- <n-button icon="iconfont icon-rectangle"></n-button>
      <n-button icon="iconfont icon-duobianxing"></n-button>
      <n-button icon="iconfont icon-yuan"></n-button>
      <n-button icon="iconfont icon-bofangsanjiaoxing"></n-button>
      <n-button icon="iconfont icon-Line"></n-button>
      <n-button icon="iconfont icon-KnifeOutline"></n-button>
      <n-button icon="iconfont icon-pic"></n-button> -->
      <n-button
        v-for="(b, idx) in tools"
        :icon="`iconfont ${b.icon}`"
        :key="idx"
        v-tooltip.right="{ content: b.tooltip, classes: ['tooltip'] }"
        @click="$emit('my-draw', b.type)"
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
  data() {
    return {
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
          type: 'star',
          tooltip: '星星',
        },
        {
          icon: 'icon-Line',
          type: 'line',
          tooltip: '直线',
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
      ],
    };
  },
};
</script>

<style></style>
