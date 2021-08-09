<template>
  <div id="nowplaying">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
      @load="onLoad"
      :immediate-check = "false"
    >
      <van-cell v-for="data in datalist" :key="data.filmId" @click="clickHandler(data.filmId)">
        <img :src="data.poster" />
        <h3>{{data.name}}</h3>
        <p style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          主演：{{data.actors | actorFilter}}
        </p>
        <p>{{data.nation}} | {{data.runtime}}分钟</p>
      </van-cell>
    </van-list>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import myhttp from '@/util/myhttp.js'    // 别名  @ => src的绝对路径
import Vue from 'vue'
import { List, Cell } from 'vant'

Vue.use(List).use(Cell)   // 全局注册

// vue过滤器
Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演' 
  return actors.map(item => item.name).join(' ')
})

// ES6 导出模块
export default {
  data() {
    return {
      datalist: [],
      loading: false,  // 是否正在加载中
      finished: false, // 是否已结束
      current: 1,    // 记录第几页
      total: 0       // 能加载的总数据长度
    }
  },

  methods: {
    onLoad() {
      // 1、axios请求新页面的数据
      // 2、合并新数据到老数据
      // 3、this.loading = false
      if (this.datalist.length === this.total) {
        this.finished = true
        return
      }
      
      this.current++
      myhttp({
        url: `/gateway?cityId=110100&pageNum=${this.current}&pageSize=10&type=1&k=6033802`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    },
    
    clickHandler(id) {
      // 编程导航的一种方法，但我们一般不这样弄，而是用下面的另一种方法
      // location.href = "#/center"

      // 另一种编程导航方式
      // 1、路径方式
      // this.$router.push('/detail')
      // this.$router.push(`/detail/${id}`)

      // 2、路由名字的方式
      this.$router.push({
        name: 'kerwinDetail',
        params: {
          myid: id
        }
      })

      // 3、query方式跳转详情
      // this.$router.push(`/detail?id=${id}`)
    }
  },

  mounted() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6033802',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16281333366413511454359553","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
      // method: "get"     //不写默认是get
    }).then(res => {
      // console.log(res.data.data.films)
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    })
  }
}
</script>

<style type="text/css" lang="scss" scoped>
    .van-list{
      overflow: hidden;
      padding: 10px;
      img{
        float: left;
        width: 100px;  
      }
    }
</style>
