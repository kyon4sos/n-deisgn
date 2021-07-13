<template>
  <div class="flex justify-between w-full h-full border-bottom main-color">
    <div class="flex items-center h-full">
      <i
        class="h-full px-2 cursor-pointer  lh-44 icon color-grey-1 el-icon-menu hover:bg-primary"
      ></i>
      <span class="px-2 icon hover:bg-grey filename">无标题</span>
      <i class="px-2 icon el-icon-s-comment lh-44 hover:bg-primary"></i>
    </div>
    <div class="flex items-center h-full right">
      <el-avatar class="mr-2" circl :size="24"></el-avatar>
      <!-- <n-button icon="iconfont icon-fontmall"></n-button> -->
      <n-button
        icon="iconfont icon-fontmall"
        v-tooltip="{ content: '字体文件', classes: ['tooltip'] }"
      ></n-button>
      <n-button
        icon="el-icon-s-tools"
        v-tooltip="{ content: '设置', classes: ['tooltip'] }"
      ></n-button>
      <n-button icon="el-icon-s-goods"></n-button>
      <n-button icon="el-icon-user-solid"></n-button>
      <n-button
        icon="el-icon-caret-right"
        v-tooltip="{ content: '预览', classes: ['tooltip'] }"
      ></n-button>
      <n-button
        class="color-green"
        icon="el-icon-circle-check"
        v-tooltip="{ content: '保存成功', classes: ['tooltip'] }"
      ></n-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.el-header {
  .el-icon-menu {
    padding-left: 14px;
    padding-right: 13px;
  }
  .right {
    .n-button {
      margin-right: 8px;
    }
    .color-green {
      color: green;
    }
  }
}
</style>
