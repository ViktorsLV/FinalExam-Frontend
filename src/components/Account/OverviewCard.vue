<template>
  <div>
    <h4 class="headlineLight--text">Overview</h4>
    <v-card rounded="xl" elevation="5">
      <v-list class="rounded-xl">
        <v-list-item-group color="primary">
          <v-list-item @click="$router.push({path: '/account/points-overview'})"> 
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-trophy-award</v-icon>
                Points Overview</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="$router.push({path: '/account/invite-friends'})">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text"
                  >mdi-cube-send</v-icon
                >
                Invite Friends</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {  
  data() {
    return {
    };
  },
};
</script>

<style>
</style>