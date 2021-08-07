<template>
  <div>
    <ul>
      <router-link tag="li" to="/film/nowplaying" active-class="active">正在热播</router-link>
      <router-link tag="li" to="/film/comingsoon" active-class="active">即将上映</router-link>
    </ul>
  </div>
</template>

<style type="text/css" lang="scss" scoped>
  ul{
      display: flex;
      height: 40px;
      line-height: 40px;
      text-align: center;
  }
  li{
      flex: 1;
  }
  .active{
      color: red;
      border-bottom: 3px solid red;
    }
</style>
