<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
// extend写法
import Vue from 'vue'
import request from '@/utils/request'

// request({
//   method: 'GET',
//   url: '/boss/v2/api-docs?group=edu-boss-boot'
// }).then((res) => {
//   console.log(res, 'res')
// })
// const arr = ['123']
// interface foo {
//   a: string
//   b: number
// }

export default Vue.extend({
  data () {
    return {
      a: 1,
      b: '2'
    }
  },
  methods: {
    test () {
      // this.a.c()
    }
  }
})

// class类写法
// import Vue from 'vue'
// import Component from 'vue-class-component'

// @Component
// export default class App extends Vue {
//   a = 1
//   test () {
//     // this.a.
//   }
// }
</script>

<style lang="scss" scoped>
// @import '~@/styles/variables.scss';

.text {
  color: $warning-color;
}
</style>
