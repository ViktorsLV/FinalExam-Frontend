<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <v-row v-else class="background-image ">
      <v-col cols="12" align="center" class="margin">
        <img src="../../public/img/logo.png" alt="e-pant" width="60%"/>
        <p class="secondary--text font-italic">Better together</p>
      </v-col>
      <v-col cols="12" align="center">
        <router-link to="/login">
          <v-btn class="primary" rounded large
            >LOG-IN WITH GRAITOR ACCOUNT</v-btn
          >
        </router-link>
        <p class="mt-2">
          Don't have an account yet?
          <router-link to="/register">Regitser</router-link>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
export default {
  name: "Welcome",
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

<style scoped lang="scss">
</style>