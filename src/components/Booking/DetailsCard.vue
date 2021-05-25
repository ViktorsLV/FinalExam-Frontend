<template>
  <div>
    <h4 class="headlineLight--text">Detail Summary</h4>
    <v-card rounded="xl" elevation="5">
      <v-list class="rounded-xl">
        <v-list-item-group color="primary">
          <v-list-item> 
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-pin</v-icon>
                 {{ post.city }}, {{ post.street }} {{ post.houseNumber }},
              {{ post.zip }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="$router.push({path: '/account/invite-friends'})">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text"
                  >mdi-calendar</v-icon
                >
                {{moment(post.date).format("MMM Do, YYYY")}}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="$router.push({path: '/account/invite-friends'})">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text"
                  >mdi-cube-send</v-icon
                >
                {{post.bagNumber}} bags, {{post.bagWeight}}g approx. total weight</v-list-item-title
              >
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
    props: {
        post: {
            type: Object,
        },
    },
  data() {
    return {
        moment: moment
    };
  },
};
</script>

<style>
</style>