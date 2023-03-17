import axios from 'axios';

const headers = {
  'app-id': process.env.VUE_APP_ID
}

export default{
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    allUsers(state){
      return state.users;
    },
  },
  mutations: {
    loadUsers(state, payload){
      state.users = payload;
    }
  },
  actions: {
    async fetchUsers(context, payload = 0){
      
      // try catch
      const users = await axios.get('https://dummyapi.io/data/v1/user', {
        headers,
        params: {
          page: payload || payload.page,
          limit: '12',
        },
        
      });

      context.commit('loadUsers', users.data.data);
    },
  },
}