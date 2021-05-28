<template>
  <div>
    <v-card class="mx-auto lightGreen" outlined rounded="xl" elevation="5">
      <v-card-actions>
        <v-list-item class="grow">
          <router-link
            :to="{ name: 'My Profile', params: { id: post.author.id } }"
          >
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>
          </router-link>

          <router-link
            :to="{ name: 'My Profile', params: { id: post.author.id } }"
          >
            <v-list-item-content>
              <v-list-item-title
                >{{ post.author.firstName }}
                {{ post.author.lastName }}</v-list-item-title
              >
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
          </router-link>
          <v-row align="center" justify="end">
            <span class="caption"
              >Posted on
              {{ moment(post.published_at).format("MMM Do, YYYY") }}</span
            >
          </v-row>
        </v-list-item>
      </v-card-actions>

      <v-list-item>
        <v-list-item-content class="ml-2">
          <v-list-item-subtitle
            ><v-icon class="secondary--text">mdi-google-maps</v-icon>
            {{ post.city }}, {{ post.street }} {{ post.houseNumber }},
            {{ post.zip }}</v-list-item-subtitle
          >
          <v-list-item-subtitle>
            <span>
              <v-icon class="secondary--text">mdi-calendar</v-icon>
              {{ moment(post.date).format("MMM Do, YYYY") }}
            </span>
            <!-- <span class="ml-6">
                <v-icon class="secondary--text">mdi-clock</v-icon>
                {{ moment(post.time).calendar() }}
              </span> -->
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="pt-0">
        <v-list-item class="grow">
          <v-list-item-content>
            <v-list-item-title>
              <div v-if="post.bagNumber > 4">
                <v-icon large class="secondary--text">mdi-trash-can</v-icon>x{{
                  post.bagNumber
                }}
              </div>
              <v-icon
                v-else
                large
                class="secondary--text"
                v-for="(n, index) in post.bagNumber"
                :key="n.id"
                :index="index"
                >mdi-trash-can</v-icon
              >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>

      <v-list-item class="grow">
        <v-list-item-content class="ml-2">
          <v-list-item-title>Type of bag</v-list-item-title>
          <v-list-item-subtitle>{{ post.bagType }}</v-list-item-subtitle>

          <v-list-item-title class="mt-3">Preferences</v-list-item-title>
          <v-list-item-subtitle>{{ post.comments }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      rating: 4.3,
      moment: moment,
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>vue