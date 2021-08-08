<template>
  <div>
    <ul>
      <li v-for="data in cinemaList" :key="data.cinemaId">
        <div>{{data.name}}</div>
        <div class="address">{{data.address}}</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import myhttp from '@/util/myhttp'

export default {
  data() {
    return {
      cinemaList: []
    }
  },
  
  mounted() {
    myhttp({
      url: "/gateway?cityId=110100&ticketFlag=1&k=3502487",
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cinemaList = res.data.data.cinemas
    })
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  li{
    padding: 5px;
    .address{
      font-size: 12px;
      color: gray;
    }
  }
</style>
