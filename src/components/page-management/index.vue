<template>
  <div class="flex-grow-0 flex-shrink-0 management__wrap">
    <div class="page-management">
      <div
        class="flex items-center justify-between flex-grow-0 flex-shrink-0  header border-bottom"
      >
        <span>页数:{{ pageTotal }}</span>
        <div>
          <n-button icon="iconfont icon-cc-plus" :size="12"></n-button>
          <n-button icon="iconfont icon-up1" :size="12"></n-button>
        </div>
      </div>
      <div class="body">
        <div
          class="page-item"
          :class="[currentPage == p.id ? 'active' : '']"
          v-for="p in pages"
          :key="p.id"
          @click="currentPage = p.id"
        >
          <i class="icon iconfont icon-right1"></i><span> {{ p.title }}</span>
        </div>
      </div>
      <div></div>
    </div>
    <div class="layer">
      <div
        class="flex items-center justify-between flex-grow-0 flex-shrink-0  header border-bottom border-top"
      >
        <div class="input-wrap">
          <i class="icon-prefix iconfont icon-guanbi"></i>
          <input class="input" type="text" placeholder="搜索" />
        </div>
      </div>
      <div class="body"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pages: [
        {
          id: 1,
          title: '页面1',
          content: [],
        },
        {
          id: 2,
          title: '页面1',
          content: [],
        },
      ],
    };
  },
  computed: {
    pageTotal() {
      return this.pages.length;
    },
  },
};
</script>

<style lang="scss">
.management__wrap {
  .header {
    padding: 8px 8px;
    height: 34px;
  }
  .page-item {
    padding: 6px;
  }
  .page-item.active {
    background-color: var(--primaryColor);
    transition: all 0.4s ease-in-out;
    .icon {
      visibility: visible;
    }
  }
  .icon {
    visibility: hidden;
  }
  .body {
    height: 140px;
  }
  .input-wrap {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    .input {
      height: 100%;
      outline: none;
      border: none;
      padding-left: 8px;
      width: 100%;
      font-size: 14px;
      color: #fff;
      background-color: transparent;
    }
  }
}
</style>
