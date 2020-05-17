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
  {
    path: '/search',
    name: 'SearchIndex',
    component: () => import('@/views/search')
  }
]

const router = new VueRouter({
  routes
})

export default router
