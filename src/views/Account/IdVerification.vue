<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row>
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Verify Your Identity</h1>
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
                  <div align="center">
                  <img src="../../../public/img/id_verify.png" alt="svg" width="30%" class="mb-2"/>
                  </div>
                  <h3 class="mb-2 text-center">We need to verify your ID</h3>
                  <p class="text-center">
                    For better user experience and satisfaction we kindly ask
                    you to verify your identity by providing us with one of your
                    identity documents. Your data is secure with us and complies
                    with our
                    <span class="font-weight-bold"> Privacy Policy </span>
                    rules.
                  </p>
                  <TheButton
                    :text="'verify'"
                    :outlined="true"
                    @click="e1 = 2"
                  />
                </v-stepper-content>

                <!-- #2 screen -->
                <v-stepper-content step="2">
                  <h5 class="mb-2">Follow the steps provided below</h5>
                  <v-stepper v-model="e2" flat>
                    <v-stepper-header>
                      <v-stepper-step :complete="e2 > 3" step="3">
                        Name of step 1
                      </v-stepper-step>

                      <v-divider></v-divider>

                      <v-stepper-step :complete="e2 > 4" step="4">
                        Name of step 2
                      </v-stepper-step>

                      <v-divider></v-divider>

                      <v-stepper-step step="5"> Name of step 3 </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                      <v-stepper-content step="3">
                        <div class="mb-4" align="center">
                          <p>
                            Please provide a photo of the
                            <span class="font-weight-bold">Front </span> of your
                            ID card
                          </p>
                          <v-btn
                            class="white--text mt-2"
                            width="80%"
                            color="primary"
                            rounded
                          >
                            <v-icon class="mr-2">mdi-camera </v-icon>
                            photo</v-btn
                          >
                        </div>
                        <v-divider></v-divider>
                        <TheButton
                          :text="'continue'"
                          :outlined="true"
                          @click="e2 = 4"
                          class="mt-5"
                        />
                      </v-stepper-content>

                      <v-stepper-content step="4">
                         <div class="mb-4" align="center">
                          <p>
                            Please provide a photo of the
                            <span class="font-weight-bold">Back </span> of your
                            ID card
                          </p>
                          <v-btn
                            class="white--text mt-2"
                            width="80%"
                            color="primary"
                            rounded
                          >
                            <v-icon class="mr-2">mdi-camera </v-icon>
                            photo</v-btn
                          >
                        </div>
                        <v-divider></v-divider>
                        <TheButton
                          :text="'continue'"
                          :outlined="true"
                          @click="e2 = 5"
                          class="mt-5"
                        />
                      </v-stepper-content>

                      <v-stepper-content step="5">
                         <div class="mb-4" align="center">
                          <p>
                            Finally, just make a 
                            <span class="font-weight-bold">Selfie </span> of your
                            profile!
                          </p>
                          <v-btn
                            class="white--text mt-2"
                            width="80%"
                            color="primary"
                            rounded
                          >
                            <v-icon class="mr-2">mdi-camera </v-icon>
                            photo</v-btn
                          >
                        </div>
                        <v-divider></v-divider>
                        <TheButton
                          :text="'finish'"
                          :outlined="true"
                          @click="e1 = 6"
                          class="mt-5"
                        />
                      </v-stepper-content>
                    </v-stepper-items>
                  </v-stepper>
                </v-stepper-content>

                 <v-stepper-content step="6">
                  <h3 class="mb-2 text-center primary--text">Thank you!!!</h3>
                  <div  align="center">
                  <v-icon class="primary--text" size="90">mdi-check-circle</v-icon>
                  <p class="text-center">
                    We will get back to you shortly after our team will check the files provided by you.
                  </p>
                  </div>
                  <router-link :to="{ name: 'Account' }">
                  <TheButton
                    :text="'back to account'"
                    :outlined="true"
                  />
                  </router-link>
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
      e2: 3,
      progress: 0,
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style>
</style>