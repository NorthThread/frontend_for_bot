<template>
  <v-footer app inset color="transparent">
    <v-app-bar color="#424242" rounded inset clipped right width="30%">
      <v-btn color="grey" width="33%" @click="play(true)" rounded>
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn color="grey" width="33%" @click="play(false)" rounded>
        <v-icon>mdi-pause</v-icon>
      </v-btn>
      <v-btn color="grey" width="33%" rounded>
        <v-icon>
          mdi-skip-next
        </v-icon>
      </v-btn>
    </v-app-bar>
  </v-footer>
</template>

<script>
export default {};
</script>
