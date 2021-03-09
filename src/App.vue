<template>
  <v-app v-if="loggedIn != true">
    <v-app-bar app clipped-left clipped-right flat height="50" color="#1E1E1E">
      <img
        src="https://cdn.discordapp.com/avatars/676575206214729748/e2611ef8ccb335797de86727d095d15e.png?size=256"
        style=" width: 100%;max-width: 45px;height:auto;margin-right:1%;border-radius:75%;"
      />
      <h1 style="color:cyan;">Sona</h1>

      <v-spacer></v-spacer>
      <!-- Navbar with searchbar -->
      <v-responsive max-width="400">
        <v-text-field
          class="changeColor"
          style="padding-top:5%"
          v-model="query"
          dense
          background-color="white"
          color="black"
          rounded
          placeholder="Search"
          @keydown.enter="test(query)"
        >
        </v-text-field>
      </v-responsive>
    </v-app-bar>
    <queue> </queue>
    <controls> </controls>

    <v-main style="background:#1E1E1E">
      <searchResults> </searchResults>
    </v-main>
  </v-app>
</template>

<script>
import queue from "./components/queue";
import controls from "./components/controls";
import searchResults from "./components/searchResults";

export default {
  name: "App",

  components: { queue, controls, searchResults },

  data: () => ({
    query: "",
    loggedIn: false
    //
  }),
  methods: {
    test() {
      alert("Hey");
    }
  }
};
</script>

<style>
.changeColor {
  color: black;
  opacity: 1;
}
</style>
