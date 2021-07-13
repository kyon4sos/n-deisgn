<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#2e3139"
    text-color="#fff"
    active-text-color="#d55f64"
  >
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">最近</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">工作台</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">回收站</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {};
</script>

<style>
.el-menu-item {
}
</style>
