<template>
  <v-app>    
    <the-heading></the-heading>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheHeading from './components/layout/TheHeading.vue';

export default {
  name: 'App',
  components: {
    TheHeading,
  },

  data: () => ({
    //
  }),
};
</script>
