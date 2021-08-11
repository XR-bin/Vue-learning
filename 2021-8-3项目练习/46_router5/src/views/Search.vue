<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="cancelHandler()"
      />
    </form>
    
    <van-list>
      <van-cell v-for="data in computedCinemaList" :key="data.cinemaId">
        <div>{{data.name}}</div>
        <div class="address">{{data.address}}</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import { Search, List, Cell } from 'vant'

Vue.use(Search).use(List).use(Cell)

export default {
  data() {
    return {
      value: ''
    }
  },
  
  computed: {
    computedCinemaList() {
      if (this.value === '') return []
      return this.$store.state.cinemaList.filter(item => item.name.toUpperCase().includes(
        this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  
  mounted() {
    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch('getCinemaList', this.$store.state.cityId)
    } else {
    
    }
  },
  
  methods: {
    cancelHandler() {
      this.$router.replace("/cinema")
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  .address{
    font-size: 12px;
    color: gray;
  }
</style>
