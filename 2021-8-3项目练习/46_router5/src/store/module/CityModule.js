const module = {
  namespaced: true,    // 命名空间
  
  // 定义 “全局”状态的对象
  state: {
    cityId: '110100',
    cityName: '北京'
  },
  
  // 集中修改状态，可以被监控，能及时发现谁出问题，通过devtools工具的时光旅行功能
  mutations: {
    // 这里的state参数就像事件对象一样，它自己传的，我们只需传name的参数
    changeCityName(state, name) {
      state.cityName = name
    },
    
    changeCityId(state, id) {
      state.cityId = id
    }
  },
  
  // 专门处理异步
  actions: {}
}

export default module
