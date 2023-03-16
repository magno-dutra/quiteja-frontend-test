<template>
  <main>
    <base-button link :to="'/usuarios/create'">Criar Usuário</base-button>
    <ul>
      <base-user
        v-for="user in allUsers"
        :key="user.id"
        :id="user.id"
        :title="user.title"
        :first-name="user.firstName"
        :last-name="user.lastName"
        :url="user.picture"
      >
      </base-user>
    </ul>
  </main>
</template>

<script>
import BaseUser from "@/components/UI/BaseUser.vue";

export default {
  components: {
    BaseUser,
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    allUsers(){
      if(this.users.length !== this.$store.getters["userModule/usersLength"]){
        this.fetchUsers();
      }
      return this.users;
    }
  },
  methods: {
    fetchUsers(){
      this.$store.dispatch("userModule/fetchUsers");
      this.users = this.$store.getters["userModule/allUsers"];
    }
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
