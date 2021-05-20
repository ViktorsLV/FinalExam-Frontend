<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
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
          <Post
            class="mb-4"
            :showArrow="false"
            :showProfile="false"
            v-bind:post="singlePost"
          />
        </v-col>
        <v-col cols="12" class="mt-2">
          <h1>User</h1>
          <UserCardSmall v-bind:user="user" />
          <v-btn class="primary white--text mt-2" width="100%" rounded large>CONTACT USER</v-btn>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import Post from "@/components/Post.vue";
import UserCardSmall from "@/components/User/UserCardSmall.vue";

export default {
  name: "PostDetails",
  components: {
    TheLoader,
    Post,
    UserCardSmall,
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
    user() {
      return this.$store.getters.singlePost.users_permissions_user;
    },
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>