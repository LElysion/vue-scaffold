<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <p>从历史记录中前进一步</p>
    <p><a href="javascript:;" @click="goforward">goforward</a></p>
    <p>从历史记录中后退一步</p>
    <p><a href="javascript:;" @click="backforward">backforward</a></p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goforward: function () {
      this.$router.go(1)
    },
    backforward: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
