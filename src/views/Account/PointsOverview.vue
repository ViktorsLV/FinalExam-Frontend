<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Points Overview</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-card
            elevation="3"
            rounded="xl"
            align="center"
            height="max-content"
            class="pb-10"
          >
            <div class="pt-6">
              <h2 class="secondary--text display-1 font-weight-bold">250</h2>
              <p class="mb-0 pb-0">points earned</p>
            </div>
            <div class="pt-6">
              <h3 class="">You have saved</h3>
              <p class="mb-0 pb-0 secondary--text font-weight-bold">1.5kg CO2</p>
            </div>
            <div class="mt-10">
              <h4 class="ml-3 mb-2" align="left">Earn points by inviting your friends</h4>
              <v-card tile outlined>
                <v-list-item @click="$router.push({path: '/account/invite-friends'})">
                  <v-list-item-content>
                    <v-list-item-title class="secondary--text">Invite Friends</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
              <h4 class="ml-3 mb-2 mt-10" align="left">Earn points through Graitor's main app</h4>
              <v-card tile outlined>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="secondary--text">Go To Graitor's App</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";

export default {
  name: "PointsOverview",
  components: {
    TheLoader,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>