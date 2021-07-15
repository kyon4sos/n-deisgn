<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#2e3139"
    text-color="#fff"
    @select="handleSelect"
    active-text-color="#d55f64"
    router="true"
  >
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">最近</span>
    </el-menu-item>
    <el-menu-item index="/workspace">
      <i class="el-icon-document"></i>
      <span slot="title">工作台</span>
    </el-menu-item>
    <el-menu-item index="/dev">
      <i class="el-icon-setting"></i>
      <span slot="title">回收站</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'n-menu',
  methods: {
    handleSelect(index, indexPath) {
      console.log(index, indexPath);
    },
  },
};
</script>

<style>
.el-menu-item {
}
</style>
