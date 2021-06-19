<template>
  <div class="pb-15">
    <h1>My Posts</h1>
    <!-- Active Posts  -->
      <h3 class="headlineLight--text mt-5">Active</h3>
      <div align="center" class="mt-3" v-if="!activePosts.length"> 
      <img src="../../../public/img/no_posts.png" alt="svg" width="30%" />
      <h5  class="secondary--text">You don't have any active posts yet</h5>
      </div>
    <div v-if="activePosts.length" class="mt-5">
      <Post
        class="mb-4"
        v-for="post in activePosts"
        :key="post.id"
        v-bind:post="post"
        :showDetails="false"
      />
    </div>

    <!-- Booked Posts  -->
    <v-expansion-panels class="mt-10" multiple>
      <v-expansion-panel class="rounded-xl">
        <v-expansion-panel-header>
          <h3 class="headlineLight--text">Booked</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <h5 v-if="!bookedPosts.length">
            You don't have any history of booked posts in
          </h5>
          <Post
            class="mb-4"
            v-for="post in bookedPosts"
            :key="post.id"
            v-bind:post="post"
            :showDetails="false"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel class="rounded-xl border mb-15 mt-5">
        <v-expansion-panel-header>
          <h3 class="headlineLight--text">Finished</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <h5 v-if="!finishedPosts.length">You don't have any finished bookings</h5>
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
                        <v-icon large class="secondary--text"
                          >mdi-trash-can</v-icon
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

            <router-link
              v-if="post.review === null"
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
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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

<style scoped>
.border {
  border-top: 0.1px white;
}
</style>