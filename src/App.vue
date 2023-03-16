<template>
  <div id="app">
    <!-- 根路由出口 -->
    <h1>我是app组件...``</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
// extend写法
// import Vue from 'vue'
// export default Vue.extend({
//   data () {
//     return {
//       a: 1,
//       b: '2'
//     }
//   },
//   methods: {
//     test () {
//       this.a.c()
//     }
//   }
// })

// class类写法
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  a = 1
  test () {
    // this.a.
  }
}
</script>

<style lang="scss" scoped></style>
