<template>
  <div>
    <tabbar></tabbar>
    <!--
      路由容器 ： router-view
      这个路由容器其实就类似一个插槽slot，专门留给路由显示的的地方
    -->
    <router-view></router-view>
  </div>
</template>

<!--
  组件必须  引用  +  注册  才能使用
-->

<script>
import tabbar from './components/Tabbar'

// ES6 导出模块
export default {
  data() {
    return {

    }
  },

  components: {
    tabbar
  }
}
</script>

<style type="text/css">
  li{list-style: none;}
  div{font-size: 32px;}
</style>
