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
            <v-avatar class="" size="120" color="primary">
              <v-img
                alt="Profile"
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              />
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
              <v-list-item-subtitle
                >Member since
                {{ moment(user.created_at).format('l') }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import moment from "moment";

export default {
  name: "Profile",
  components: {
    TheLoader,
  },
  data() {
    return {
      loading: true,
      rating: 4.3,
      moment: moment,
    };
  },
  async created() {
    const id = this.$route.params.id;
    await this.$store.dispatch("fetchUser", id);
  },
  mounted() {
    this.loading = false;
  },
  computed: {
    user() {
      return this.$store.state.User.user;
    },
  },
};
</script>

<style scoped lang="css">
.profile {
  margin-top: -15%;
}
</style>