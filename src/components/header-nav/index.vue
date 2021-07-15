<template>
  <div class="flex justify-between w-full h-full border-bottom header-bg-color">
    <div class="flex items-center h-full">
      <i
        class="h-full px-2 cursor-pointer  lh-44 icon color-grey-1 el-icon-menu hover:bg-primary"
      ></i>
      <span class="px-2 icon hover:bg-grey filename">无标题</span>
      <i class="px-2 icon el-icon-s-comment lh-44 hover:bg-primary"></i>
    </div>
    <div class="flex items-center h-full right">
      <el-avatar class="mr-2" circl :size="24"></el-avatar>
      <n-button
        icon="iconfont icon-fontmall"
        v-tooltip="{ content: '字体文件', classes: ['tooltip'] }"
      ></n-button>
      <n-button
        icon="el-icon-s-tools"
        @click="showDrawer = true"
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
    <el-drawer
      title="设置"
      :visible.sync="showDrawer"
      custom-class="custom-class"
    >
      <div class="draw-body">
        <div class="color-pick__item" v-for="(t, idx) in theme" :key="idx">
          <label for=""> {{ t.label }}</label>
          <el-color-picker
            v-model="t.color"
            show-alpha
            :predefine="predefineColors"
            @active-change="(c) => onActiveChange(t.cssVar, c)"
            @change="(c) => onChange(t.cssVar, c)"
          >
          </el-color-picker>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: [
        {
          label: '顶栏颜色',
          cssVar: '--headerBgColor',
          color: '',
        },
        {
          label: '画布颜色',
          cssVar: '--bgColor',
          color: '',
        },
        {
          label: '字体颜色',
          cssVar: '--fontColor',
          color: '',
        },
        {
          label: '按钮颜色',
          cssVar: '--secondaryColor',
          color: '',
        },
      ],
      showDrawer: false,
      color: 'rgba(255, 69, 0, 0.68)',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577',
      ],
    };
  },
  methods: {
    onShowDraw() {},
    onActiveChange(cssVar, color) {
      this.changeColor(cssVar, color);
    },
    onChange(cssVar, color) {
      this.changeColor(cssVar, color);
    },
    changeColor(cssVar, color) {
      document.documentElement.style.setProperty(cssVar, color);
    },
  },
};
</script>

<style lang="scss">
.el-header {
  background: var(--headerBgColor);
  color: var(--fontColor);
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
.custom-class {
  background: var(--bgColor);
}
.draw-body {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  .color-pick__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 16px;
    margin-bottom: 16px;
    > label {
      font-size: 20px;
      margin-right: 16px;
    }
  }
}
</style>
