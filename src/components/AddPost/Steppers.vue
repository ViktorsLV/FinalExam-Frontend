<template>
  <div>
    <v-progress-linear
      class="mb-3"
      v-model="progress"
      color="secondary"
      rounded
      dark
      height="30"
    >
      <strong>{{ Math.ceil(progress) }}%</strong>
    </v-progress-linear>
    <v-card elevation="7" rounded="xl" align="center" height="max-content">
      <v-stepper v-model="e1" flat>
        <v-stepper-items>
          <!-- #1 screen -->
          <v-stepper-content step="1">
            <h5 align="left" class="mb-4">Bags information</h5>
            <v-row height="65vh">
              <v-col cols="12" class="pb-0">
                <v-autocomplete
                  v-model.trim="bagType"
                  :items="bagTypes"
                  dense
                  rounded
                  label="Type of bag"
                  outlined
                  required
                ></v-autocomplete>
              </v-col>
              <v-col cols="6" class="pt-0">
                <v-text-field
                  v-model.trim="bagNumber"
                  dense
                  type="number"
                  rounded
                  label="Number of bags"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="pt-0">
                <v-text-field
                  v-model.trim="weight"
                  dense
                  type="number"
                  rounded
                  label="Aprrox. weight (g)"
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col justify="bottom">
                <div align="left">
                  <img
                    src="../../../public/img/onboarding-1.png"
                    alt=""
                    width="80%"
                  />
                </div>
                <div align="right">
                  <v-btn
                    :disabled="
                      !bagType.length || !bagNumber.length || !weight.length
                    "
                    color="primary"
                    rounded
                    @click="(e1 = 2), (progress = 33)"
                  >
                    Continue
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-stepper-content>

          <!-- #2 screen -->
          <v-stepper-content step="2">
            <h5 align="left" class="mb-4">Location</h5>
            <v-row height="65vh">
              <v-col cols="12" class="pb-0">
                <v-text-field
                  v-model.trim="city"
                  dense
                  type="text"
                  rounded
                  label="Town/City"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pt-0">
                <v-text-field
                  v-model.trim="street"
                  dense
                  type="text"
                  rounded
                  label="Street"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="pt-0">
                <v-text-field
                  v-model.trim="doorNumber"
                  dense
                  type="text"
                  rounded
                  label="Door Number"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="pt-0">
                <v-text-field
                  v-model.trim="zipCode"
                  label="ZIP Code"
                  type="number"
                  dense
                  rounded
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col justify="bottom">
                <div align="left">
                  <img
                    src="../../../public/img/onboarding-2.png"
                    alt=""
                    width="50%"
                  />
                </div>
                <div align="right">
                  <v-btn
                  class="mr-3"
                    color="primary"
                    rounded
                    @click="(e1 = 1), (progress = 33)"
                  >
                    Back
                  </v-btn>
                  <v-btn
                    :disabled="
                      !city.length ||
                      !street.length ||
                      !doorNumber.length ||
                      !zipCode.length
                    "
                    color="primary"
                    rounded
                    @click="(e1 = 3), (progress = 66)"
                  >
                    Continue
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-stepper-content>

          <!-- #3 screen -->
          <v-stepper-content step="3">
            <h5 align="left" class="mb-4">Preferences</h5>
            <v-row height="65vh">
              <v-col cols="12" class="pt-0">
                <v-dialog
                  ref="dateDialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model.trim="date"
                      type="text"
                      rounded
                      label="Pickup Date"
                      required
                      dense
                      outlined
                      background-color="white"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" :min="getStartDate" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dateDialog.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <!-- <v-col cols="6" class="pt-0">
                <v-dialog
                  ref="timeDialog"
                  v-model="modal2"
                  :return-value.sync="time"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="time"
                      label="Time"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      dense
                      rounded
                      required
                      outlined
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="modal2"
                    v-model="time"
                    full-width
                    format="24hr"
                    use-seconds
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.timeDialog.save(time)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col> -->
              <v-col cols="12" class="pt-0">
                <v-textarea
                  v-model.trim="comments"
                  dense
                  type="text"
                  rounded
                  label="Additional comments (optional)"
                  required
                  outlined
                ></v-textarea>
              </v-col>

              <v-col>
                <div align="left">
                  <img
                    src="../../../public/img/onboarding-3.png"
                    alt=""
                    width="55%"
                  />
                </div>
                <div align="right">
                  <v-btn
                  class="mr-3"
                    color="primary"
                    rounded
                    @click="(e1 = 2), (progress = 66)"
                  >
                    Back
                  </v-btn>
                  <v-btn
                    :disabled="!date.length"
                    color="primary"
                    rounded
                    @click="(e1 = 4), (progress = 100)"
                  >
                    Continue
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-stepper-content>

          <!-- #4 screen -->
          <v-stepper-content step="4">
            <h5>Overview</h5>
            <v-list-item align="left">
              <v-list-item-content class="ml-2">
                <v-list-item-subtitle
                  ><v-icon class="secondary--text">mdi-google-maps</v-icon>
                  {{ city }}, {{ street }} {{ doorNumber }},
                  {{ zipCode }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <span>
                    <v-icon class="secondary--text">mdi-calendar</v-icon>
                    {{ date }}
                  </span>
                  <!-- <span class="ml-6">
                    <v-icon class="secondary--text">mdi-clock</v-icon>
                    {{ time }}
                  </span> -->
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions class="pt-0">
              <v-list-item class="grow" align="left">
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon large class="secondary--text">mdi-trash-can</v-icon
                    >x{{ bagNumber }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>

            <v-list-item class="grow" align="left">
              <v-list-item-content class="ml-3">
                <v-list-item-title>Type of bag</v-list-item-title>
                <v-list-item-subtitle>{{ bagType }} </v-list-item-subtitle>

                <v-list-item-title class="mt-3">Preferences</v-list-item-title>
                <v-list-item-subtitle>{{ comments }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <div align="center">
              <TheButton :text="'post'" @click="addPost()" />
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </div>
</template>

<script>
import TheButton from "@/components/app/TheButton.vue";

export default {
  components: {
    TheButton,
  },
  data() {
    return {
      e1: 1,
      progress: 0,

      /* 1st */
      bagTypes: [
        "Dansk Retur System",
        "Black Waste Bag",
        "Small Plastic Bag",
        "Other",
      ],
      bagType: "",
      bagNumber: "",
      weight: "",

      /* 2nd */
      city: "",
      street: "",
      doorNumber: "",
      zipCode: "",

      /* 3rd */
      date: '',
      modal: false,
      comments: "",
      time: "",
      modal2: false,
    };
  },
  methods: {
    async addPost() {
      // e.preventDefault();
      try {
        await this.$store.dispatch("createPost", {
          city: this.city,
          street: this.street,
          doorNumber: this.doorNumber,
          bagNumber: this.bagNumber,
          zip: this.zipCode,
          date: this.date,
          // time: this.time,
          bagWeight: this.weight,
          bagType: this.bagType,
          comments: this.comments,
        });
        this.$router.push("/tasks");
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    getStartDate() {
      const endDate = new Date();
      return endDate.toISOString().slice(0, 10);
    },
  },
};
</script>

<style>
</style>