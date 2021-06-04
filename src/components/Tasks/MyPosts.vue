<template>
  <div class="pb-15">
    <h1>My Posts</h1>
    <!-- SVG here ? -->
    <p
      v-if="!activePosts.length && !bookedPosts.length && !finishedPosts.length"
    >
      You do not have any posts
    </p>
     <!-- Active Posts  -->
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

     <!-- Booked Posts  -->
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

     <!-- Finished Posts  -->
    <div v-if="finishedPosts.length" class="mt-10 mb-15">
      <h3 class="headlineLight--text">Finished</h3>

      <v-card
        class="mx-auto mb-4"
        outlined
        rounded="xl"
        elevation="5"
        v-for="post in finishedPosts"
        :key="post.id"
      >
        <v-card
          class="mx-auto lightGreen"
          outlined
          rounded="xl"
          elevation="2"
          disabled
        >
          <v-list-item>
            <v-list-item-content class="ml-2">
              <v-list-item-subtitle
                ><v-icon class="secondary--text">mdi-google-maps</v-icon>
                {{ post.city }}, {{ post.street }} {{ post.houseNumber }},
                {{ post.zip }}</v-list-item-subtitle
              >
              <v-list-item-subtitle>
                <span>
                  <v-icon class="secondary--text">mdi-calendar</v-icon>
                  {{ moment(post.date).format("MMM Do, YYYY") }}
                </span>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions class="pt-0">
            <v-list-item class="grow">
              <v-list-item-content>
                <v-list-item-title>
                  <div v-if="post.bagNumber > 4">
                    <v-icon large class="secondary--text">mdi-trash-can</v-icon
                    >x{{ post.bagNumber }}
                  </div>
                  <v-icon
                    v-else
                    large
                    class="secondary--text"
                    v-for="(n, index) in post.bagNumber"
                    :key="n.id"
                    :index="index"
                    >mdi-trash-can</v-icon
                  >
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>

        <router-link v-if="post.review === null"
          :to="{ name: 'Leave Review', params: { id: post.id } }"
        >
          <v-list-item>
            <v-list-item-content align="center">
              <v-list-item-title
                class="primary--text text-uppercase font-weight-bold"
              >
                Leave Review</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-card>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post/Post.vue";
import moment from "moment";

export default {
  components: {
    Post,
  },
  data() {
    return {
      rating: 4.3,
      api_url: process.env.VUE_APP_ENDPOINT,
      moment: moment,
    };
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