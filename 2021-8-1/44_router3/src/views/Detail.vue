<template>
  <div>
    detail
  </div>
</template>

<script type="text/javascript">
export default {
  mounted() {
    // console.log('利用获得的id，ajax请求后端接口', location.hash)
    // console.log('利用获得的id，ajax请求后端接口', this.$route.params.myid)
    console.log('利用获得的id，ajax请求后端接口', this.$route.query.id)
  }
}
</script>
