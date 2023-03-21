import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入elementUi和样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 加载全局样式,自定义style
import './styles/index.scss'
// 使用elementUi
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
