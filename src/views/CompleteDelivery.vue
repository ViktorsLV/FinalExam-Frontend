<template>
  <div class="container pb-15">
    <TheLoader v-if="loading" />
    <section v-else class="pb-15">
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="background-image">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Post</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>
        <v-col cols="12" class="pt-0">
          <BookedPost
            class="mb-4"
            :post="singlePost"
          />
        </v-col>
        <v-col cols="12">
        <TheButton :text="'scan receipt'" class="mb-3" @click="openCameraSheet()"/>
        </v-col>
      </v-row>
      <CameraSheet ref="cameraSheet" :post="singlePost"/>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import TheButton from "@/components/app/TheButton.vue";
import BookedPost from "@/components/Post/BookedPost.vue";
import CameraSheet from '@/components/Booking/CameraSheet.vue';

export default {
  name: "PostDetails",
  components: {
    TheLoader,
    TheButton,
    BookedPost,
    CameraSheet
  },
  data() {
    return {
      loading: true,
    };
  },
  async created() {
    const id = this.$route.params.id;
    await this.$store.dispatch("getSinglePost", id);
  },
  computed: {
    singlePost() {
      return this.$store.getters.singlePost;
    },
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    openCameraSheet() {
      this.$refs.cameraSheet.changeState(true);
    },
  },
};
</script>

<style scoped lang="css">
</style>