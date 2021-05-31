<template>
  <div>
    <!-- <h4 class="headlineLight--text">Graitor's Points</h4> -->
    <v-card rounded="xl" elevation="5">
      <v-list class="rounded-xl">
        <v-list-item-group color="primary">
          <!-- Avatar -->
          <v-list-item @click="$router.push({name: 'My Profile', params: { id: user.id }})">
            <v-list-item-avatar color="grey darken-3" size="70" v-if="user.profile_image">
              <v-img
                class="elevation-6"
                alt="Profile"
                :src="api_url + user.profile_image.url"
              ></v-img>
            </v-list-item-avatar>
            <v-avatar color="primary" v-else size="70">
                <v-icon dark x-large> mdi-account </v-icon>
              </v-avatar>

            <v-list-item-content>
              <v-list-item-title
                >{{ user.firstName }} {{ user.lastName }}</v-list-item-title
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
            <v-list-item-icon>
              <v-icon class="secondary--text" large >mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="$router.push({path: '/tasks'})">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-lead-pencil</v-icon>
                My Posts</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="$router.push({path: '/account/verifications'})">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text"
                  >mdi-passport-biometric</v-icon
                >
                Verifications</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
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
      rating: 4.3,
      api_url: process.env.VUE_APP_ENDPOINT
    };
  },
};
</script>

<style>
</style>