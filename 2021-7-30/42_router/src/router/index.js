import Vue from 'vue'
import VueRouter from 'vue-router' // 引入路由模块组件，再我们创建这个工程时就帮我们下载好了
import Film from '../views/Film.vue'
import Center from '../views/Center.vue'
import Cinema from '../views/Cinema.vue'

Vue.use(VueRouter)  // 注册路由模块组件,并且创建了一个全局组件<router-view>,在App.vue文件里可以看到它的用处

// 路由配置信息，这个是一个自定义变量，下面的myRoutes是我们自己写的，
// 也可以直接写routes，这样下一段代码内部的声明时就可以简写
const myRoutes = [
  {
    path: '/film',
    component: Film
  },

  {
    path: '/center',
    component: Center
  },

  {
    path: '/cinema',
    component: Cinema
  }
]

const router = new VueRouter({
  // 如果配置变量的名字是routes的话这里就可以简写为routes
  routes: myRoutes
})

export default router
