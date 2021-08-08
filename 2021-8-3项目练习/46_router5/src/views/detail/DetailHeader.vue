<template>
  <div>
    {{mytitle}}
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    mytitle: {
      type: String,
      default: ""
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  div{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: white;
  }
</style>
