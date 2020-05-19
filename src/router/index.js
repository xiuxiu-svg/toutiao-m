import Vue from 'vue'
import VueRouter from 'vue-router'
// const login = () => import('@views/login')
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  // home
  {
    path: '/',
    name: '',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home')
      },
      {
        path: '/vedio',
        name: 'Vedio',
        component: () => import('@/views/vedio')
      },
      {
        path: '/question',
        name: 'Question',
        component: () => import('@/views/question')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('@/views/my')
      }
    ]
  },
  // search
  {
    path: '/search',
    name: 'SearchIndex',
    component: () => import('@/views/search')
  },
  // article 动态路由参数，使用props将组建与路由解耦
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article'),
    // 将路径参数映射到本地
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
