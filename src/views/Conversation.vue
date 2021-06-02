<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>You are talking to:</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>
        <v-col cols="12" class="pt-0">
            <ConversationCard :user="user"/>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import ConversationCard from "@/components/Messages/ConversationCard.vue";

export default {
  name: "Messages",
  components: {
    TheLoader,
    ConversationCard,
  },
  data() {
    return {
      loading: true,
      conversation: true // to DELETE
    };
  },
  async mounted() {
    const id = this.$route.params.id
    await this.$store.dispatch("fetchUser", id);
    this.loading = false;
  },
  computed: {
    user() {
      return this.$store.state.User.user;
    },
  },
};
</script>

<style scoped lang="css">
</style>