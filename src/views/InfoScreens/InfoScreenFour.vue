<template>
  <div>
    <TheLoader v-if="loading" />
    <v-row v-else>
      <v-col cols="12" class="mx-auto card-margin" align="center">
        <img src="../../../public/img/onboarding-4.png" alt="onboarding" width="70%"/>
      </v-col>
      <v-col cols="10" align="center" class="mx-auto">
        <h3 class="mt-3">
          Deposit waste, scan the receipt and you get both - money and Graitor
          Points!
        </h3>
      </v-col>
      <v-col cols="10" align="center" class="mx-auto">
        <v-icon class="primary--text">mdi-checkbox-blank-circle-outline</v-icon>
        <v-icon class="primary--text">mdi-checkbox-blank-circle-outline</v-icon>
        <v-icon class="primary--text">mdi-checkbox-blank-circle-outline</v-icon>
        <v-icon class="primary--text">mdi-checkbox-blank-circle</v-icon>
      </v-col>
      <v-col cols="10" align="center" class="mx-auto">
        <router-link to="/home">
          <v-btn outlined rounded color="primary" width="100%">FINISH</v-btn>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";

export default {
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

<style>
</style>