export default {
  template: `
  <div id="app">
    <h2>{{message}}</h2>
    <input type="button" value="按钮" @click="btnClick">
    <h3>{{name}}</h3>
   </div>
`,
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
  }
}