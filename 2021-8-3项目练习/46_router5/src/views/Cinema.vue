<template>
  <div>
    <van-nav-bar
      title="影院"
      @click-left="leftHandler()"
    >
      <template #left>
        <span style="font-size: 18px;">{{ $store.state.cityName }}</span>
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
import myhttp from '@/util/myhttp'
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { NavBar, Icon } from 'vant'

Vue.use(NavBar).use(Icon)   // 全局注册组件NavBar

export default {
  data() {
    return {
      cinemaList: [],
      height: 0
    }
  },
  
  methods: {
    leftHandler() {
      this.$router.push('/city')
    }
  },
  
  mounted() {
    this.height = document.documentElement.clientHeight - 100 + 'px'
    myhttp({
      url: "/gateway?cityId=110100&ticketFlag=1&k=3502487",
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cinemaList = res.data.data.cinemas
      
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
