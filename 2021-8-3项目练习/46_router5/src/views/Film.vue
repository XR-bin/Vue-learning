<template>
  <div>
    <!-- <div style="height: 300px; background-color: yellow;"></div> -->
    <film-swiper>
      <div class="swiper-slide" v-for="(data, index) in imglist" :key="index">
        <!-- <img :src="data" /> -->
        <div :style="{backgroundImage:'url(' + data + ')'}" 
              style="height: 240px; background-size: cover;">
        </div>
      </div>
    </film-swiper>
    <!-- <ul>
      <li>正在热播</li>
      <li>即将上映</li>
    </ul> -->
    <!-- 只有在vue中， 组件上写的class，style会自动传到组件的根节点上 -->
    <film-header style="position: sticky; top: 0px; background-color: white; z-index: 100;"></film-header>

    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import filmHeader from './film/FilmHeader.vue'
import filmSwiper from './film/FilmSwiper.vue'

export default {
  data() {
    return {
      imglist: [
        "https://pic.maizuo.com/usr/movie/fcb5e9eb502bf2c296541f11f0d4b96b.jpg@1024h_768w_50Q?x-oss-process=image/quality,Q_70",
        "https://pic.maizuo.com/usr/movie/f3e89978be5d0b35aa5dfbd1b58e7042.jpg@1024h_768w_50Q?x-oss-process=image/quality,Q_70",
        "https://pic.maizuo.com/usr/movie/570200143ffe18a91a1b50935be174b3.jpg@1024h_768w_50Q?x-oss-process=image/quality,Q_70"
      ]
    }
  },
  
  components: {
    filmHeader,
    filmSwiper
  }
}
</script>
