<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <AppAside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <!--  子路由出口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    <!-- <router-view /> -->
  </div>
</template>

<script lang="ts">
import AppAside from './components/app-aside.vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'layoutIndex',
  components: {
    AppAside
  }
})
</script>

<style lang="scss" scoped>
.el-container {
  min-height: 100vh;
  min-width: 980px;
}
.el-aside {
  background: #d3dce6;
}
.el-header {
  background: #b3c0d1;
}
.el-main {
  background: #79a5d0;
}
</style>
