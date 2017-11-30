export default {
  addAction (context) { // 传入上下文对象， 即store本身
    context.commit('add', 10)
  },
  getTestAtion ({commit}) {
    commit('getText')
  },
  reduceAction ({commit}) { // 直接传入commit对象
    commit('reduce')
  }
}
