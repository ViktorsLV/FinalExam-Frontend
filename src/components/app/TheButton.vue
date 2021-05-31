<template>
  <v-btn
    @click="$emit('click')"
    class="white--text font-weight-bold mt-2"
    width="100%"
    color="primary"
    rounded
    large
    :disabled="disabled"
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
    disabled: {
      type: Boolean, 
      default: false
    },
  },
};
</script>

<style>
</style>