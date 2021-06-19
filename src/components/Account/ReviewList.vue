<template>
  <div>
    <v-list>
      <v-list-item-group
        color="primary"
        v-for="review in reviews"
        :key="review.id"
      >
        <v-list-item @click="open(review)">
          <v-list-item-avatar
            color="primary"
            v-if="
              review.author.profile_image === null ||
              !review.author.profile_image.url
            "
          >
            <v-icon dark> mdi-account </v-icon>
          </v-list-item-avatar>
          <v-list-item-avatar color="grey darken-3" v-else>
            <v-img
              class="elevation-6"
              alt=""
              :src="api_url + review.author.profile_image.url"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <v-rating
                v-model="review.rating"
                background-color="black"
                color="yellow accent-4"
                dense
                half-increments
                hover
                readonly
                size="12"
              ></v-rating>
            </v-list-item-title>
            <v-list-item-subtitle v-if="review.message.length > 15">
              {{ review.message.substring(0, 15) + "..." }}
            </v-list-item-subtitle>
            <v-list-item-subtitle v-else>
              {{ review.message }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <span class="caption">{{
              moment(review.published_at).format("MMM Do, YYYY")
            }}</span>
          </v-row>
        </v-list-item>

        <v-divider></v-divider>
      </v-list-item-group>
    </v-list>
    <!-- see full review -->
    <v-dialog v-model="dialog" v-if="dialog">
      <v-card align="left" min-height="150">
        <v-list class="rounded-xl">
          <v-list-item-group color="primary">
            <!-- Avatar -->
            <v-list-item >
              <v-list-item-avatar
                size="40"
                color="primary"
                v-if="
                  currentReview.author.profile_image === null ||
                  !currentReview.author.profile_image.url
                "
              >
                <v-icon dark> mdi-account </v-icon>
              </v-list-item-avatar>
              <v-list-item-avatar color="grey darken-3" v-else size="40">
                <v-img
                  class="elevation-6"
                  alt=""
                  :src="api_url + currentReview.author.profile_image.url"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  >{{ currentReview.author.firstName }}
                  {{ currentReview.author.lastName }}</v-list-item-title
                >
                <v-rating
                  v-model="currentReview.rating"
                  background-color="black"
                  color="yellow accent-4"
                  dense
                  half-increments
                  hover
                  readonly
                  size="12"
                ></v-rating>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon class="secondary--text" large @click="close()"
                  >mdi-close</v-icon
                >
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <p class="px-5 py-2">
          {{ currentReview.message }}
        </p>
        <!-- <v-card-actions class="mt-4">
          <v-spacer></v-spacer>
          <v-btn color="secondary" outlined rounded @click="close()">
            Cancel
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      rating: 0,
      api_url: process.env.VUE_APP_ENDPOINT,
      moment: moment,
      dialog: false,
      currentReview: {},
    };
  },
  methods: {
    open(review) {
      this.currentReview = review;
      this.dialog = open;
    },
    close() {
      this.currentReview = {};
      this.dialog = false;
    },
  },
};
</script>