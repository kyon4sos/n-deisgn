<template>
  <div class="workspace">
    <el-container>
      <el-header height="44px">
        <header-nav></header-nav>
      </el-header>
      <el-main>
        <Drawer />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from '@/components/header-nav';
import Drawer from '@/components/drawer';
export default {
  components: {
    Drawer,
    HeaderNav,
  },
};
</script>

<style lang="scss">
.workspace {
  width: 100%;
  .el-main {
    display: flex;
    flex-direction: row;
    padding: 0;
    height: calc(100vh - 44px);
  }
}
</style>
