<template>
  <nav>
    <ul>
      <!--
        <router-link>  声明式导航
      -->
      <router-link to="/film" tag="li" active-class="myclass">
        <i class="iconfont icon-electronics"></i>
        <span>电影</span>
      </router-link>
      <router-link to="/cinema" tag="li" active-class="myclass">
        <i class="iconfont icon-video"></i>
        <span>影院</span>
      </router-link>
      <router-link to="/center" tag="li" active-class="myclass">
        <i class="iconfont icon-account"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  nav{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    text-align: center;
    background-color: white;

    ul{
      display: flex;
      li{
        flex: 1;
        display: flex;
        flex-direction: column;
        i{font-size: 18px;}
        span{font-size: 12px;}
      }
    }
  }

  .myclass{
    color: red;
  }
</style>
