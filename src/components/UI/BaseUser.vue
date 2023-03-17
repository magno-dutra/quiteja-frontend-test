<template>
  <v-card class="mx-auto" max-width="400">
    <v-row no-gutters>
      <v-col cols="3">
        <v-img :src="url" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="9">
        <v-card-title class="text-h6">{{ fullName }}</v-card-title>
        <v-card-text>
          <p>Lorem Ipsum</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :to="editUserLink" color="primary" text>Visit Profile</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["id", "first-name", 'last-name', 'title', "url"],
  computed: {
    fullName(){
      const title = this.title.charAt(0).toUpperCase() + this.title.slice(1);
      return `${title} ${this.firstName} ${this.lastName}`;
    },
    editUserLink(){
      return { name: 'edit-user', params: {id: this.id}};
    }
  },
};
</script>

