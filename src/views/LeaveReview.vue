<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else class="pb-10">
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="background-image">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Post</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>
        <v-col cols="12" class="pt-0" align="center">
          <v-card outlined rounded="xl" elevation="5" align="center">
            <h3 class="mt-4 primary--text">Rate Your Experience!</h3>
            <v-card-text>
              Rate the user by selecting the rating below and providing a reason
              for your rating
              <div class="text-center mt-8">
                <v-rating
                  v-model="rating"
                  color="primary"
                  background-color="grey lighten-1"
                  empty-icon="$ratingFull"
                  half-increments
                  hover
                  large
                ></v-rating>
              </div>
              <v-textarea
                v-model.trim="message"
                dense
                type="text"
                :rules="messageRules"
                :counter="150"
                rounded
                label="Message to user..."
                required
                outlined
                height="130px"
                class="mt-5"
                background-color="white"
              ></v-textarea>
            </v-card-text>
          </v-card>
          <TheButton
            :text="'Submit'"
            class="mt-2 mb-5"
            @click="submitReview()"
          />
        </v-col>
        <v-col cols="12" class="mt-2">
          <h1>Booked By:</h1>
          <UserCardBooked
            :userId="singlePost.booking.author"
            :message="false"
          />
        </v-col>
        <v-col cols="12" class="pt-0">
          <h1>Your Post:</h1>
          <Post
            class="mb-15"
            :showArrow="false"
            :showProfile="false"
            :post="singlePost"
          />
        </v-col>
        <!-- <v-col cols="12" class="mt-2" v-if="singlePost.status !== 'booked'">
          <h1>User</h1>
          <UserCardSmall :user="user" />
          <router-link :to="{ name: 'Booking', params: { id: singlePost.id } }" >
            <TheButton v-if="currentUser.id != user.id" :text="'start booking'" class="mt-8"/>
          </router-link>
        </v-col>
         -->
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import Post from "@/components/Post/Post.vue";
// import UserCardSmall from "@/components/User/UserCardSmall.vue";
import UserCardBooked from "@/components/User/UserCardBooked.vue";
import TheButton from "@/components/app/TheButton.vue";

export default {
  name: "PostDetails",
  components: {
    TheLoader,
    Post,
    // UserCardSmall,
    UserCardBooked,
    TheButton,
  },
  data() {
    return {
      loading: true,
      rating: 1,
      message: "",
      messageRules: [
        (v) => v.length <= 150 || "Review must be less than 150 characters",
      ],
    };
  },
  methods: {
    async submitReview() {
      try {
        await this.$store.dispatch("reviewPost", {
          postId: this.$route.params.id,
          rating: this.rating,
          message: this.message,
        });
        this.$router.push("/tasks");
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    singlePost() {
      return this.$store.getters.singlePost;
    },
    user() {
      return this.$store.getters.singlePost.author;
    },
    currentUser() {
      return this.$store.state.CurrentUser.currentUser;
    },
  },
  async mounted() {
    const id = this.$route.params.id;
    await this.$store.dispatch("getSinglePost", id);
    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>