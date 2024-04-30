// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    auth: {
      isAuthenticated: false,
      user: null
    }
  },
  mutations: {
    login(state, user) {
      state.auth.isAuthenticated = true;
      state.auth.user = user;
    },
    logout(state) {
      state.auth.isAuthenticated = false;
      state.auth.user = null;
    }
  },
  actions: {
    // Actions to handle login and logout
  }
});

export default store;
