<template>
  <div class="text-center">
    <v-dialog v-model="dialog">
      <v-card rounded="xl" align="center">
        <v-card-title class="font-weight-medium mx-6">
          Are you sure you want to delete this post?
        </v-card-title>

        <v-card-actions class="mt-4">
          <v-spacer></v-spacer>
          <v-btn color="secondary" outlined rounded @click="dialog = false"> Cancel </v-btn>
          <v-btn color="delete" dark rounded @click="deletePost"> Yes </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    postId: {
      required: true
    },
  },
  methods: {
    changeState(opened) {
      if (opened == true) this.dialog = opened;
    },
    async deletePost() {
      try {
        await this.$store.dispatch("deletePost", this.postId);
        this.$router.push("/tasks");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>