<template>
  <div class="text-center">
    <v-bottom-sheet v-model="cameraSheet" inset fullscreen>
      <v-sheet class="text-left" height="100vh">
        <v-img src="../../../public/img/camera.png" alt="Camera" height="100vh">
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
          <router-link :to="{ name: 'Receipt', params: { id: post.id } }">
              <v-icon size="90" class="primary--text camera" @click="completeDelivery()">mdi-camera</v-icon>
            </router-link>
        </v-img>
        <!-- <v-sheet class="primary" height="30vh">
          <div class="pt-5" align="center">
            <router-link :to="{ name: 'Receipt', params: { id: post.id } }">
              <v-icon x-large class="white--text" @click="completeDelivery()">mdi-camera</v-icon>
            </router-link>
          </div>
        </v-sheet> -->
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
      postId: "",
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  // mounted () {
  //   console.log();
  // },
  created () {
    this.postId = this.$route.params.id;
  },
  methods: {
    changeState(opened) {
      if (opened == true) this.cameraSheet = opened;
    },
    async completeDelivery() {
      try {
        await this.$store.dispatch("changeBookingState", {
          id: this.post.booking.id,
          status: 'finished',
        });
        await this.$store.dispatch("changePostState", {
          postId: this.postId,
          status: 'finished',
        });
        // this.$router.push({ name: 'Receipt', params: { id: this.post.id } })
        // this.$router.push('/tasks/my-deliveries')
      } catch (error) {
        console.log(error)
      }
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

.camera {
  position: absolute;
  top: 50%;
  left: 35%;
  background-color: rgba(255, 255, 255, 0.652);
  border-radius: 50%;
  padding: 5%;
}
</style>