<template>   
  <v-container>
    <v-row class="fill-height ma-0" justify="center" v-if="isLoading">
      <v-col cols="auto">
        <v-progress-circular      
          indeterminate
          color="blue"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-for="user in users" :key="user.id" cols="12" sm="6" md="4">
        <base-user
        :id="user.id"
        :title="user.title"
        :first-name="user.firstName"
        :last-name="user.lastName"
        :url="user.picture"
      >
      </base-user>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseUser from "@/components/UI/BaseUser.vue";

export default {
  components: {
    BaseUser,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    users(){
      return this.$store.getters["userModule/allUsers"];
    }
  },
  methods: {
    async fetchUsers(){
      this.isLoading = true;
      await this.$store.dispatch("userModule/fetchUsers");
      this.isLoading = false;
    }
  },
  created() {
    this.fetchUsers();
  },
};
</script>


