<template>
  <div>
    <h4 class="headlineLight--text">Statistics</h4>
    <v-card rounded="xl" elevation="5">
      <v-list class="rounded-xl">
        <v-list-item-group color="primary">
          <!-- <v-list-item @click="$router.push({path: '/account/points-overview'})">  -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-lead-pencil</v-icon>
                Posts</v-list-item-title
              >
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right" class="mr-2">
              <v-list-item-title>{{ user.posts.length }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-header class="px-4">
                <div>
                  <v-icon class="secondary--text">mdi-recycle</v-icon>
                  <span class="font-weight-bold secondary--text">10.35kg</span>
                  CO2 saved
                </div>
                <template v-slot:actions>
            <v-icon color="secondary" >
                  $expand
            </v-icon>
          </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                CO2 savings are calculated based on avarage weight of waste
                deposited. Read more on Graitor's webpage.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-divider></v-divider>

          <router-link :to="{ name: 'User Reviews', params: { id: user.id } }">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="secondary--text">mdi-star</v-icon>
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
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>