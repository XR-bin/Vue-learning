<template>
  <div>
    {{filminfo.name}}
  </div>
</template>

<script type="text/javascript">
// import axios from 'axios'
// import myhttp from '../util/myhttp.js'
import myhttp from '@/util/myhttp.js'    // 别名  @ => src的绝对路径

export default {
  data() {
    return {
      filminfo: null
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
    
    myhttp({
      url: `/gateway?filmId=${this.$route.params.myid}&k=3492313`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data.data.film)
      this.filminfo = res.data.data.film
    })
  }
}
</script>
