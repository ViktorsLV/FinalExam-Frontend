<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="background-image">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Book Pick-up</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>
        <v-col cols="12" class="pt-0 mt-5">
          <DetailsCard :post="singlePost" />
        </v-col>
        <v-col cols="12" class="pt-0 mt-5">
          <PointsCard />
        </v-col>
        <v-col cols="12" class="pt-0 mt-5 mb-15">
          <MessageCard />
          <TheButton :text="'complete'" class="mb-10"/>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import DetailsCard from "@/components/Booking/DetailsCard.vue";
import PointsCard from "@/components/Booking/PointsCard.vue";
import MessageCard from "@/components/Booking/MessageCard.vue";
import TheButton from "@/components/app/TheButton.vue";

export default {
  name: "PostDetails",
  components: {
    TheLoader,
    DetailsCard,
    PointsCard,
    MessageCard,
    TheButton
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
    // user() {
    //   return this.$store.getters.singlePost.author;
    // },
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>