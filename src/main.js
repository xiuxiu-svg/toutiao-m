import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/index.less'

// 导入vant所有组件
import Vant from 'vant'
import 'vant/lib/index.css'

// 设置rem基准值 字体大小
import 'amfe-flexible'
// 关闭生产提示
Vue.config.productionTip = false

Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
