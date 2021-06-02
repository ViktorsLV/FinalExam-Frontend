<template>
  <div v-if="user.birthdate || user.city || user.mobileNumber">
    <h4 class="headlineLight--text">Additional Information</h4>
    <v-card rounded="xl" elevation="5">
      <v-list class="rounded-xl">
        <v-list-item-group color="primary">
          <!-- #1 -->
          <v-list-item v-if="user.birthdate">
            <v-list-item-content>
              <v-list-item-title>
                Age
              </v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>{{ moment().diff(user.birthdate, "years") }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
            
          <!-- #2 -->
          <v-list-item v-if="user.city">
            <v-list-item-content>
              <v-list-item-title>
                Location
              </v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>{{user.city}}</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
          <!-- #3 -->
          <v-list-item v-if="user.mobileNumber">
            <v-list-item-content>
              <v-list-item-title>
                Phone</v-list-item-title
              >
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>{{user.mobileNumber}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-if="user.occupation">
            <v-list-item-content>
              <v-list-item-title>
                Occupation</v-list-item-title
              >
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>{{user.occupation}}</v-list-item-title>
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
  }
};
</script>