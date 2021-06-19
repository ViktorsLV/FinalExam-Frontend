<template>
  <v-app>
    <v-main>
      <v-row v-if="$vuetify.breakpoint.width > 769" class="text-center">
        <v-col>
          <h1 class="margin">
            The application is supported only for smaller screen sizes.
          </h1>
          <h2 class="mt-3">
            Resize your browsers viewport width or change the device, e.g.,
            Iphone 7, 8+ / Pixel 2 XL!
          </h2>
        </v-col>
      </v-row>
      <component v-else :is="layout">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </component>
    </v-main>

    <v-snackbar
      v-model="snackbar.showing"
      :timeout="3200"
      :color="snackbar.color"
      max-width="max-content"
      top
    >
  <v-icon class="white--text">mdi-check-circle-outline</v-icon>
       {{ snackbar.text }}
    </v-snackbar>
  </v-app>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    EmptyLayout,
    MainLayout,
  },
  data() {
    return {
      window: window.innerWidth,
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
    ...mapState(["snackbar"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,200&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

a {
  text-decoration: none;
}
.margin {
  margin-top: 40vh;
}

.card-margin {
  margin-top: 15vh;
}

.container {
  height: 100vh;
}

.background-image {
  background-image: url(../public/img/background.png);
  background-position: center;
}

</style>
