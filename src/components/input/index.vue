<template>
  <div
    class="input-wrap"
    v-clickOutside="onClose"
    :class="{ toggle }"
    @click="onClick($event)"
  >
    <i
      class="icon el-icon-search color-grey hover_color-wh-1"
      @click="toggle = !toggle"
    ></i>
    <input
      class="input"
      v-model="text"
      type="text"
      @keyup.enter="$emit('enter', text)"
      :placeholder="placeholder"
    />
    <i
      class="icon el-icon-circle-close color-grey suffix"
      @click="text = ''"
      :class="{ clear }"
    ></i>
  </div>
</template>

<script>
import clickOutside from '@/directive/clickOutside.js';
export default {
  directives: { clickOutside },
  props: {
    placeholder: {
      type: String,
      default: '请输入内容',
    },
  },
  data() {
    return {
      toggle: false,
      text: '',
    };
  },
  mounted() {},
  computed: {
    clear() {
      return this.text.length > 0;
    },
  },
  methods: {
    onClose() {
      this.toggle = false;
      console.log(this.toggle);
    },
    onClick(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
.input-wrap {
  cursor: pointer;
  height: 40px;
  margin-right: 16px;
  position: relative;
  .input {
    border: none;
    outline: none;
    width: 0px;
    height: 100%;
    padding-left: 22px;
    color: #494949;
    background-color: transparent;
    transition: all 0.4s ease-in-out;
  }

  .icon {
    position: absolute;
    top: 12px;
    left: 0;
  }
  .suffix {
    display: none;
    left: 90%;
  }
  .clear {
    display: block;
  }
}
.toggle {
  border-bottom: 1px #494949 solid;
}
.toggle {
  .icon {
    color: #fff;
  }
  .input {
    width: 160px;
  }
}
</style>
