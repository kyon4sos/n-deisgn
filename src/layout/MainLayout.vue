<template>
  <el-container>
    <el-aside width="200px">
      <div class="top">
        <div class="logo">neko</div>
        <n-menu></n-menu>
      </div>
      <div class="assets">
        <span><i class="el-icon-present"></i>资源</span>
        <span> 进入<i class="el-icon-arrow-right"></i></span>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <el-button icon="el-icon-plus"></el-button>
        <div class="user-info">
          <div class="btn"><i class="el-icon-message-solid"></i>最新功能</div>
          <el-avatar :size="36" :src="circleUrl"></el-avatar>
        </div>
      </el-header>
      <el-main>
        <div class="main-header">
          <NSearchInput
            placeholder="请输入文件名"
            @enter="onEnter"
          ></NSearchInput>
          <n-tab :tabs="tabs">
            <tab-pane label="全部文件" name="all">
              <div class="btn-large new-file">
                <i class="el-icon-plus"></i>
                <span>创建新文件</span>
              </div>
            </tab-pane>
            <tab-pane label="我创建的" name="my"><h1>你好2</h1></tab-pane>
            <tab-pane label="共享给我的" name="share"
              ><el-empty description="暂无数据"></el-empty
            ></tab-pane>
          </n-tab>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import NMenu from '@/components/menu';
import NSearchInput from '@/components/input';
import NTab from '@/components/tab';
import TabPane from '../components/tab/TabPane.vue';
export default {
  name: 'MainLayout',
  components: { NMenu, NSearchInput, NTab, TabPane },
  data() {
    return {
      tabs: ['全部文件', '我创建的', '共享给我的'],
      activeName: 'first',
      circleUrl: '',
      search: '',
    };
  },
  methods: {
    handleClick() {},
    onEnter(e) {
      console.log(e);
    },
  },
};
</script>
<style lang="scss" scoped>
.logo {
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  line-height: 60px;
}
.assets {
  cursor: pointer;
  color: #fff;
  padding: 16px 16px;
  display: flex;
  justify-content: space-between;
  span:nth-child(1) {
    i {
      margin-right: 10px;
    }
  }
}
.assets:hover {
  background-color: #d55f64;
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: var(--headerBgColor);
  border-bottom-color: var(--border-color);
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.user-info {
  display: flex;
  align-items: center;
}

.el-icon-message-solid {
  margin-right: 8px;
}
.el-aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: var(--sideBgColor);
  border-right-color: var(--border-color);
  border-right-width: 1px;
  border-right-style: solid;
  .top {
    flex: 1 1 auto;
    background: var(--sideBgColor);
    .logo {
      text-align: center;
      background: var(--sideBgColor);
    }
  }
}
.el-main {
  .main-header {
    display: flex;
  }
  background: var(--mainBgColor);
}
.btn-large {
  width: 240px;
  height: 240px;
}
.new-file {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #1d1d1d;
  cursor: pointer;
  color: #ffffff99;
  .el-icon-plus {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
  }
}
</style>
