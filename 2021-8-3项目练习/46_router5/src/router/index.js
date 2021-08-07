import Vue from 'vue'
import VueRouter from 'vue-router' // 引入路由模块组件，再我们创建这个工程时就帮我们下载好了
import Film from '../views/Film.vue'
// import Center from '../views/Center.vue'    // 懒加载需屏蔽
import Cinema from '../views/Cinema.vue'
import Detail from '../views/Detail.vue'
// import Login from '../views/Login.vue'    // 懒加载需屏蔽
import Nowplaying from '../views/film/Nowplaying.vue'
import Comingsoon from '../views/film/Comingsoon.vue'

Vue.use(VueRouter) // 注册路由模块组件,并且创建了一个全局组件<router-view>,在App.vue文件里可以看到它的用处

// 路由配置信息，这个是一个自定义变量，下面的myRoutes是我们自己写的，
// 也可以直接写routes，这样下一段代码内部的声明时就可以简写
const myRoutes = [
  {
    path: '/film',
    component: Film,

    /*
      路由嵌套
    */
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },

      {
        path: 'comingsoon',
        component: Comingsoon
      },

      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },

  {
    path: '/center',
    // component: Center
    component: () => import(/* webpackChunkName: "group-foo" */'../views/Center.vue')
  },

  {
    path: '/cinema',
    component: Cinema
  },

  {
    path: '/login',
    // 懒加载
    // component: () => import('../views/Login.vue')
    // 懒加载(分组)    group-foo是自定义组名
    component: () => import(/* webpackChunkName: "group-foo" */'../views/Login.vue')
  },

  {
    path: '/detail/:myid',     // 这样的写法叫动态路由
    component: Detail,
    name: 'kerwinDetail'
  },

  // query方式
  // {
  //   path: '/detail',
  //   component: Detail
  // },

  // 重定向
  {
    path: '*', // *是通配符，优先级是最低的
    redirect: '/film'
  }
]

const router = new VueRouter({
  // 路由模式  一共有两种：hash  和  history
  // 不写mode的情况下，默认是hash模式
  // hash 的模式下网站格式      http://location/:8080/#/xxxx/xxxx
  // history 的模式下网站格式   http://localhost:8080/xxxx/xxxx
  // mode: 'history',

  // 如果配置变量的名字是routes的话这里就可以简写为routes
  routes: myRoutes
})

// 全局路由守卫(全局路由拦截)
router.beforeEach((to, from, next) => {
  const auth = ['/center', '/order', '/money', '/card']

  // console.log(to)

  if (auth.includes(to.fullPath)) {
    // console.log('验证token')
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
