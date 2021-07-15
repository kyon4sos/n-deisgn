<template>
  <div>
    <n-tab active="design" @click="onClick">
      <tab-pane label="设计" name="design">
        <h1>设计</h1>
      </tab-pane>
      <tab-pane label="原型" name="protype">
        <h1>设计1</h1>
      </tab-pane>
      <tab-pane label="标注" name="comment">
        <h1>设计2</h1>
      </tab-pane>
    </n-tab>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    onClick(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
