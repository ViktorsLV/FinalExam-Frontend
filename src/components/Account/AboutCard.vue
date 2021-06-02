<template>
  <div v-if="user.about">
    <h4 v-if="currentUser.id === user.id" class="headlineLight--text">About You </h4>
    <h4 v-else class="headlineLight--text">About {{ user.firstName }}</h4>
    <v-card
      rounded="xl"
      elevation="5"
      min-height="100px"
      max-height="max-content"
    >
      <p class="py-3 px-4">{{ user.about }}</p>
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
  computed: {
    currentUser() {
      return this.$store.state.CurrentUser.currentUser;
    },
  },
};
</script>