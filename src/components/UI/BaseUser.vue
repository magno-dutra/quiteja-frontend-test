<template>
  <li>
    <base-card>
      <article>
        <div class="user-info">
          <img :src="url" alt="" />
          <h2>{{ fullName }}</h2>
        </div>
        <router-link :to="editUserLink">Ver mais...</router-link>
      </article>
    </base-card>
  </li>
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

<style scoped>
li{
  list-style: none;
  min-width: 40rem;
}

article {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.user-info{
  display: flex;  
  align-items: center;
}

.user-info img {
  margin-right: 1rem;
  border-radius: 50%;
}
</style>
