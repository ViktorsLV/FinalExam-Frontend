<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Verifications</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>
        <v-col cols="12" class="pt-0">
          <VerificationsCard/>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import VerificationsCard from "@/components/Account/VerificationsCard.vue";

export default {
  name: "Verifications",
  components: {
    TheLoader,
    VerificationsCard
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