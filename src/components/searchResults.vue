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
      v-for="item in items"
      :key="item.title"
      dark
      outlined
      class="mb-12"
    >
      <v-img
        :src="
          ''
        "
        max-height="10%"
        max-width="15%"
      ></v-img>

      <v-list-item-content color="white">
        <v-list-item-title class="ml-8">{{ item.title }}</v-list-item-title>
      </v-list-item-content>
      <v-btn background="white">Add to queue</v-btn>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Title 1" },
      { title: "Title 3" },
      { title: "Title 4" },
      { title: "Title 2" },
      { title: "Title 5" },
      { title: "Title 6" },
      { title: "Title 7" },
      { title: "Title 8" },
      { title: "Title 9" }
    ]
  })
};
</script>

<style></style>
