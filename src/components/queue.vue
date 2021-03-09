<template>
  <v-navigation-drawer app clipped color="#1E1E1E">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title" style="color:white;">
          {{ server }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list v-if="server != 'Not connected'" dense nav>
      <v-list-item v-for="item in items" :key="item.title" dark>
        <v-list-item-content color="white">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Click Me 1" },
      { title: "Click Me 3" },
      { title: "Click Me 4" },
      { title: "Click Me 2" }
    ],
    server: "Not connected"
  })
};
</script>
