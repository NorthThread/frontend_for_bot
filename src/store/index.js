import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import createPersistedState from "vuex-persistedstate";

axios.defaults.withCredentials = true;

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    searchList: {
      search: "",
      songs: []
    }
  },
  getters: {
    getSearchList: state => {
      return state.searchList;
    }
  },
  mutations: {
    setSearchList: (state, status) => {
      state.searchList = status;
    }
  },
  actions: {
    async searchSongs({ commit }, query) {
      console.log(query)
      await axios
        .get(`http://localhost:3000/api/yt/search/${query}`)
        .then(response => {
          console.log(response)
          commit("setSearchList", {
            search: query,
            songs: response.data.content
          });
        });
    }
  }
});
