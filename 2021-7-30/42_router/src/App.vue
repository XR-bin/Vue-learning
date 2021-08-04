<template>
  <div>
    App
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
// ES6 导出模块
export default {
  data() {
    return {

    }
  }
}
</script>
