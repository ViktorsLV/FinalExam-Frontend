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
            :post="singlePost"
          />
          <router-link :to="{ name: 'Edit Post', params: { id: singlePost.id } }">
            <TheButton v-if="currentUser.id === user.id" :text="'edit post'"/>
          </router-link>
        </v-col>
        <v-col cols="12" class="mt-2">
          <h1>User</h1>
          <UserCardSmall :user="user" />
          <router-link :to="{ name: 'Booking', params: { id: singlePost.id } }">
            <TheButton v-if="currentUser.id != user.id" :text="'start booking'"/>
          </router-link>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import Post from "@/components/Post/Post.vue";
import UserCardSmall from "@/components/User/UserCardSmall.vue";
import TheButton from "@/components/app/TheButton.vue";

export default {
  name: "PostDetails",
  components: {
    TheLoader,
    Post,
    UserCardSmall,
    TheButton
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    singlePost() {
      return this.$store.getters.singlePost;
    },
    user() {
      return this.$store.getters.singlePost.author;
    },
    currentUser() {
      return this.$store.state.CurrentUser.currentUser;
    },
  },
  async mounted() {
    const id = this.$route.params.id;
    await this.$store.dispatch("getSinglePost", id);
    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>