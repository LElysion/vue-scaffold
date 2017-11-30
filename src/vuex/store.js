import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  count: 1,
  count2: 2,
  count3: 3,
  textlist: []
}

const getters = {
  count: function (state) {
    var count = state.count + 100
    state.count += 100
    return count
  }
  // textlist: function (state) {
  //   Vue.http.post('/v1/vuex/gettextlist').then(function (Response) {
  //     console.log(Response)
  //     return Response.json()
  //   }).then(function (Response) {
  //     console.log(Response)
  //     state.textlist = Response.data.list
  //   })
  // }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
