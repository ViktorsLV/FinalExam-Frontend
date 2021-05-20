<template>
  <div>
    <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
      <v-card class="mx-auto" outlined rounded="xl" elevation="5">
        <v-card-actions v-if="showProfile">
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                >{{ post.users_permissions_user.firstName }}
                {{ post.users_permissions_user.lastName }}</v-list-item-title
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

            <v-row align="center" justify="end">
              <span class="caption"
                >Posted on
                {{ moment(post.published_at).format("MMM Do YY") }}</span
              >
            </v-row>
          </v-list-item>
        </v-card-actions>

        <v-list-item>
          <v-list-item-content class="ml-2">
            <v-list-item-subtitle
              ><v-icon class="secondary--text">mdi-google-maps</v-icon>
              {{ post.address }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <span>
                <v-icon class="secondary--text">mdi-calendar</v-icon>
                {{ moment(post.date).subtract(10, "days").calendar() }}
              </span>
              <span class="ml-6">
                <v-icon class="secondary--text">mdi-clock</v-icon> 14:20
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions class="pt-0">
          <v-list-item class="grow">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon large class="secondary--text">mdi-trash-can</v-icon>x{{
                  post.bags
                }}
              </v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end" v-if="showArrow">
              <v-icon large class="secondary--text">mdi-greater-than</v-icon>
            </v-row>
          </v-list-item>
        </v-card-actions>

        <v-list-item class="grow" v-if="showDetails">
          <v-list-item-content class="ml-2">
            <v-list-item-title>Type of bag</v-list-item-title>
            <v-list-item-subtitle>Dansk Retur System</v-list-item-subtitle>

            <v-list-item-title class="mt-3">Preferences</v-list-item-title>
            <v-list-item-subtitle
              >To be picked up at the door</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </router-link>
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
    showDetails: {
      type: Boolean,
      default: true,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
    showProfile: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>vue