<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {  },
    data () {
      return {}
    }
  }
</script>

<style scoped>
  #app {
    color: #b22;
  }
</style>
