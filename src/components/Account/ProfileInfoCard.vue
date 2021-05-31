<template>
  <div>
    <h4 class="headlineLight--text">Additional Information</h4>
    <v-card rounded="xl" elevation="5">
      <v-list class="rounded-xl">
        <v-list-item-group color="primary">
          <!-- #1 -->
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title>
                <!-- <v-icon class="secondary--text">mdi-face-profile</v-icon> -->
                Age
              </v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>{{ moment().diff(user.birthdate, "years") }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
            
          <!-- #2 -->
          <v-divider></v-divider>
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title>
                <!-- <v-icon class="secondary--text">mdi-google-maps</v-icon> -->
                Location
              </v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>{{user.city}}</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
          <!-- #3 -->
          <v-divider></v-divider>
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title>
                <!-- <v-icon class="secondary--text">mdi-phone</v-icon> -->
                Phone</v-list-item-title
              >
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>{{user.mobileNumber}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      moment: moment
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    },
  },
  components: {
  },
  methods: {
  },
};
</script>