<template>
  <div class="text-center loader">
    <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
  margin-top: 40vh;
}
</style>