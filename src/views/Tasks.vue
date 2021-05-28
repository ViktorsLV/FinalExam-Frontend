<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="">
        <v-col cols="12" class="mt-6">
          <h1>Home</h1>
          <v-tabs
            v-model="activeTab"
              background-color="transparent"
            grow
            slider-size="5"
            class="mb-10"
          >
            <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact class="text-weight-bold">
              {{ tab.name }}
            </v-tab>
          </v-tabs>
          <router-view></router-view>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";

export default {
  name: "Home",
  components: {
    TheLoader,
  },
  data() {
    return {
      loading: true,
      tab: 0,
      activeTab: `/tasks`,
      tabs: [
        { id: 1, name: "My Posts", route: `/tasks` },
        { id: 2, name: "My Deliveries", route: `/tasks/my-deliveries` },
      ],
    };
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>