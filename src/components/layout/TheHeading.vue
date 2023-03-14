<template>
  <header>
    <div class="logo">      
      <img src="../../assets/logo.png" alt="logo quitejá">
      <h1>Teste QuiteJá</h1>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
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
</style>