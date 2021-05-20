<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <v-row class="background-image">
        <v-col>
          <img src="../../public/img/logo.png" alt="e-pant" width="60%" />
        </v-col>
        <v-col cols="12" class="mx-auto card-margin" align="center">
          <h1 class="text-center primary--text pt-3">Register</h1>
        </v-col>
        <v-row justify="center">
          <v-col cols="10">
            <form v-on:keyup.enter="register">
              <div>
                <v-text-field
                  v-model.trim="username"
                  label="Username"
                  rounded
                  required
                  outlined
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                  v-model.trim="email"
                  label="E-mail"
                  required
                  rounded
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
                  Already have an account? <br />
                  <router-link to="/login" class="primary-text"
                    >Log-in</router-link
                  >
                </p>
              </div>
              <div>
                <v-btn
                  class="primary"
                  rounded
                  large
                  width="100%"
                  @click="register"
                  >REGISTER</v-btn
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
      email: "",
      username: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    async register() {
      this.progress = true;
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("register", newUser);
        this.$router.push("/home");
        this.progress = false;
        this.email = this.username = this.password = "";
      } catch (error) {
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