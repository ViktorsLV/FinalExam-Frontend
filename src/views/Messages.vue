<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Messages</h1>
        </v-col>
        <v-col cols="12" class="pt-0">
          <Conversation v-if="conversation"/>
          <div v-else align="center" class="mt-10">
            <img src="../../public/img/step-2.png" alt="svg" width="70%" />
            <h1>You don't have any messages</h1>
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import Conversation from "@/components/Messages/Conversation.vue";

export default {
  name: "Messages",
  components: {
    TheLoader,
    Conversation,
  },
  data() {
    return {
      loading: true,
      conversation: true // to DELETE
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>