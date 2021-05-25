<template>
  <div>
    <TheLoader v-if="loading" />
    <v-row v-else>
      <v-col cols="12" class="mx-auto card-margin" align="center">
        <img src="../../../public/img/onboarding-2.png" alt="onboarding" />
      </v-col>
      <v-col cols="10" align="center" class="mx-auto">
        <h3 class="mt-3">You will easily see where there are some who would like to get rid of their mortgage.</h3>
      </v-col>
      <v-col cols="10" align="center" class="mx-auto"> 
        <v-icon class="primary--text">mdi-checkbox-blank-circle-outline</v-icon>
      <v-icon class="primary--text">mdi-checkbox-blank-circle</v-icon>
        <v-icon class="primary--text">mdi-checkbox-blank-circle-outline</v-icon>
        <v-icon class="primary--text">mdi-checkbox-blank-circle-outline</v-icon>
       </v-col>
      <v-col cols="10" align="center" class="mx-auto">
        <router-link to="/step-three">
          <v-btn outlined rounded color="primary" width="100%">NEXT</v-btn>
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