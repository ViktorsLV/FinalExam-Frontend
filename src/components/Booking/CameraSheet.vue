<template>
  <div class="text-center">
    <v-bottom-sheet v-model="cameraSheet" inset fullscreen>
      <v-sheet class="text-left" height="100vh">
        <v-img src="../../../public/img/camera.png" alt="Camera" height="90vh">
          <div align="right">
            <v-btn
              class="mt-3"
              text
              color="primary"
              @click="cameraSheet = false"
            >
              close
            </v-btn>
          </div>
        </v-img>
        <v-sheet class="primary" height="20vh">
          <div class="pt-5" align="center">
            <router-link :to="{ name: 'Receipt', params: { id: post.id } }">
              <v-icon x-large class="white--text">mdi-camera</v-icon>
            </router-link>
          </div>
        </v-sheet>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cameraSheet: false,
      absolute: false,
      zIndex: 20,
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeState(opened) {
      if (opened == true) this.cameraSheet = opened;
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