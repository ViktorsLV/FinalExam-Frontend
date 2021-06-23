<template>
  <v-card rounded="xl" >
    <v-bottom-navigation
      :value="value"
      background-color="secondary"
      fixed
      class="pt-2 menu"
      grow
      width="90%"
    >
      <v-btn
        v-for="item in items"
        :key="item.id"
        router
        :to="item.route"
        color="white"
        class="item black--text"
        link
        plain
        active-class="primary--text"
      >
        <span class="white--text"> {{ item.title }} </span>
        <v-icon class="white--text"> {{ item.icon }} </v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      items: [
        { id: 1, title: "Home", icon: "mdi-home", route: "/home" },
        {
          id: 2,
          title: "Tasks",
          icon: "mdi-format-list-bulleted-square",
          route: "/tasks",
        },
        { id: 3, title: "Add Posts", icon: "mdi-plus-circle", route: "/add-post" },
        { id: 4, title: "Messages", icon: "mdi-message", route: "/messages" },
        { id: 5, title: "Account", icon: "mdi-account", route: "/account" },
      ],
    };
  },
};
</script>

<style scoped>
.item {
  height: 100%;
}

.menu {
  margin-left: 5vw;
  margin-bottom: 8vw;
}
</style>