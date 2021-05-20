<template>
  <div>
    <v-card rounded="xl" eelevation="5">
      <v-list rounded="xl">
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title> {{user.firstName}} {{user.lastName}} </v-list-item-title>
              <v-rating
                v-model="rating"
                background-color="black"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="12"
              ></v-rating>
            </v-list-item-content>

            <v-list-item-icon align="center" justify="end">
              <v-icon large class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                7 ratings</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon large class="secondary--text">mdi-greater-than</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 2.7,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>