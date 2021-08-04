<template>
  <div id="nowplaying">
    nowplaying
    <ul>
      <li v-for="data in datalist" :key="data.id" @click="clickHandler(data.id)">
        {{data.title}}
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
// ES6 导出模块
export default {
  data() {
    return {
      datalist: [
        {
          id: 111,
          title: '夺冠'
        },

        {
          id: 222,
          title: '姜子牙'
        },

        {
          id: 333,
          title: '花木兰'
        }
      ]
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
      // this.$router.push({
      //   name: 'kerwinDetail',
      //   params: {
      //     myid: id
      //   }
      // })
      
      // 3、query方式跳转详情
      this.$router.push(`/detail?id=${id}`)
    }
  }
}
</script>
