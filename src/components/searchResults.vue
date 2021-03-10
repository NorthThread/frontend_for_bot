<template>
  <v-list outlined dark dense nav app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title" style="color:white;">
          Search Results
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-list-item
      v-for="song in this.  $store.state.searchList.songs"
      :key="song.videoId"
      dark
      outlined
      class="mb-12"
    >
      <v-img
        :src="song.thumbnails.url"
        max-height="10%"
        max-width="15%"
      ></v-img>

      <v-list-item-content color="white">
        <v-list-item-title class="ml-8">{{ song.name }}</v-list-item-title>
      </v-list-item-content>
      <v-btn background-color="white">Add to queue</v-btn>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      result: this.$store.state.searchList
    };
  },
  methods: {
    ...mapGetters(["getSearchList"])
  }
};
</script>

<style></style>
