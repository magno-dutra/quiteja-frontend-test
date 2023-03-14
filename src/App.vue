<template>  
  <div id="app">
    <the-heading></the-heading>
    <router-view/>
  </div>
</template>

<script>
import TheHeading from '@/components/layout/TheHeading.vue';

export default {
  components: {
    TheHeading,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
