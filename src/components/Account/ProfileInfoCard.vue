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
                <v-icon class="secondary--text"
                  >mdi-face-profile</v-icon
                >
                Age
              </v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>22</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
            
          <!-- #2 -->
          <v-divider></v-divider>
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-google-maps</v-icon>
                Location
              </v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>Aalborg</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
          <!-- #3 -->
          <v-divider></v-divider>
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-phone</v-icon>
                Phone</v-list-item-title
              >
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content align="right">
              <v-list-item-title>42529822</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <LogoutSheet ref="logoutSheet"/> -->
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>

export default {
  components: {
    // PrivacySheet,
    // TermsSheet,
    // LogoutSheet,
    // SupportSheet
  },
  methods: {
    // openSupportSheet() {
    //   this.$refs.supportSheet.changeState(true);
    // },
    
  },
};
</script>