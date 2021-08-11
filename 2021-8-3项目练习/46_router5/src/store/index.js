import Vue from 'vue'
import Vuex from 'vuex'
import myhttp from '@/util/myhttp'

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义 “全局”状态的对象
  state: {
    cityId: '110100',
    cityName: '北京',
    isTabbarShow: true,
    
    cinemaList: []
  },
  
  // 集中修改状态，可以被监控，能及时发现谁出问题，通过devtools工具的时光旅行功能
  mutations: {
    // 这里的state参数就像事件对象一样，它自己传的，我们只需传name的参数
    changeCityName(state, name) {
      state.cityName = name
    },
    
    changeCityId(state, id) {
      state.cityId = id
    },
    
    tabbarShow(state, is) {
      state.isTabbarShow = is
    },
    
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
})
