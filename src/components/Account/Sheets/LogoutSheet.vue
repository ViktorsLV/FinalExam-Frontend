<template>
  <v-overlay :absolute="absolute" :value="logoutSheet" :z-index="zIndex">
    <div class="bottom">
      <v-card
        rounded="xl"
        width="90vw"
        class="white red--text font-weight-medium"
      >
        <v-card-title @click="logout" class="center-text">
          Log out
        </v-card-title>
      </v-card>
      <v-card
        rounded="xl"
        width="90vw"
        class="white secondary--text mt-2 font-weight-medium"
      >
        <v-card-title @click="logoutSheet = false" class="center-text">
          Cancel
        </v-card-title>
      </v-card>
    </div>
  </v-overlay>
</template>

<script>
export default {
  data() {
    return {
      logoutSheet: false,
      absolute: false,
      zIndex: 100,
    };
  },
  methods: {
    changeState(opened) {
      if (opened == true) this.logoutSheet = opened;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="css">
.bottom {
  margin-top: 75vh;
}

.center-text {
  margin-left: 35%;
}
</style>