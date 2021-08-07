<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>  
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/javascript">
import Swiper from 'swiper/bundle'     // 引入的是swiper.js
import 'swiper/swiper-bundle.min.css'   // 引入swiper.css

export default {
  mounted() {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  .swiper-wrapper{
    img{
        width: 100%;
    }
  }
</style>
