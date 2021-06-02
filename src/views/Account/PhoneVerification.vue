<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row>
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Verify Phone Number</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="11" class="card-margin">
          <v-card elevation="7" rounded="xl" height="max-content">
            <v-stepper v-model="e1" flat>
              <v-stepper-items>
                <!-- #1 screen -->
                <v-stepper-content step="1">
                  <h5 class="mb-2">Phone Number</h5>
                  <v-text-field
                    v-model.trim="mobileNumber"
                    type="text"
                    rounded
                    dense
                    label="e.g. 92021192"
                    required
                    outlined
                    background-color="white"
                  ></v-text-field>
                  <TheButton
                    :disabled="mobileNumber.length < 8"
                    :text="'send SMS with code'"
                    :outlined="true"
                    @click="e1 = 2"
                  />
                </v-stepper-content>

                <!-- #2 screen -->
                <v-stepper-content step="2">
                  <h5 class="mb-2">Enter 4-digit Code From Message</h5>
                  <v-text-field
                    v-model.trim="code"
                    type="number"
                    rounded
                    dense
                    label="****"
                    append-icon="mdi-lock-open"
                    required
                    outlined
                    background-color="white"
                  ></v-text-field>
                  <TheButton
                    :text="'send code again'"
                    :outlined="true"
                    @click="(e1 = 2), sendAgain()"
                  />
                  <router-link :to="{ name: 'Verify Account' }">
                    <TheButton :text="'submit'" :disabled="code.length < 4"/>
                  </router-link>
                  <p v-if="message" class="primary--text mt-3 text-center">
                    Code has been sent again!
                  </p>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheButton from "@/components/app/TheButton.vue";
import TheLoader from "@/components/app/TheLoader.vue";

export default {
  components: {
    TheButton,
    TheLoader,
  },
  data() {
    return {
      loading: true,
      e1: 1,
      mobileNumber: "",
      code: "",
      message: "",
    };
  },
  methods: {
    sendAgain() {
      this.message = true;
      setTimeout(() => {
        this.message = false;
      }, 3000);
    },
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style>
</style>