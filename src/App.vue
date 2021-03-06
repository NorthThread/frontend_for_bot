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
    <v-navigation-drawer app clipped color="#1E1E1E">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title" style="color:white;">
            {{ server }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider light></v-divider>

      <v-list v-if="server === 'Not connected'" dense nav>
        <v-list-item v-for="item in items" :key="item.title" dark>
          <v-list-item-content color="white">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-main> </v-main>
    <v-footer app inset color="transparent" >
      <v-app-bar color="#424242" rounded inset clipped right max-width="30%">
        <v-btn
          color="grey"
          width="33%"
          @click="play(true)"
          rounded
        >
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <v-btn color="grey" width="33%" @click="play(false)" rounded>
          <v-icon>mdi-pause</v-icon>
        </v-btn>
        <v-btn color="grey" width=33% rounded>
          <v-icon>
            mdi-skip-next
          </v-icon>
        </v-btn>
        
      </v-app-bar>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    query: "",
    items: [
      { title: "Click Me 1" },
      { title: "Click Me 3" },
      { title: "Click Me 4" },
      { title: "Click Me 2" }
    ],
    server: "Not connected",
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
