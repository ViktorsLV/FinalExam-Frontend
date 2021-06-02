<template>
  <div>
    <v-card rounded="xl" eelevation="5">
      <v-list class="rounded-xl">
        <v-list-item-group color="primary">
          <v-list-item
            @click="$router.push({ name: 'Profile', params: { id: user.id } })">
          <v-list-item-avatar
              color="primary"
              v-if="
                user.profile_image === null ||
                !user.profile_image.url
              "
            >
              <v-icon dark> mdi-account </v-icon>
            </v-list-item-avatar>
            <v-list-item-avatar color="grey darken-3" v-else>
              <v-img
                class="elevation-6"
                alt=""
                :src="api_url + user.profile_image.url"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                {{ user.firstName }} {{ user.lastName }}
              </v-list-item-title>
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

            <v-list-item-icon align="center" justify="end">
              <v-icon large class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> 7 ratings</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon large class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider v-if="currentUser.id != user.id"></v-divider>
              <router-link :to="{ name: 'Message User', params: { id: user.id } }">
          <v-list-item v-if="currentUser.id != user.id">
            <v-list-item-content align="center">
              <v-list-item-title class="primary--text text-uppercase font-weight-bold"> Message User</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
              </router-link>
          
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      rating: 2.7,
      api_url: process.env.VUE_APP_ENDPOINT
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.CurrentUser.currentUser;
    },
  },
};
</script>

<style>
</style>