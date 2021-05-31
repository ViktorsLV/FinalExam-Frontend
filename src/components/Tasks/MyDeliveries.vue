<template>
  <div>
    <h1>My Deliveries</h1>
    <p v-if="!bookedActivePosts.length && !bookedFinishedPosts">You do not have any active deliveries</p>
    <div v-if="bookedActivePosts.length" class="mt-5">
      <h3 class="headlineLight--text">Active Bookings</h3>
      <v-card
        class="mx-auto lightGreen mb-4"
        outlined
        v-for="post in bookedActivePosts"
        :key="post.id"
        rounded="xl"
        elevation="5"
        @click="$router.push({ name: 'Complete Delivery', params: { id: post.post.id } })"
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
                <v-icon large class="secondary--text">mdi-trash-can</v-icon>x{{ post.post.bagNumber}}  
                </div>
                <v-icon v-else large class="secondary--text" v-for="(n, index) in (post.post.bagNumber)" :key="n.id" :index="index">mdi-trash-can</v-icon>
              </v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon large class="secondary--text">mdi-greater-than</v-icon>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>

    <!-- Past Finished Post -->
    <div v-if="bookedFinishedPosts.length" class="mt-10 mb-15">
      <h3 class="headlineLight--text">Past Bookings</h3>
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
                <v-icon large class="secondary--text">mdi-trash-can</v-icon>x{{ post.post.bagNumber}}  
                </div>
                <v-icon v-else large class="secondary--text" v-for="(n, index) in (post.post.bagNumber)" :key="n.id" :index="index">mdi-trash-can</v-icon>
              </v-list-item-title>
            </v-list-item-content>

            <!-- <v-row align="center" justify="end">
              <v-icon large class="secondary--text">mdi-greater-than</v-icon>
            </v-row> -->
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      moment: moment,
    };
  },
  async mounted() {
    await this.$store.dispatch("fetchCurrentUser", this.user.id);
    await this.$store.dispatch("getBookedPosts", this.user.id);
  },
  computed: {
    bookedActivePosts() {
      return this.$store.getters.bookedPosts.filter(p => p.status === 'active');
    },
    bookedFinishedPosts() {
      return this.$store.getters.bookedPosts.filter(p => p.status === 'finished');
    },
    user() {
      return this.$store.state.CurrentUser.currentUser;
    },
  },
};
</script>

<style>
</style>