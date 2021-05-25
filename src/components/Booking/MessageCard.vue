<template>
  <div>
    <h4 class="headlineLight--text">Message to owner</h4>
    <!-- <v-card rounded="xl" elevation="5" height="150px"> -->
    <v-textarea
      v-model.trim="message"
      dense
      type="text"
      rounded
      label="E.g. about pick-up time or precausions..."
      required
      outlined
      height="150px"
      class="mt-1"
      background-color="white"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style>
</style>