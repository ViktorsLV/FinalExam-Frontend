<template>
  <div>
    <router-link :to="{ name: 'Post Details', params: { id: post.id } }">
      <v-card
        class="mx-auto"
        outlined
        rounded="xl"
        elevation="5"
        :class="{ lightGreen: isBooked }"
        :disabled="isDisabled"
      >
        <v-card-actions v-if="showProfile">
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3" v-if="post.author.profile_image">
              <v-img
                class="elevation-6"
                alt=""
                :src="api_url + post.author.profile_image.url"
              ></v-img>
            </v-list-item-avatar>
              <v-list-item-avatar color="primary" v-else>
                <v-icon dark> mdi-account </v-icon>
              </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                >{{ post.author.firstName }} 
                {{ post.author.lastName }}</v-list-item-title
              >
              <v-rating
                v-model="rating"
                background-color="black"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="12"
              ></v-rating>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <span class="caption"
                >Posted on
                {{ moment(post.published_at).format("MMM Do, YYYY") }}</span
              >
            </v-row>
          </v-list-item>
        </v-card-actions>

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

            <v-row align="center" justify="end" v-if="showArrow">
              <v-icon large class="secondary--text">mdi-greater-than</v-icon>
            </v-row>
          </v-list-item>
        </v-card-actions>

        <v-list-item class="grow" v-if="showDetails">
          <v-list-item-content class="ml-2">
            <v-list-item-title>Type of bag</v-list-item-title>
            <v-list-item-subtitle>{{ post.bagType }}</v-list-item-subtitle>

            <v-list-item-title class="mt-3">Preferences</v-list-item-title>
            <v-list-item-subtitle v-if="post.comments">{{ post.comments }}</v-list-item-subtitle>
            <v-list-item-subtitle v-else>-</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </router-link>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      rating: 4.3,
      moment: moment,
      api_url: process.env.VUE_APP_ENDPOINT
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    showDetails: {
      type: Boolean,
      default: true,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
    showButton: {
      type: Boolean,
      default: false,
    },
    showProfile: {
      type: Boolean,
      default: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>vue