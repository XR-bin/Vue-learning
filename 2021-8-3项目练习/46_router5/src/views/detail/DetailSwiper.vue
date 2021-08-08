<template>
  <div class="swiper-container" :class="swiperClass">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>  
  </div>
</template>

<script type="text/javascript">
import Swiper from 'swiper/bundle'     // 引入的是swiper.js
import 'swiper/swiper-bundle.min.css'   // 引入swiper.css

export default {
  props: {
    perslide: {
      type: Number,
      default: 1
    },
    
    swiperClass: {
      type: String,
      default: 'swiper-container'
    }
  },
    
  mounted() {
    new Swiper('.' + this.swiperClass, {
      slidesPerView: this.perslide,
      spaceBetween: 30,
      freeMode: true
    })
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  .swiper-wrapper{
    img{
      width: 100%;
      height: 100px;
    }
  }
</style>
