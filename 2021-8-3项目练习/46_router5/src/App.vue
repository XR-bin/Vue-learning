<template>
  <div>
    <tabbar></tabbar>
    <!--
      路由容器 ： router-view
      这个路由容器其实就类似一个插槽slot，专门留给路由显示的的地方
    -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<!--
  组件必须  引用  +  注册  才能使用
-->

<script>
import tabbar from './components/Tabbar'

// ES6 导出模块
export default {
  data() {
    return {

    }
  },

  components: {
    tabbar
  },

  mounted() {
    // 1- 后端配置好 cors   允许任何跨域的情况下,可以直接拿数据
    // axios.get("http://www.mei.com/appapi/home/mktBannerApp/v3?siol_id=2013000100000000008&platform_code=PLATEFORM_H5").then(
    //   res => {
    //     console.log(res.data)
    //   })

    // 2-maoyan.com   别人不允许跨域访问的情况下，我们需要通过 反向代理 的方式去访问----通过我们的服务器去请求信息
    // axios.get("/ajax/movieOnInfoList?token=&optimus_uuid=A56D8830F66911EBA425CFF8F161357066025D44E0874C4EA5E4EC182D56F2F7&optimus_risk_level=71&optimus_code=10").then(
    //   res => {
    //     console.log(res.data)
    //   })

    // 3- miazuo.com
    // axios({
    //   url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6033802',
    //   headers: {
    //     "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16281333366413511454359553","bc":"110100"}',
    //     "X-Host": 'mall.film-ticket.film.list'
    //   }
    //   // method: "get"     //不写默认是get
    // }).then(res => {
    //   console.log(res.data)
    // })
  }
}
</script>

<style type="text/css">
  *{margin: 0; padding: 0;}
  li{list-style: none;}
  div{font-size: 16px;}
  section{margin-bottom: 50px;}
</style>
