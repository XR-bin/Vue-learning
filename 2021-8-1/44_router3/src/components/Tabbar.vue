<template>
  <nav>
    <ul>
      <!--
        <router-link>  声明式导航
      -->
      <router-link to="/film" tag="li" active-class="myclass">电影</router-link>
      <router-link to="/cinema" tag="li" active-class="myclass">影院</router-link>
      <router-link to="/center" tag="li" active-class="myclass">我的</router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  ul{
    display: flex;
    li{
      flex: 1;
    }
  }

  .myclass{
    color: blue;
  }
</style>
