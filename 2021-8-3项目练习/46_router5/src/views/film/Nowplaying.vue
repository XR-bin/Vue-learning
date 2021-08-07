<template>
  <div id="nowplaying">
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="clickHandler(data.filmId)">
        <img :src="data.poster" />
        <h3>{{data.name}}</h3>
        <p style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          主演：{{data.actors | actorFilter}}
        </p>
        <p>{{data.nation}} | {{data.runtime}}分钟</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import Vue from 'vue'

// vue过滤器
Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演' 
  return actors.map(item => item.name).join(' ')
})

// ES6 导出模块
export default {
  data() {
    return {
      datalist: []
    }
  },

  methods: {
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
    })
  }
}
</script>

<style type="text/css" lang="scss" scoped>
    li{
      overflow: hidden;
      padding: 10px;
      img{
        float: left;
        width: 100px;  
      }
    }
</style>
