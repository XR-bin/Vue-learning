<template>
  <div>
    <van-nav-bar
      title="影院"
      @click-left="leftHandler()"
      @click-right="rightHandler()"
    >
      <template #left>
        <span style="font-size: 18px;">{{ cityName }}</span>
        <van-icon name="arrow-down" color="black" />
      </template>
      <template #right>
        <van-icon name="search" size="24" color="black" />
      </template>
    </van-nav-bar>
    
    <div class="cinema" :style="{height: height}">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div>{{data.name}}</div>
          <div class="address">{{data.address}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { NavBar, Icon } from 'vant'
import { mapState, mapMutations, mapActions } from 'vuex'

Vue.use(NavBar).use(Icon)   // 全局注册组件NavBar

export default {
  data() {
    return {
      height: 0
    }
  },
  
  computed: {
    ...mapState('CityModule', ['cityId', 'cityName']),
    ...mapState('CinemaModule', ['cinemaList'])
  },
  
  methods: {
    ...mapMutations('CinemaModule', ['clearCinemaList']),
    ...mapActions('CinemaModule', ['getCinemaList']),
    
    leftHandler() {
      this.clearCinemaList()
      this.$router.push('/city')
    },
    
    rightHandler() {
      this.$router.push('/cinema/search')
    }
  },
  
  mounted() {
    this.height = document.documentElement.clientHeight - 100 + 'px'
    
    if (this.cinemaList.length === 0) {
      this.getCinemaList(this.cityId).then(res => {
        // 状态立即更改，但是dom异步渲染
        // $nextTick作用：在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。
        this.$nextTick(() => {
          new BetterScroll('.cinema', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
      // 状态立即更改，但是dom异步渲染
      // $nextTick作用：在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。
      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  li{
    padding: 5px;
    .address{
      font-size: 12px;
      color: gray;
    }
  }
  
  .cinema{
    overflow: hidden;
    position: relative;
  }
</style>
