<template>
     <div>
        <h1>状态更新</h1>
        Hello Vue -{{myname}}
        <button @click="clickHandler">click</button>
        <h1>todo</h1>
        <input type="text" v-model="mytext" />
        <button @click="addkHandler()">add</button>
        <ul>
          <li v-for="data in datalist" :key="data">
            {{data}}
          </li>
        </ul>

        <h1>抽屉</h1>
        <navbar @myevent="myEventHandler">
          <button @click="isShow = !isShow">slot-按键</button>
        </navbar>

        <sidebar v-show="isShow"></sidebar>
      </div>
</template>

<!--  
  组件必须  引用  +  注册  才能使用
-->

<script>
import navbar from './components/Navbar'
import sidebar from './components/Sidebar'
import Vue from 'vue'

Vue.component('navbar', navbar)  // 注册全局组件
Vue.component('sidebar', sidebar)

//导出模块
export default {
  data() {
    return {
      myname: 'kerwin',
      mytext: '',
      datalist: [],
      isShow: false
    }
  },

  methods: {
    clickHandler() {
      this.myname = "tiechui"
    },

    addkHandler() {
      this.datalist.push(this.mytext)
    },

    myEventHandler() {
      this.isShow = !this.isShow
    }
  },

  components: {
    // 局部组件注册
    // 'sidebar': sidebar    //名字相同可以简写如下
    // sidebar
  }
}
</script>

<!--
  像下面这样写，所有组件的li都会受到影响

  解决方法：
    1、给子组件加id
    2、给style标签，加上 scoped 属性，使CSS样式局部生效
      【注】scoped会给当前文件template的所有标签都添加一个相同名字的属性(随机生成的一个属性名)
            CSS就是根据这个属性名渲染的
-->
<!--<style type="text/css">
  li{background-color: yellow;}
</style>-->

<!-- 2、给style标签，加上 scoped 属性，使CSS样式局部生效 -->
<!--<style type="text/css" scoped>
  li {background-color: red;}
</style>-->

<!--
  style标签，加上 lang='scss' ,则支持scss
-->
<style type="text/css" lang="scss">
  $width: 300px;
  ul{
    li{
      background-color: red;
      width: $width;
    }
  }
</style>
