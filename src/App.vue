<template>
  <v-app>
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
    <v-navigation-drawer app clipped dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Servers
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer clipped app dark right>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Queue
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main> </v-main>
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
    ]
    //
  }),
  methods: {
    test() {
      alert("Hey");
    }
  }
};
</script>
