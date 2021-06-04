<template>
  <div>
    <h1>My Deliveries</h1>
    <p v-if="!bookedActivePosts.length && !bookedFinishedPosts">
      You do not have any active deliveries
    </p>
      <h3 class="headlineLight--text mt-5">Active Bookings</h3>
      <h5 v-if="!bookedActivePosts.length">You don't have any active posts</h5>
      <v-card
        class="mx-auto lightGreen mb-4"
        outlined
        v-for="post in bookedActivePosts"
        :key="post.id"
        rounded="xl"
        elevation="5"
        @click="
          $router.push({
            name: 'Complete Delivery',
            params: { id: post.post.id },
          })
        "
      >
        <v-list-item>
          <v-list-item-content class="ml-2">
            <v-list-item-subtitle
              ><v-icon class="secondary--text">mdi-google-maps</v-icon>
              {{ post.post.city }}, {{ post.post.street }}
              {{ post.post.houseNumber }},
              {{ post.post.zip }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <span>
                <v-icon class="secondary--text">mdi-calendar</v-icon>
                {{ moment(post.post.date).format("MMM Do, YYYY") }}
              </span>
              <!-- <span class="ml-6">
                <v-icon class="secondary--text">mdi-clock</v-icon>
                {{ moment(post.time).calendar() }}
              </span> -->
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions class="pt-0">
          <v-list-item class="grow">
            <v-list-item-content>
              <v-list-item-title>
                <div v-if="post.post.bagNumber > 4">
                  <v-icon large class="secondary--text">mdi-trash-can</v-icon
                  >x{{ post.post.bagNumber }}
                </div>
                <v-icon
                  v-else
                  large
                  class="secondary--text"
                  v-for="(n, index) in post.post.bagNumber"
                  :key="n.id"
                  :index="index"
                  >mdi-trash-can</v-icon
                >
              </v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon large class="secondary--text">mdi-greater-than</v-icon>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>

    <!-- Past Finished Post -->
    <v-expansion-panels v-model="panel" class="mt-10 mb-15">
      <v-expansion-panel class="rounded-xl mb-15">
        <v-expansion-panel-header>
          <h3 class="headlineLight--text">Past Bookings</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <h5 v-if="!bookedFinishedPosts.length">
            You don't have any past bookings
          </h5>
          <v-card
            class="mx-auto lightGreen mb-4"
            outlined
            v-for="post in bookedFinishedPosts"
            :key="post.id"
            rounded="xl"
            elevation="5"
            disabled
          >
            <v-list-item>
              <v-list-item-content class="ml-2">
                <v-list-item-subtitle
                  ><v-icon class="secondary--text">mdi-google-maps</v-icon>
                  {{ post.post.city }}, {{ post.post.street }}
                  {{ post.post.houseNumber }},
                  {{ post.post.zip }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <span>
                    <v-icon class="secondary--text">mdi-calendar</v-icon>
                    {{ moment(post.post.date).format("MMM Do, YYYY") }}
                  </span>
                  <!-- <span class="ml-6">
                <v-icon class="secondary--text">mdi-clock</v-icon>
                {{ moment(post.time).calendar() }}
              </span> -->
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions class="pt-0">
              <v-list-item class="grow">
                <v-list-item-content>
                  <v-list-item-title>
                    <div v-if="post.post.bagNumber > 4">
                      <v-icon large class="secondary--text"
                        >mdi-trash-can</v-icon
                      >x{{ post.post.bagNumber }}
                    </div>
                    <v-icon
                      v-else
                      large
                      class="secondary--text"
                      v-for="(n, index) in post.post.bagNumber"
                      :key="n.id"
                      :index="index"
                      >mdi-trash-can</v-icon
                    >
                  </v-list-item-title>
                </v-list-item-content>

                <!-- <v-row align="center" justify="end">
              <v-icon large class="secondary--text">mdi-greater-than</v-icon>
            </v-row> -->
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      moment: moment,
      panel: [0], 
    };
  },
  async mounted() {
    await this.$store.dispatch("fetchCurrentUser", this.user.id);
    await this.$store.dispatch("getBookedPosts", this.user.id);
  },
  computed: {
    bookedActivePosts() {
      return this.$store.getters.bookedPosts.filter(
        (p) => p.status === "active"
      );
    },
    bookedFinishedPosts() {
      return this.$store.getters.bookedPosts.filter(
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