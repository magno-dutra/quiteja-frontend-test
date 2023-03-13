import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
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
  modules: {
  }
})
