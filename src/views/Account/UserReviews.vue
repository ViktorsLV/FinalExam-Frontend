<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>User Reviews</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>
        <v-col cols="12" class="pt-0">
          <ReviewList v-if="reviews.length" :reviews="reviews"/>
          <div v-else align="center" class="mt-10">
            <img src="../../../public/img/no-reviews.png" alt="svg" width="50%" />
            <h3 class="mt-4 secondary--text">Sorry, there are no reviews yet!</h3>
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import ReviewList from "@/components/Account/ReviewList.vue";

export default {
  name: "Reviews",
  components: {
    TheLoader,
    ReviewList,
  },
  data() {
    return {
      loading: true,
    };
  },
  async mounted() {
    const id = this.$route.params.id
    await this.$store.dispatch('getUsersReviews', id)
    this.loading = false;
  },
  computed: {
    reviews() {
      return this.$store.state.Review.usersReviews 
    }
  },
};
</script>

<style scoped lang="css">
</style>