<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Profile</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>
        <v-col cols="12" class="pt-0 px-0">
          <v-card width="100vw" class="mx-0">
            <v-img
              height="200px"
              src="../../../public/img/cover_page_profile.png"
              alt="Cover Photo"
              width="100%"
            />
          </v-card>
          <div align="center" class="profile">
            <v-list-item-avatar
              color="primary"
              size="120"
              v-if="
                user.profile_image === null ||
                !user.profile_image.url
              "
            >
              <v-icon dark x-large> mdi-account </v-icon>
            </v-list-item-avatar>
            <v-list-item-avatar color="grey darken-3" size="120" v-else>
              <v-img
                class="elevation-6"
                alt=""
                :src="api_url + user.profile_image.url"
              ></v-img>
            </v-list-item-avatar>
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
                readonly
              ></v-rating>
              <v-list-item-subtitle
                >Member since
                {{ moment(user.created_at).format("l") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </div>
        </v-col>
        <v-col cols="12" class="mt-5">
          <StatisticCard :user="user"/>
        </v-col>
        <v-col cols="12" class="pt-0">
          <AboutCard :user="user"/>
        </v-col>
        <v-col cols="12" class="pt-0 mb-5">
          <ProfileInfoCard :user="user"/>
        </v-col>
        <v-col cols="12" class="py-0 mb-15">
          <router-link :to="{ name: 'Edit Profile', params: { id: user.id } }">
          <TheButton v-if="currentUser.id === user.id" :text="'edit profile'" class="mb-10"/>
          </router-link>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import ProfileInfoCard from "@/components/Account/ProfileInfoCard.vue";
import AboutCard from "@/components/Account/AboutCard.vue";
import StatisticCard from "@/components/Account/StatisticCard.vue";
import TheButton from "@/components/app/TheButton.vue";
import moment from "moment";

export default {
  name: "Profile",
  components: {
    TheLoader,
    ProfileInfoCard,
    AboutCard,
    StatisticCard,
    TheButton
  },
  data() {
    return {
      loading: true,
      rating: 4.3,
      moment: moment,
      api_url: process.env.VUE_APP_ENDPOINT
    };
  },
  async created() {
    const id = this.$route.params.id;
    await this.$store.dispatch("fetchUser", id);
    await this.$store.dispatch("fetchCurrentUser", id);
  },
  mounted() {
    this.loading = false;
  },
  computed: {
    user() {
      return this.$store.state.User.user;
    },
    currentUser() {
      return this.$store.state.CurrentUser.currentUser;
    },
  },
};
</script>

<style scoped lang="css">
.profile {
  margin-top: -15%;
}
</style>