import myhttp from '@/util/myhttp'

const module = {
  namespaced: true,    // 命名空间
  
  // 定义 “全局”状态的对象
  state: {
    cinemaList: []
  },
  
  // 集中修改状态，可以被监控，能及时发现谁出问题，通过devtools工具的时光旅行功能
  mutations: {
    setCinemaList(state, cinemaList) {
      state.cinemaList = cinemaList
    },
    
    clearCinemaList(state) {
      state.cinemaList = []
    }
  },
  
  // 专门处理异步
  actions: {
    getCinemaList(store, id) {
      return myhttp({
        url: `/gateway?cityId=${id}&ticketFlag=1&k=3502487`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        store.commit('setCinemaList', res.data.data.cinemas)
      })
    }
  }
}

export default module
