<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <h1>Add Post</h1>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
export default {
  name: "add-post",
  components: {
    TheLoader,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>