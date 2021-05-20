<template>
  <div>
    <v-card elevation="3" rounded="xl" align="center" height="60vh">
      <div>
        <v-avatar class="mt-3" size="60">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <p class="subheading mb-0 pb-0">Alex Alexis</p>
        <v-rating
          v-model="rating"
          background-color="black"
          color="yellow accent-4"
          dense
          half-increments
          hover
          size="16"
        ></v-rating>
        <p class="caption mb-0 pb-0">Member since 12/01/21</p>
      </div>
     
    </v-card>
    <v-row justify="center" class="mt-2">
        <v-col cols="12">
          <v-text-field
            v-model.trim="message"
            required
            rounded
            outlined
            append-icon="mdi-send"
          ></v-text-field>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 3.8,
      message: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>