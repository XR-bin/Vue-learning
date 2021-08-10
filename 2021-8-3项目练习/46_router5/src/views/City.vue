<template>
  <div>
    <van-index-bar :index-list= 'computedCityList' @change='changeHandler'>
      <div v-for="data in cityList" :key='data.type'>
        <van-index-anchor :index='data.type' />
        <van-cell :title="item.name" v-for="(item,index) in data.list" :key='index' @click="changePageHandler(item.name)" />
      </div>
    </van-index-bar>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell, Toast } from 'vant'
import myhttp from '@/util/myhttp.js'

Vue.use(IndexBar).use(Cell)
Vue.use(IndexAnchor)

export default {
  data() {
    return {
      cityList: []
    }
  },
  
  methods: {
    cityDataHandler(cities) {
      // 输入的是原始数据    输出的是目标数据
      const letterArr = []
      const newCities = []
      for (let code = 65; code < 91; code++) {
        letterArr.push(String.fromCharCode(code))
      }
      
      letterArr.forEach(letter => {
        const list = cities.filter(item => item.pinyin.charAt(0).toUpperCase() === letter)
        
        if (list.length > 0) {
          newCities.push({
            type: letter,
            list: list
          })
        }
      })
      
      return newCities
    },
    
    changeHandler(index) {
      Toast(index)
    },
    
    changePageHandler(name) {
      // this.$store.state.cityName = name      不建议这样修改$store.state的状态,应该用下面的方法集中修改
      this.$store.commit("changeCityName", name)
      
      this.$router.back()
    }
  },
  
  computed: {
    computedCityList() {
      return this.cityList.map(item => item.type)
    }
  },
  
  mounted() {
    myhttp({
      url: '/gateway?k=7182670',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.cityList = this.cityDataHandler(res.data.data.cities)
    })
  }
}
</script>

<style type="text/css">
  .van-toast--html, .van-toast--text {
    min-width: 10px;
  }
</style>
