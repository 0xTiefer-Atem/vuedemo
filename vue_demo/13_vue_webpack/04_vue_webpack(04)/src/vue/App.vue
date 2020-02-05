<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <input type="button" value="按钮" @click="btnClick">
    <h3>{{name}}</h3>
    <Cpn/>
  </div>
</template>

<script>
  import Cpn from "./Cpn.vue";
  export default {
    name: "App",
    data() {
      return {
        message: '使用webpack开发vue',
        name: "wq"
      }
    },
    methods: {
      btnClick() {
        console.log("哈哈哈");
      }
    },
    components: {
      Cpn
    }
  }
</script>

<style scoped>
  .title{
    color: palevioletred;
  }
</style>