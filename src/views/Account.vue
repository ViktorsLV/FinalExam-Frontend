<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row>
        <v-col cols="12" class="mt-6">
          <h1>Account</h1>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{user.firstName}} {{user.lastName}}</v-list-item-title>
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
          </v-list-item>
        </v-col>
        <v-col cols="12" class="pt-0 mt-5">
          <PointCard />
        </v-col>
        <v-col cols="12" class="pt-0 mt-5">
          <OtherCard />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import PointCard from "@/components/Account/PointCard.vue";
import OtherCard from "@/components/Account/OtherCard.vue";
export default {
  name: "Account",
  components: {
    TheLoader,
    PointCard,
    OtherCard,
  },
  data() {
    return {
      loading: true,
      rating: 4.3,
    };
  },
  async mounted() {
    await this.$store.dispatch('fetchUser')
    this.loading = false;
  },
  computed: {
    user() {
      return this.$store.state.CurrentUser.user;
    },
  },
};
</script>

<style scoped lang="css">
</style>