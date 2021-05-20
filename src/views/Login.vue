<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <v-row class="background-image">
        <v-col>
          <img src="../../public/img/logo.png" alt="e-pant" width="60%" />
        </v-col>
        <v-col cols="12" class="mx-auto card-margin" align="center">
          <h1 class="primary--text">Log-in with your Graitor account</h1> 
        </v-col>
        <v-row justify="center">
          <v-col cols="10" class="pb-0">
            <form v-on:keyup.enter="login">
              <div>
                <v-text-field
                  v-model.trim="identifier"
                  rounded
                  label="Username or E-mail"
                  required
                  outlined
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                  v-model.trim="password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="
                    showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                  "
                  @click:append="showPassword = !showPassword"
                  required
                  rounded
                  label="Password"
                  outlined
                ></v-text-field>
              </div>
              <div align="center">
                <p>
                  Don't have an account yet? <br />
                  <router-link to="/register" class="primary-text"
                    >Register Here</router-link
                  >
                </p>
              </div>
              <div>
                <v-btn class="primary" rounded large width="100%" @click="login"
                  >LOG-IN</v-btn
                >
              </div>
            </form>
          </v-col>
          <v-col cols="10" v-if="progress" justify="center">
            <v-progress-linear
              indeterminate
              color="primary"
            ></v-progress-linear>
          </v-col>
        </v-row>
      </v-row>
    </section>
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
      progress: false,
      identifier: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    async login() {
      this.progress = true;
      const user = {
        identifier: this.identifier,
        password: this.password,
      }
      try {
        await this.$store.dispatch("login", user);
        this.$router.push("/step-one");
        this.progress = false;
        this.identifier = this.password = "";
      } catch (error) {
        console.log(error);
        this.progress = false;
      }
    },
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style>
</style>