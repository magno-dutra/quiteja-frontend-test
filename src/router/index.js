import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue';
import UserDetails from '../views/UserDetails.vue';
import CreateUser from '../views/CreateUser.vue';
import TesteMagno from '../views/TesteMagno.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    /* redirect: '/home', */
    component: TesteMagno
  },
  {
    path: '/home',
    component: HomeView
  },
  {
    name: 'users',
    path: '/usuarios',
    component: UserList
  },  
  {
    name: 'create-user',
    path: '/usuarios/create',
    component: CreateUser,
  }, 
  {
    name: 'edit-user',
    path: '/usuarios/:id',
    props: true,
    component: UserDetails,
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
