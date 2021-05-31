<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="background-image">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Edit Your Post</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>

        <v-col cols="12" class="pb-0 mt-5">
          <v-autocomplete
            v-model.trim="bagType"
            :items="bagTypes"
            dense
            rounded
            label="Type of bag"
            outlined
            required
            background-color="white"
          ></v-autocomplete>
        </v-col>
        <v-col cols="6" class="pt-0">
          <v-text-field
            v-model.trim="bagNumber"
            dense
            type="number"
            rounded
            label="Number of bags"
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="pt-0">
          <v-text-field
            v-model.trim="weight"
            dense
            type="number"
            rounded
            label="Aprrox. weight (g)"
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pb-0 pt-0">
          <v-text-field
            v-model.trim="city"
            dense
            type="text"
            rounded
            label="Town/City"
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-text-field
            v-model.trim="street"
            dense
            type="text"
            rounded
            label="Street"
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="pt-0">
          <v-text-field
            v-model.trim="doorNumber"
            dense
            type="text"
            rounded
            label="Door Number"
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="pt-0">
          <v-text-field
            v-model.trim="zipCode"
            label="ZIP Code"
            type="number"
            dense
            rounded
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="pt-0">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Date"
                v-bind="attrs"
                v-on="on"
                readonly
                dense
                rounded
                required
                outlined
                background-color="white"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" :min="getStartDate" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="6" class="pt-0">
          <v-dialog
            ref="dialog"
            v-model="modal2"
            :return-value.sync="time"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                label="Time"
                readonly
                v-bind="attrs"
                v-on="on"
                dense
                rounded
                required
                outlined
                background-color="white"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="modal2"
              v-model="time"
              full-width
              format="24hr"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal2 = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(time)">
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" class="pt-0 pb-0">
          <v-textarea
            v-model.trim="comments"
            dense
            type="text"
            rounded
            label="Additional comments"
            required
            outlined
            background-color="white"
          ></v-textarea>
        </v-col>

        <v-col cols="12" class="pt-0 mb-15">
          <TheButton
            :text="'save changes'"
            @click="editPost"
            :disabled="
              !date.length ||
              !time.length ||
              !city.length ||
              !street.length ||
              !doorNumber.length ||
              !bagType.length ||
              Number.isNaN(parseInt(zipCode)) ||
              Number.isNaN(parseInt(bagNumber)) ||
              Number.isNaN(parseInt(weight))
                ? true
                : false
            "
          />
          <v-btn
            @click="openModal"
            class="white--text font-weight-bold mt-2 mb-10"
            width="100%"
            color="delete"
            rounded
            large
            >DELETE POST</v-btn
          >
        </v-col>
      </v-row>
      <PostDeleteModal ref="deletePostModal" :postId="id"/>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import TheButton from "@/components/app/TheButton.vue";
import PostDeleteModal from "@/components/Post/PostDeleteModal.vue";

export default {
  name: "PostDetails",
  components: {
    TheLoader,
    TheButton,
    PostDeleteModal
  },
  data() {
    return {
      loading: true,
      id: "",
      today: new Date(), 

      /* 1st */
      bagTypes: [
        "Dansk Retur System",
        "Black Waste Bag",
        "Small Plastic Bag",
        "Other",
      ],
      bagType: "",
      bagNumber: "",
      weight: "",

      /* 2nd */
      city: "",
      street: "",
      doorNumber: "",
      zipCode: "",

      /* 3rd */
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      comments: "",
      time: "12:00",
      modal2: false,
    };
  },
  methods: {
    async editPost() {
      // e.preventDefault();
      try {
        await this.$store.dispatch("editPost", {
          postId: this.id,
          city: this.city,
          street: this.street,
          doorNumber: this.doorNumber,
          bagNumber: this.bagNumber,
          zip: this.zipCode,
          date: this.date,
          time: "12:00:00",
          bagWeight: this.weight,
          bagType: this.bagType,
          comments: this.comments,
        });
        this.$router.push("/tasks");
      } catch (error) {
        console.log(error);
      }
    },
    openModal() {
      this.$refs.deletePostModal.changeState(true);
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
    getStartDate() {
     const startDate = new Date();
     return startDate.toISOString().slice(0,10)
    }
  },
  async mounted() {
    this.id = this.$route.params.id;
    await this.$store.dispatch("getSinglePost", this.id);

    this.bagType = this.$store.state.Posts.post.bagType;
    this.bagNumber = this.$store.state.Posts.post.bagNumber;
    this.weight = this.$store.state.Posts.post.bagWeight;

    this.city = this.$store.state.Posts.post.city;
    this.street = this.$store.state.Posts.post.street;
    this.doorNumber = this.$store.state.Posts.post.doorNumber;
    this.zipCode = this.$store.state.Posts.post.zip;

    this.date = this.$store.state.Posts.post.date;
    this.time = this.$store.state.Posts.post.time;
    this.comments = this.$store.state.Posts.post.comments;
    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>