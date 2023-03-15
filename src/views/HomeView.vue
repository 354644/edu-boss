<template>
  <div>
    <h1>hello world</h1>
    <el-button>hi</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class HomeView extends Vue {}
</script>
