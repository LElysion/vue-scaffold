<template>
  <div>
    <p><router-link to="/">go to count</router-link></p>
    <p>获取store中的数据</p>
    <ul>
      <li v-for="list in textlist" v-bind:key="list.id" >
        list.text: {{ list.text }} <br>
        list.id: {{ list.id }}
      </li>
    </ul>
    <textarea name="" id="" cols="30" rows="10" v-model="text.text" ></textarea><br>
    <button @click="comAddText(text)">添加到数据库中</button>
    <button @click="getText">获取数据库中的数据</button>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
  export default {
    methods: {
      ...mapMutations([
        'add', 'reduce', 'add2', 'addText', 'getText' // 注入mutations
      ]),
      ...mapActions([
        'addAction', 'reduceAction', 'getTestAtion' // 注入action
      ]),
      comAddText: function (text) {
        this.addText(text)
        this.text = {
          text: ''
        }
      }
    },
    created: function () {
      // 在created中调用Action获取数据
      this.getTestAtion()
    },
    data () {
      return {
        msg: 'Hello Vuex',
        text: {
          text: ''
        }, // 保存当前页面的文本
        count3: store.state.count3 // 获取来自store.state的状态
        // textlist: store.state.textlist // 获取来自store.state.textlist
      }
    },
    store,
    computed: {
      ...mapState([ 'count', 'count2', 'textlist' ]), // 注入store的state.count
      ...mapGetters([ 'count' ]) // 使用store的getters
    }
  }
</script>

<style scoped>
  @import url('../assets/css/main.css');
  textarea{ width: 50%; margin: 0 auto; display: block; height: 120px;
   background: #fff; border: 1px solid #ccc; resize: none;
  }
  ul li{ margin-bottom: 12px; }
</style>

