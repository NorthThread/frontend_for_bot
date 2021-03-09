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

    setSearchList: (state ,status) => {
      state.searchList = status
  },
  },
  actions: {
    async searchSong({ commit }, query) {
      await axios.get(`http://localhost:3000/api/yt/songs/${query}`)
          .then(response => {
             commit('setSearchList', { search: query, songs: response.data.content})
          })
  }
  }
});
