<template>
  <div>
    <h1>My Posts</h1>
    <p v-if="!usersPosts">You do not have any active posts</p>
    <Post
      class="mb-4"
      v-for="post in usersPosts"
      :key="post.id"
      v-bind:post="post"
      :showDetails="false"
    />
  </div>
</template>

<script>
import Post from "@/components/Post/Post.vue";

export default {
  components: {
    Post,
  },
  async mounted() {
    await this.$store.dispatch('fetchCurrentUser', this.user.id)
    await this.$store.dispatch("getUsersPosts", this.user.id);
  },
  computed: {
    usersPosts() {
      return this.$store.getters.usersPosts;
    },
    user() {
      return this.$store.state.CurrentUser.currentUser;
    },
  },
};
</script>

<style>
</style>