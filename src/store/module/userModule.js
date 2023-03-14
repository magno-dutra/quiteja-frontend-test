import axios from 'axios';

export default{
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    allUsers(state){
      return state.users;
    },
    usersLength(state){
      return state.users.length;
    }
  },
  mutations: {
    loadUsers(state, payload){
      state.users = payload;
    }
  },
  actions: {
    async fetchUsers(context){
      const apiKey = process.env.VUE_APP_ID;
      
      // try catch
      const users = await axios.get('https://dummyapi.io/data/v1/user', {
        headers: {
          'app-id': apiKey
        }
      });

      context.commit('loadUsers', users.data.data);
    }
  },
}