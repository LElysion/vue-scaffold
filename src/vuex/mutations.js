import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource) // 使用vue-resource
Vue.http.options.emulateJSON = true
export default {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count -= 1
  },
  add2 (state) {
    state.count2 += 1
  },
  addText (state, text) {
    var data = text
    if (data) {
      Vue.http.post('/v1/vuex/addtext', data, { emulateJSON: true }).then(function (Response) {
        console.log(Response)
        return Response.json()
      }).then(function (Response) {
        console.log(Response)
        state.textlist = Response.data.list
      })
    } else {
      console.log('falsy data')
    }
    console.log(state)
  },
  getText (state) {
    Vue.http.post('/v1/vuex/gettextlist').then(function (Response) {
      console.log(Response)
      return Response.json()
    }).then(function (Response) {
      console.log(Response)
      state.textlist = Response.data.list
      console.log(state)
    })
  }
}
