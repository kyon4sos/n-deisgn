<template>
  <div
    class="input-search__wrap"
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
      return this.text.length > 0 && this.toggle;
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
.input-search__wrap {
  cursor: pointer;
  height: 100%;
  margin-right: 8px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 14px;
  .input {
    border: none;
    outline: none;
    width: 0px;
    height: 100%;
    color: #dbdbdb;
    opacity: 0;
    background-color: transparent;
    transition: all 0.4s ease-in-out;
  }
  .icon {
    position: absolute;
    left: 8px;
  }
  .icon:nth-child(2) {
    display: none;
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
  .icon {
    color: #fff;
  }
  .input {
    width: 160px;
    padding-left: 20px;
    opacity: 1;
  }
}
</style>
