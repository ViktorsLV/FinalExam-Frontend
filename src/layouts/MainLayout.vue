<template>
  <div>
      <router-view class="mb-10" />
    <TheNavbar />
  </div>
</template>

<script>
import TheNavbar from "@/components/app/TheNavbar";

export default {
  components: {
    TheNavbar,
  },
};
</script>