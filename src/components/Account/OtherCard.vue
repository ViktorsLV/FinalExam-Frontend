<template>
  <div>
    <h4 class="headlineLight--text">Other Settings</h4>
    <v-card rounded="xl" elevation="5">
      <v-list class="rounded-xl">
        <v-list-item-group color="primary">
          <!-- #1 -->
          <v-list-item @click="openSupportSheet()">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text"
                  >mdi-comment-question-outline</v-icon
                >
                Support
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
            <SupportSheet ref="supportSheet"/>
          <!-- #2 -->
          <v-divider></v-divider>
          <v-list-item @click="openPrivacySheet()">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-lock</v-icon>
                Privacy Policy
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
            <PrivacySheet ref="privacySheet" />
          </v-list-item>
          <!-- #3 -->
          <v-divider></v-divider>
          <v-list-item @click="openTermsSheet()">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text"
                  >mdi-newspaper-variant-outline</v-icon
                >
                Terms &amp; Conditions</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
            <TermsSheet ref="termsSheet" />
          </v-list-item>
          <!-- #4 -->
          <v-divider></v-divider>
          <v-list-item @click="openLogoutSheet()">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="secondary--text">mdi-logout</v-icon>
                Log out</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <LogoutSheet ref="logoutSheet"/>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import PrivacySheet from "@/components/Account/Sheets/PrivacySheet.vue";
import TermsSheet from "@/components/Account/Sheets/TermsSheet.vue";
import LogoutSheet from "@/components/Account/Sheets/LogoutSheet.vue";
import SupportSheet from "@/components/Account/Sheets/SupportSheet.vue";
export default {
  components: {
    PrivacySheet,
    TermsSheet,
    LogoutSheet,
    SupportSheet
  },
  methods: {
    openSupportSheet() {
      this.$refs.supportSheet.changeState(true);
    },
    openPrivacySheet() {
      this.$refs.privacySheet.changeState(true);
    },
    openTermsSheet() {
      this.$refs.termsSheet.changeState(true);
    },
    openLogoutSheet() {
      this.$refs.logoutSheet.changeState(true);
    },
  },
};
</script>