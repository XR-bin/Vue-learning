<template>
  <div v-if="filminfo">
    <v-touch @swiperight="rightHandler()">
      <detail-header v-top :mytitle="filminfo.name"></detail-header>
      
      <div :style="{backgroundImage:'url(' + filminfo.poster + ')'}"
            style="height: 200px; background-size: cover; background-position: center;">
      </div>
      <h3>{{filminfo.name}}---{{filminfo.filmType.name}}</h3>
      
      <div>{{filminfo.category}}</div>
      
      <div>{{filminfo.premiereAt | dateFilter}}</div>
      
      <div>{{filminfo.nation}} | {{filminfo.runtime}}分钟</div>
      
      <div :class="isShow ? '' : 'synopsis'">{{filminfo.synopsis}}</div>
      <div style="text-align: center;">
        <i class="iconfont" :class="isShow ? 'icon-less' : 'icon-moreunfold'"
        @click="isShow = !isShow"></i>
      </div>
    </v-touch>  
    <h3>演职人员</h3>
    <detail-swiper :perslide="4" swiperClass="swiper-actors">
      <div class="swiper-slide" v-for="(data, index) in filminfo.actors" :key="index">
        <img :src="data.avatarAddress" />
        <div style="text-align: center;">
          <div>{{data.name}}</div>
          <div>{{data.role}}</div>
        </div>
      </div>
    </detail-swiper>
    <h3>剧照</h3>
    <detail-swiper :perslide="2" swiperClass="swiper-photos">
      <div class="swiper-slide" v-for="(data, index) in filminfo.photos" :key="index">
        <div :style="{backgroundImage:'url(' + data + ')'}"
              style="height: 100px; background-size: cover; background-position: center;"
              @click="previewHandler(index)">
        </div>
      </div>
    </detail-swiper>
  </div>
</template>

<script type="text/javascript">
// import axios from 'axios'
// import myhttp from '../util/myhttp.js'
import myhttp from '@/util/myhttp.js'    // 别名  @ => src的绝对路径
import Vue from 'vue'
import moment from 'moment'
import detailSwiper from './detail/DetailSwiper.vue'
import detailHeader from './detail/DetailHeader.vue'
import { ImagePreview } from 'vant'
import { mapMutations } from 'vuex'
import VueTouch from 'vue-touch'

Vue.use(VueTouch, { name: 'v-touch' })

Vue.filter('dateFilter', (date) => {
  return moment(date).format('YYYY-MM-DD')
})

// 定义指令
Vue.directive('top', {
  inserted(el) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 25) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  
  unbind() {
    window.onscroll = null
  }
})

export default {
  data() {
    return {
      filminfo: null,
      isShow: false
    }  
  },
  
  components: {
    detailSwiper,
    detailHeader
  },
  
  methods: {
    ...mapMutations('TabbarModule', ['tabbarShow']),
    
    rightHandler() {
      this.$router.back()
    },
    
    previewHandler(index) {
      ImagePreview({
        images: this.filminfo.photos,
        startPosition: index,
        loop: false,
        closeable: true,
        closeIconPosition: 'top-left'
      })
    }
  },
  
  mounted() {
    // console.log('利用获得的id，ajax请求后端接口', location.hash)
    // console.log('利用获得的id，ajax请求后端接口', this.$route.params.myid)
    // console.log('利用获得的id，ajax请求后端接口', this.$route.query.id)
    
    // axios({
    //   url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=3492313`,
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16281333366413511454359553","bc":"110100"}',
    //     'X-Host': 'mall.film-ticket.film.info'
    //   }
    // }).then(res => {
    //   console.log(res.data)
    // })
    
    // 隐藏下菜单栏
    this.tabbarShow(false)
    
    myhttp({
      url: `/gateway?filmId=${this.$route.params.myid}&k=3492313`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data.data.film)
      this.filminfo = res.data.data.film
    })
  },
  
  beforeDestroy() {
    // 显示下菜单栏
    this.tabbarShow(true)
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  .synopsis{
      height: 45px;
      overflow: hidden;
  }
</style>
