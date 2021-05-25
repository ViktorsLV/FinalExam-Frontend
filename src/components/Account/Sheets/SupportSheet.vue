<template>
  <v-overlay :absolute="absolute" :value="supportSheet" :z-index="zIndex">
    <div class="bottom">
      <v-card
        rounded="xl"
        width="90vw"
        class="white red--text font-weight-medium disabled"
      >
        <v-card-title>
          <v-btn plain color="black" class="mx-auto">
          Call Support
            </v-btn>
        </v-card-title>
        
        <v-card-title align="center">
            <v-btn plain color="black" class="mx-auto">
          FAQ
            </v-btn>
        </v-card-title>
      </v-card>
      <v-card
        rounded="xl"
        width="90vw"
        class="white secondary--text mt-2 font-weight-medium"
      >
        <v-card-title @click="supportSheet = false" class="center-text">
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
      supportSheet: false,
      absolute: false,
      zIndex: 20,
    };
  },
  methods: {
    changeState(opened) {
      if (opened == true) this.supportSheet = opened;
    },
  },
};
</script>

<style scoped lang="css">
.bottom {
  margin-top: 65vh;
}

.center-text {
  margin-left: 35%;
}
</style>