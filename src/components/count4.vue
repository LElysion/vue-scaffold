<template>
  <div>
    <p>now in count4</p>
    <p>下方的链接将跳转到/count2/vue-router中</p>
    <p><router-link to="/count2/vue-router">go to count2</router-link></p>
    <p>返回该组件中的msg数据：{{ msg }}</p>
    <p>返回来自store.state.count：{{ count }}</p>
    <p>返回来自store.state.count2：{{ count2 }}</p>
    <p>返回来自store.state.count3：{{ count3 }}</p>
    <p>
      调用同步mutations中的add方法， 同时传入参数10：<button @click="add(10)">+</button><br>
      <!-- 同步mutations使用 -->
      调用同步mutations中的reduce方法， 该方法不传入参数：<button @click="reduce">-</button>
    </p>
    <p>
      调用异步actions中的addAction方法，该方法不传入参数：<button @click="addAction">+</button><br>
      <!-- 异步action使用 -->
      调用异步actions中的reduceAction方法，该方法不传入参数：<button @click="reduceAction">-</button>
    </p>
    <p>
      调用同步mutations中的add2方法，该方法不传入参数：<button @click="add2">+</button><br>
      调用异步actions中的reduceAction方法，该方法不传入参数：<button @click="reduceAction">-</button>
    </p>
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
