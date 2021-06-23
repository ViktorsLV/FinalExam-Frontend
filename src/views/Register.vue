<template>
  <div class="container pb-15">
    <TheLoader v-if="loading" />
    <section v-else class="pb-15">
      <v-row class="background-image">
        <v-col>
          <img src="../../public/img/logo.png" alt="e-pant" width="60%" />
        </v-col>
        <v-col cols="12" class="mx-auto mt-3" align="center">
          <h1 class="text-center primary--text pt-3">Register</h1>
        </v-col>
        <v-row justify="center">
          <v-col cols="10">
            <form v-on:keyup.enter="register">
              <div>
                <v-text-field
                  v-model.trim="firstName"
                  label="First Name"
                  rounded
                  required
                  outlined
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                  v-model.trim="lastName"
                  label="Last Name"
                  required
                  rounded
                  outlined
                ></v-text-field>
              </div>
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
                  :error-messages="emailErrors"
                  @blur="$v.email.$touch()"
                  label="E-mail"
                  required
                  rounded
                  outlined
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                  v-model.trim="password"
                  :error-messages="passwordErrors"
                  @blur="$v.password.$touch()"
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
              <div>
                <v-text-field
                  v-model.trim="repeatPassword"
                  :error-messages="repeatPasswordErrors"
                  :type="showRepeatPassword ? 'text' : 'password'"
                  :append-icon="
                    showRepeatPassword
                      ? 'mdi-eye-off-outline'
                      : 'mdi-eye-outline'
                  "
                  @click:append="showRepeatPassword = !showRepeatPassword"
                  required
                  rounded
                  label="Repeat Password"
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
                  :disabled="
                    !username.length ||
                    !password.length ||
                    !firstName.length ||
                    !lastName.length ||
                    !email.length ||
                    !repeatPassword.length
                  "
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
import { email, sameAs, minLength } from "vuelidate/lib/validators";
import TheLoader from "@/components/app/TheLoader.vue";

export default {
  validations: {
    email: { email },
    password: {
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAs: sameAs("password"),
    },
  },
  components: {
    TheLoader,
  },
  data() {
    return {
      loading: true,
      progress: false,
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
      showPassword: false,
      showRepeatPassword: false,
    };
  },
  methods: {
    async register(e) {
      this.$v.$touch();
      e.preventDefault();
      if (!this.$v.$invalid) {
        this.progress = true;
        const newUser = {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
          password: this.password,
        };
        try {
          await this.$store.dispatch("register", newUser);
          this.$router.push("/step-one");
          this.progress = false;
          this.email = this.username = this.password = "";
        } catch (error) {
          this.progress = false;
        }
      }
    },
  },
  mounted() {
    this.loading = false;
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      return errors;
    },
    repeatPasswordErrors() {
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.sameAs && errors.push("Passwords do not match");
      return errors;
    },
  },
};
</script>

<style>
</style>