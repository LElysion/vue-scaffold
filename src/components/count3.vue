<template>
  <div style="border:1px solid #ccc;box-sizing:border-box;">
    <p>now you in count3 {{ $route.params.id }} </p>
    <p><router-link to="/">back to count</router-link></p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
  export default {
    methods: {
      ...mapMutations([
        'add', 'reduce', 'add2' // 注入mutations
      ]),
      ...mapActions([
        'addAction', 'reduceAction' // 注入action
      ])
    },
    data () {
      return {
        msg: 'Hello Vuex',
        count3: store.state.count3 // 获取来自store.state的状态
      }
    },
    store,
    computed: {
      ...mapState([ 'count', 'count2' ]), // 注入store的state.count
      ...mapGetters([ 'count' ]) // 使用store的getters
    }
  }
</script>
