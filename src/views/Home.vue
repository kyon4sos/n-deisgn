<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import { fabric } from 'fabric';
export default {
  name: 'Home',
  data() {
    return {
      width: 1000,
      height: 1000,
      component: [],
    };
  },
  mounted() {
    var canvas = new fabric.Canvas('canvas');
    // var rect = new fabric.Rect({
    //   top: 100,
    //   left: 100,
    //   width: 60,
    //   height: 70,
    //   fill: "red",
    // });
    const t = new fabric.Text('hello world', { left: 100, top: 100 });
    canvas.add(t);
  },
};
</script>
