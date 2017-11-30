import Vue from 'vue'

export default {
  addTestAction ({commit}, text) {
    var data = text
    if (data) {
      Vue.http.post('/v1/vuex/addtext', data, { emulateJSON: true }).then(function (Response) {
        console.log(Response)
        return Response.json()
      }).then(function (Response) {
        console.log(Response)
        commit('getText', Response.data.list)
      })
    } else {
      console.log('falsy data')
    }
  },
  getTestAtion ({commit}) {
    Vue.http.post('/v1/vuex/gettextlist').then(function (Response) {
      console.log(Response)
      return Response.json()
    }).then(function (Response) {
      console.log(Response)
      commit('getText', Response.data.list)
    })
  }
}
