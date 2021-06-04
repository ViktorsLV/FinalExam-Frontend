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
        <div align="right" class="mt-5 mr-2">
          <v-card width="max-content" height="max-content" class="primary white--text" rounded="xl" v-for="(message, index) in messages" :key="index">
          <p class="pa-2" > {{message}} </p>
          </v-card>
        </div>
      </div>
    </v-card>
    <v-row justify="center" class="mt-2">
      <v-col cols="12">
        <v-text-field
          v-model.trim="message"
          required
          rounded
          outlined
          :append-icon="message.length ? 'mdi-send' : ''"
          @click:append="clear()"
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
      messages: [],
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
  methods: {
    clear() {
      this.messages.push(this.message)
      this.message = ''
    }
  },
};
</script>

<style lang="scss" scoped>
</style>