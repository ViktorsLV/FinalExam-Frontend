<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else class="pb-15">
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="background-image">
        <v-col cols="12" class="mt-6">
          <h1>Home</h1>
        </v-col>
        <v-col cols="12" class="pt-0">
          <Post
            class="mb-4"
            v-for="post in allPosts"
            :key="post.id"
            v-bind:post="post"
            :showDetails="false"
          />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import Post from "@/components/Post/Post.vue";
export default {
  name: "Home",
  components: {
    TheLoader,
    Post,
  },
  data() {
    return {
      loading: true,
    };
  },
  async mounted() {
    await this.$store.dispatch("fetchCurrentUser");
    await this.$store.dispatch("getPosts");
    this.loading = false;
  },
  computed: {
    allPosts() {
      return this.$store.getters.allPosts;
    },
  },
};
</script>

<style scoped lang="css">
</style>