<template>
  <div>
      <h4 class="headlineLight--text">Other Settings</h4>
          <v-card rounded="xl" eelevation="5">
            <v-list rounded="xl">
              <v-list-item-group color="primary">
                  <!-- #1 -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> 
                      <v-icon class="secondary--text">mdi-comment-question-outline</v-icon>
                      Support</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon class="secondary--text">mdi-greater-than</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <!-- #2 -->
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon class="secondary--text">mdi-lock</v-icon>
                      Privacy Policy </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon class="secondary--text">mdi-greater-than</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <!-- #3 -->
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon class="secondary--text">mdi-newspaper-variant-outline</v-icon>
                      Terms 	&amp; Conditions</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon class="secondary--text">mdi-greater-than</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <!-- #4 -->
                <v-divider></v-divider>
                <v-list-item @click="logout">
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon class="secondary--text">mdi-logout</v-icon>
                      Log out</v-list-item-title>
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
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push("/");
    }
  },
}
</script>

<style>

</style>