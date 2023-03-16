<template>
  <form @submit.prevent="createUser">
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <input type="email" v-model="email">  
    <button>Criar</button> 
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      firstName: '',
      lastName: '',
      email: '',
    };
  },
  methods: {
    async createUser(){
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      }

      const apiKey = process.env.VUE_APP_ID;

      await axios.post('https://dummyapi.io/data/v1/user/create', newUser, {
        headers: {
          'app-id': apiKey,          
        }
      });

      this.$router.push('/usuarios');

    }
  },
}
</script>