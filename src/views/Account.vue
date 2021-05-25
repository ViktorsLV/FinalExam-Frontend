<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row>
        <v-col cols="12" class="mt-6">
          <h1>Account</h1>
        </v-col>
        <v-col cols="12" class="pt-0 mt-5">
          <AccountCard :user="user" />
        </v-col>
        <v-col cols="12" class="pt-0 mt-5">
          <OverviewCard  />
        </v-col>
        <v-col cols="12" class="pt-0 mt-5 mb-15">
          <OtherCard class="mb-5"/>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import AccountCard from "@/components/Account/AccountCard.vue";
import OverviewCard from "@/components/Account/OverviewCard.vue";
import OtherCard from "@/components/Account/OtherCard.vue";
export default {
  name: "Account",
  components: {
    TheLoader,
    AccountCard,
    OverviewCard,
    OtherCard,
  },
  data() {
    return {
      loading: true,
    };
  },
  async mounted() {
    await this.$store.dispatch("fetchCurrentUser");
    this.loading = false;
  },
  computed: {
    user() {
      return this.$store.state.CurrentUser.currentUser;
    },
  },
};
</script>

<style scoped lang="css">
</style>