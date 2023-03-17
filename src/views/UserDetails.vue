<template>
  <div>    
    <v-container>
      <v-card loading v-if="loading">
        <v-skeleton-loader
        type="article, actions"
          ></v-skeleton-loader>
      </v-card>
      <v-card class="d-flex" v-else>
        <v-flex shrink>
          <v-img :src="selectedUser.picture" contain class="mt-6 ml-2 rounded-circle"></v-img>
        </v-flex>
        <section class="d-flex flex-column">
          <v-card-title>{{ fullName }}</v-card-title>
          <v-card-text>
            <p>Gender: {{ userGender }}</p>
            <p>Email: {{ selectedUser.email }}</p>
            <p>Date of Birth: {{ userBirthday }}</p>
            <p>Phone Number: {{ selectedUser.phone }}</p>
            <p>Address: {{ selectedUser.location.street }}, {{ selectedUser.location.city }}, {{ selectedUser.location.state }}, {{ selectedUser.location.country }}</p>
          </v-card-text>
        </section>
        <v-spacer></v-spacer>
        <v-card-actions>      
          <v-btn text @click="toggleEdit">Edit</v-btn>
          <v-btn text @click="toggleDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

    <form-dialog v-if="edit" :user="selectedUser" @close-dialog="toggleEdit" @save-changes="saveChanges"></form-dialog>

    <v-dialog v-model="confirmDelete" persistent max-width="500px">
    <v-card class="pa-6">
      <v-card-text class=" d-flex justify-center">
        <div class="text-body-1">
          {{ dialogText }}
        </div>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn @click="toggleDelete">
          Cancel
        </v-btn>
        <v-btn @click="deleteUser">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import FormDialog from '../components/UI/FormDialog.vue';

export default {
  components: {
    FormDialog,
  },
  props: ['id'],
  data(){
    return {
      selectedUser: null,
      loading: true,
      edit: false,
      confirmDelete: false,
      dialogText: 'Do you want to delete this user?'
    };
  },
  computed: {
    fullName(){
      const title = this.selectedUser.title.charAt(0).toUpperCase() + this.selectedUser.title.slice(1);
      const firstName = this.selectedUser.firstName.charAt(0).toUpperCase() + this.selectedUser.firstName.slice(1);
      const lastName = this.selectedUser.lastName.charAt(0).toUpperCase() + this.selectedUser.lastName.slice(1);
      
      return `${title} ${firstName} ${lastName}`;
    },
    userGender(){
      const gender = this.selectedUser.gender.charAt(0).toUpperCase() + this.selectedUser.gender.slice(1);

      return gender;
    },
    userBirthday(){
      return this.selectedUser.dateOfBirth.split("T")[0];
    },
  },
  methods: {
    toggleEdit(){
      this.edit = !this.edit;      
    },
    toggleDelete(){
      this.confirmDelete = !this.confirmDelete;
    },
    async deleteUser(){
      const apiKey = process.env.VUE_APP_ID;

      await axios.delete('https://dummyapi.io/data/v1/user/' + this.id, {
        headers: {
          'app-id': apiKey,          
        }
      });

      this.$router.push('/usuarios');
    },
    async saveChanges(user){          
      const apiKey = process.env.VUE_APP_ID;
      const id = this.$route.params.id;

      console.log(user);

      await axios.put('https://dummyapi.io/data/v1/user/' + id, user, {
        headers: {
          'app-id': apiKey,          
        }
      });

      this.getUser();

      this.edit = false;
    },
    async getUser(){
      this.loading = true;      
      const id = this.$route.params.id;
      const apiKey = process.env.VUE_APP_ID;

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