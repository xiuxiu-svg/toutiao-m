import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant所有组件
import Vant from 'vant'
import 'vant/lib/index.css'
// 把自己的样式放到插件后面
import './styles/index.less'

// 设置rem基准值 字体大小
import 'amfe-flexible'
import './utils/dayjs'
// 关闭生产提示
Vue.config.productionTip = false

Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
