<template>
  <div id="my-sidebar">
    Sidebar
    <ul>
      <li>11111</li>
      <li>22222</li>
      <li>33333</li>
    </ul>
  </div>
</template>

<!-- 1、给子组件加id -->
<!--<style type="text/css">
  #my-sidebar li {background-color: yellow;}
</style>-->

<!-- 2、给style标签，加上 scoped 属性，使CSS样式局部生效 -->
<style type="text/css"  scoped>
    li {background-color: yellow;}
</style>
