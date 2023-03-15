<template>
  <base-card>
    <div v-if="loading">Carregando...</div>
    <div  v-else>
      <div class="user-box">
        <div class="profile-picture">
          <img :src="selectedUser.picture" alt="">  
        </div>
        <div class="user-data" v-if="!edit">
          <h2>{{ fullName }}</h2>
          <p>{{ userGender }}</p>
          <p>{{ selectedUser.email }}</p>
          <p>{{ userBirthday }}</p>
          <p>{{ selectedUser.phone }}</p>   
          <p>{{ selectedUser.location.street }}</p>
          <p>{{ selectedUser.location.city }}</p>
          <p>{{ selectedUser.location.state }}</p>
          <p>{{ selectedUser.location.country }}</p> 
        </div>
        <div class="user-data" v-else>
          <form class="edit-form">
            <div class="name-box">
              <select name="title" id="title" ref="selectTitle">
                <option value="mr" :selected="selectedUser.title === 'mr'">Mr</option>
                <option value="ms" :selected="selectedUser.title === 'ms'">Ms</option>
                <option value="mrs" :selected="selectedUser.title === 'mrs'">Mrs</option>
                <option value="miss" :selected="selectedUser.title === 'miss'">Miss</option>
                <option value="dr" :selected="selectedUser.title === 'dr'">Dr</option>
              </select>
              <input type="text" :value="selectedUser.firstName" placeholder="First Name" class="input-user-name" ref="inputFirstName">
              <input type="text" :value="selectedUser.lastName" placeholder="Last Name" class="input-user-name" ref="inputLastName">
            </div>
            <select id="gender" name="gender" ref="selectGender">
              <option value="male" :selected="selectedUser.gender === 'male'">Male</option>
              <option value="female" :selected="selectedUser.gender === 'female'">Female</option>
              <option value="other" :selected="selectedUser.gender === 'other'">Other</option>
            </select>
            <input type="email" :value="selectedUser.email" class="input-user-email" ref="inputEmail">
            <input type="date" :value="userBirthday" class="input-user-date" ref="inputBirthday">
            <input type="tel" :value="selectedUser.phone" ref="inputPhone">
            <input type="text" :value="selectedUser.location.street" ref="inputStreet">
            <input type="text" :value="selectedUser.location.city" ref="inputCity">
            <input type="text" :value="selectedUser.location.state" ref="inputState">
            <input type="text" :value="selectedUser.location.country" ref="inputCountry">
          </form>
        </div>
      </div>
      <div class="action-box">
        <base-button class="action-button" @click="editUser" v-if="!edit">Editar</base-button>
        <base-button class="action-button" @click="saveChanges" v-if="edit">Salvar</base-button>
        <base-button class="action-button" @click="editUser">Excluir</base-button>
      </div>
    </div>
  </base-card>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data(){
    return {
      selectedUser: null,
      loading: true,
      edit: false,
    };
  },
  computed: {
    fullName(){
      const title = this.selectedUser.title.charAt(0).toUpperCase() + this.selectedUser.title.slice(1);
      const firstName = this.selectedUser.firstName.charAt(0).toUpperCase() + this.selectedUser.firstName.slice(1);
      const lastName = this.selectedUser.lastName.charAt(0).toUpperCase() + this.selectedUser.lastName.slice(1);
      
      return `${title} ${firstName} ${lastName}`;
    },
    /* nameWithoutTitle(){
      const firstName = this.selectedUser.firstName.charAt(0).toUpperCase() + this.selectedUser.firstName.slice(1);
      const lastName = this.selectedUser.lastName.charAt(0).toUpperCase() + this.selectedUser.lastName.slice(1);
      
      return `${firstName} ${lastName}`;
    },     */
    userGender(){
      const gender = this.selectedUser.gender.charAt(0).toUpperCase() + this.selectedUser.gender.slice(1);

      return gender;
    },
    userBirthday(){
      return this.selectedUser.dateOfBirth.split("T")[0];
    },
  },
  methods: {
    editUser(){
      this.edit = true;      
    },
    saveChanges(){
      const updatedUser = {
        title: this.$refs.selectTitle.value,
        firstName: this.$refs.inputFirstName.value,
        lastName: this.$refs.inputLastName.value,
        gender: this.$refs.selectGender.value,
        email: this.$refs.inputEmail.value,
        dateOfBirth: this.$refs.inputBirthday.value,
        phone: this.$refs.inputPhone.value,
        location: {
          street: this.$refs.inputStreet.value,
          city: this.$refs.inputCity.value,
          state: this.$refs.inputState.value,
          country: this.$refs.inputCountry.value,
        }        
      };

      console.log(updatedUser);
      this.edit = false;
    },
    async getUser(){
      this.loading = true;

      const apiKey = process.env.VUE_APP_ID;
      const id = this.$route.params.id;
      // try catch
      const user = await axios.get('https://dummyapi.io/data/v1/user/' + id, {
        headers: {
          'app-id': apiKey
        }
      });
      
      this.selectedUser = await user.data;
      this.loading = false;
    }
  },
  mounted(){
    this.getUser();
  }
}
</script>

<style scoped>
.user-box{
  display: flex;
}

.profile-picture{
  flex: 1;
  border-right: 3px solid #ccc;
}

.profile-picture img{
  width: 10rem;  
}

.user-data,
.user-data{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 2;
  padding-left: 1rem;
}

.edit-form{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 2;
}

.user-data h2,
.user-data p,
.user-data input,
.user-data select {
  margin-bottom: 1rem;
  box-sizing: border-box;
}

select{
  border-bottom: 1px solid #000;
}

.user-data input {
  border-bottom: 1px solid #000;
}

.edit-form form{
  box-sizing: border-box;
  padding: 0;
}

.action-box{
  display: flex;
  justify-content: flex-end;
}

.action-button{
  margin-right: 1rem;
}

.name-box{
  display: flex;
}

#title{
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 0.5rem;
  width: 3.5rem;
}

.input-user-name{
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
}

.input-user-email,
input{
  width: 100%;
}

.input-user-date{
  width: 7rem;
}

</style>