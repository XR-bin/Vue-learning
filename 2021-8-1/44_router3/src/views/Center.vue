<template>
  <div>
    Center
  </div>
</template>

<script type="text/javascript">
export default {
  // 局部路由守卫(局部路由拦截)
  // beforeRouteEnter(to, from, next) {
  //   if (!localStorage.getItem("token")) {
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // },

  mounted() {
    // 检查本地内存localStrorage中是否存在token，如果没有，则定向到login
    // if (!localStorage.getItem("token")) {
    //   this.$router.push('/login')
    // }
  }
}
</script>
