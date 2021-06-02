<template>
  <div>
    <v-card elevation="3" rounded="xl" align="center" height="60vh">
      <div>
        <v-list-item-avatar
          color="primary"
          size="60"
          v-if="user.profile_image === null || !user.profile_image.url"
        >
          <v-icon dark x-large> mdi-account </v-icon>
        </v-list-item-avatar>
        <v-list-item-avatar color="grey darken-3" size="60" v-else>
          <v-img
            class="elevation-6"
            alt=""
            :src="api_url + user.profile_image.url"
          ></v-img>
        </v-list-item-avatar>
        <p class="subheading mb-0 pb-0">
          {{ user.firstName }} {{ user.lastName }}
        </p>
        <v-rating
          v-model="rating"
          background-color="black"
          color="yellow accent-4"
          dense
          half-increments
          hover
          size="16"
        ></v-rating>
        <p class="caption mb-0 pb-0">
          Member since {{ moment(user.created_at).format("l") }}
        </p>
      </div>
    </v-card>
    <v-row justify="center" class="mt-2">
      <v-col cols="12">
        <v-text-field
          v-model.trim="message"
          required
          rounded
          outlined
          append-icon="mdi-send"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      rating: 3.8,
      message: "",
      moment: moment,
      api_url: process.env.VUE_APP_ENDPOINT,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>