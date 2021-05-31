<template>
  <div>
    <h1>My Posts</h1>
    <!-- SVG here ? -->
    <p
      v-if="!activePosts.length && !bookedPosts.length && !finishedPosts.length"
    >
      You do not have any posts
    </p>
    <div v-if="activePosts.length" class="mt-5">
      <h3 class="headlineLight--text">Active</h3>
      <Post
        class="mb-4"
        v-for="post in activePosts"
        :key="post.id"
        v-bind:post="post"
        :showDetails="false"
      />
    </div>
    <div v-if="bookedPosts.length" class="mt-10">
      <h3 class="headlineLight--text">Booked</h3>
      <Post
        class="mb-4"
        v-for="post in bookedPosts"
        :key="post.id"
        v-bind:post="post"
        :showDetails="false"
      />
    </div>
    <div v-if="finishedPosts.length" class="mt-10 mb-15">
      <h3 class="headlineLight--text">Finished</h3>
      <Post
        class="mb-4"
        v-for="post in finishedPosts"
        :key="post.id"
        v-bind:post="post"
        :showDetails="false"
        :isDisabled="true"
      />
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post/Post.vue";

export default {
  components: {
    Post,
  },
  async mounted() {
    await this.$store.dispatch("fetchCurrentUser", this.user.id);
    await this.$store.dispatch("getUsersPosts", this.user.id);
  },
  computed: {
    activePosts() {
      return this.$store.getters.usersPosts.filter(
        (p) => p.status === "active"
      );
    },
    bookedPosts() {
      return this.$store.getters.usersPosts.filter(
        (p) => p.status === "booked"
      );
    },
    finishedPosts() {
      return this.$store.getters.usersPosts.filter(
        (p) => p.status === "finished"
      );
    },
    user() {
      return this.$store.state.CurrentUser.currentUser;
    },
  },
};
</script>

<style>
</style>