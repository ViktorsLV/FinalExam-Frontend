<template>
  <div>
    <v-card rounded="xl" elevation="5">
      <v-list class="rounded-xl">
        <v-list-item-group color="primary">
          <!-- #1 -->
          <router-link :to="{ name: 'Verify Phone Number' }">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="secondary--text">mdi-phone</v-icon>
                  Phone Number
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon class="secondary--text">mdi-greater-than</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </router-link>

          <!-- #2 -->
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-facebook</v-icon>
                Facebook
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-check-circle</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <!-- #3 -->
          <v-divider></v-divider>
          <router-link :to="{ name: 'Verify ID' }">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-passport</v-icon>
                ID</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
          </router-link>
          <!-- #4 -->
          <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="secondary--text">mdi-email</v-icon>
                  E-mail</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon class="secondary--text">mdi-check-circle</v-icon>
              </v-list-item-icon>
            </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>