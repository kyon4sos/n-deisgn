<template>
  <div class="flex w-full main-color">
    <n-sider :width="60">
      <drawer-tool @my-draw="draw"></drawer-tool>
    </n-sider>
    <n-sider>
      <page-management></page-management>
    </n-sider>
    <div id="container" ref="container">
      <canvas
        id="canvas"
        ref="canvas"
        :style="{ transform: `scale(${scale},${scale})` }"
      ></canvas>
    </div>
    <n-sider></n-sider>
  </div>
</template>

<script>
import NSider from '@/components/sider/index';
import DrawerTool from '@/components/drawer-tool';
import PageManagement from '@/components/page-management';
import { getCanvas, choose } from '@/utils';
export default {
  data() {
    return {
      fabric: null,
      canvas: null,
      scale: 1,
    };
  },
  methods: {
    draw(type) {
      const t = choose(type);
      this.canvas.add(t);
    },
    setSize(width, height) {
      console.log(width, height);
      this.canvas.setDimensions(width, height);
    },
  },
  mounted() {
    // this.canvas = this.$refs.canvas;
    this.$refs.container.addEventListener('resize', this.setSize);
    const { width, height } = this.$refs.container.getBoundingClientRect();
    console.log(width, height);

    this.canvas = getCanvas('canvas', { width, height });
    console.log(this.canvas.__onMouseWheel);
    this.canvas.__onMouseWheel = (e) => {
      console.log(e);
      this.scale++;
    };
  },
  components: {
    NSider,
    DrawerTool,
    PageManagement,
  },
};
</script>

<style lang="scss">
#container {
  background-color: #252832;
  flex: 1 1 auto;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
