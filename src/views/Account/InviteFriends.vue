<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Invite Friends</h1>
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
              <img src="../../../public/img/invite_friends.png" alt="Invite Friends" width="60%" class="ml-5">
              <h4 class="">INVITE YOUR FRIENDS AND GET 50 POINTS</h4>
              <p class="mb-0 pb-0">Share the link below</p>
              <v-text-field readonly class="mx-8"  label="https://graitor.dk/invite/236281"></v-text-field>
            </div>
            <div>
                <v-btn class="primary white--text font-weight-bold mt-2" width="80%" rounded large>COPY</v-btn>
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
  name: "InviteFriends",
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