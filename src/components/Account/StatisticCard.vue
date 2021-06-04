<template>
  <div>
    <h4 class="headlineLight--text">Statistics</h4>
    <v-card rounded="xl" elevation="5">
      <v-list class="rounded-xl">
        <v-list-item-group color="primary">
          <!-- <v-list-item @click="$router.push({path: '/account/points-overview'})">  -->
          <v-list-item > 
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-lead-pencil</v-icon>
                Posts</v-list-item-title
              >
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>{{user.posts.length}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item > 
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-recycle</v-icon>
                CO2 saved</v-list-item-title
              >
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>1.5kg</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <!-- <v-list-item @click="$router.push({path: '/account/invite-friends'})"> -->
          <router-link
          :to="{ name: 'User Reviews', params: { id: user.id } }"
        >
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text"
                  >mdi-star</v-icon
                >
                Reviews</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {  
  props: {
    user: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>