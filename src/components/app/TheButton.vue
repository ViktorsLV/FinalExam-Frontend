<template>
  <v-btn
    @click="$emit('click')"
    class="primary white--text font-weight-bold mt-2"
    width="100%"
    rounded
    large
    >{{ text }}</v-btn
  >
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "BUTTON",
      required: true,
    },
  },
};
</script>

<style>
</style>