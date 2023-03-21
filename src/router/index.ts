import Vue from 'vue'
import Layout from '@/layout/index.vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName:'login' */ '@/views/login/index.vue')
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName:'404' */ '@/views/error-page/404.vue')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home', // 默认子路由
        component: () =>
          import(/* webpackChunkName:'home' */ '@/views/home/index.vue')
      },

      {
        path: '/role',
        component: () =>
          import(/* webpackChunkName:'role' */ '@/views/role/index.vue')
      },
      {
        path: '/menu',
        component: () =>
          import(/* webpackChunkName:'menu' */ '@/views/menu/index.vue')
      },
      {
        path: '/resources',
        component: () =>
          import(
            /* webpackChunkName:'resources' */ '@/views/resources/index.vue'
          )
      },
      {
        path: '/course',
        component: () =>
          import(/* webpackChunkName:'course' */ '@/views/course/index.vue')
      },
      {
        path: '/user',
        component: () =>
          import(/* webpackChunkName:'user' */ '@/views/user/index.vue')
      },
      {
        path: '/advert',
        component: () =>
          import(/* webpackChunkName:'user' */ '@/views/advert/index.vue')
      },
      {
        path: '/advert-space',
        component: () =>
          import(
            /* webpackChunkName:'Advertising' */ '@/views/advert-space/index.vue'
          )
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
