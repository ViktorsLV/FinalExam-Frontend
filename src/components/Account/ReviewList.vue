<template>
  <div>
    <v-list>
      <router-link :to="{ name: 'Message User', params: { id: 1 } }">
        <v-list-item-group
          color="primary"
          v-for="review in reviews"
          :key="review.id"
        >
          <v-list-item>
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
                size="12"
              ></v-rating>
              </v-list-item-title>
              <v-list-item-subtitle v-if="review.message.length > 15"
                > {{((review.message).substring(0, 15) + '...')}} </v-list-item-subtitle
              >
              <v-list-item-subtitle v-else
                > {{review.message}} </v-list-item-subtitle
              >
            </v-list-item-content>

            <v-row align="center" justify="end">
              <span class="caption">{{ moment(review.posted_on).format("MMM Do, YYYY") }}</span>
            </v-row>
          </v-list-item>

          <v-divider></v-divider>
        </v-list-item-group>
      </router-link>
    </v-list>
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
    };
  },
};
</script>

<style>
</style>