import router from '@/router';

<template>
<!--   <v-card
  class="mx-auto overflow-hidden"
  height="100%"
  width="100%"
  > -->

    <v-app-bar app fixed>
      <header class="my-header">
        <div class="logo">
          <router-link to="/">
            <v-img src="../../assets/logo.png" max-width="70"></v-img>
            <v-app-bar-title >QuiteJá</v-app-bar-title>
          </router-link>
        </div>
        <nav>
          <!-- <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>           -->
          <v-btn to="/">
            <v-icon>mdi-home</v-icon>
            Home
          </v-btn>
          <v-btn to="/usuarios">
            <v-icon>mdi-account</v-icon>
            Users
          </v-btn>
        </nav>
      </header>
    </v-app-bar>

    <!-- <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/usuarios">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card> -->
</template>

<script setup>
/* import { ref } from 'vue';

const drawer = ref(false); */

/* function toggleDrawer(){
  drawer.value = !drawer.value;
} */
</script>

<style scoped>
.my-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.my-header a {
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  font-weight: bold;
  color: #015f6a;
}

.user-link {
  border: 1px solid #015f6a;
  border-radius: 12px;
  padding: 0 2rem;
}

nav {
  display: flex;
  align-items: center;
}

nav > * {
  margin-left: 1rem;
}
</style>

<!-- <template>
  <header>
    <div class="logo">      
      <img src="../../assets/logo.png" alt="logo quitejá">
      <h1>Teste QuiteJá</h1>
    </div>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/usuarios">Usuários</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped>
header{
  background-color: rgb(92, 43, 226);
  color: white;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
}

.logo{
  display: flex;
  align-items: center;
}

.logo img{
  max-height: 5rem;
}

nav{
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  color: #fff;
  margin-left: 2rem;
  border: 1px solid #fff;
  padding: 1.25rem;
  text-decoration: none;  
}

a:active,
a.router-link-active{
  font-weight: bold;
  color: black;
}
</style> -->
