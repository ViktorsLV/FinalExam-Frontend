<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="background-image">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Edit Your Details</h1>
          <v-spacer></v-spacer>
          <v-icon large @click="$router.go(-1)" class="secondary--text"
            >mdi-less-than</v-icon
          >
        </v-col>
        <!-- About You -->
        <v-col cols="12" class="pt-0 pb-0 mt-6">
          <h4 class="headlineLight--text">About you</h4>
        </v-col>
        <!-- <v-col cols="12" class="pt-2 pb-0">
          <v-file-input
            :rules="avatarRules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera" 
            label="Avatar"
            v-model.trim="profile_image"
            required
            rounded
            outlined
            background-color="white"
          ></v-file-input>
        </v-col> -->
        <v-col cols="6" class="pt-2 pb-0">
          <v-text-field
            v-model.trim="firstName"
            type="text"
            label="First Name"
            rounded
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="pt-2 pb-0">
          <v-text-field
            v-model.trim="lastName"
            type="text"
            rounded
            label="Last Name"
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0 pb-0">
          <v-textarea
            v-model.trim="about"
            :rules="aboutRules"
            :counter="150"
            type="text"
            rounded
            label="Few words about yourself"
            outlined
            background-color="white"
          ></v-textarea>
        </v-col>

        <!-- Personal Info -->
        <v-col cols="12" class="pt-0 pb-0">
          <h4 class="headlineLight--text">Personal information</h4>
        </v-col>
        <v-col cols="6" class="pt-2 pb-0">
          <!-- <v-text-field
            
          ></v-text-field> -->
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="birthdate"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model.trim="birthdate"
                type="text"
                rounded
                label="Birthdate"
                required
                outlined
                background-color="white"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="birthdate" :max="getEndDate" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(birthdate)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="6" class="pt-2 pb-0">
          <v-text-field
            v-model.trim="city"
            type="text"
            rounded
            label="City"
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0 pb-0">
          <v-text-field
            v-model.trim="mobileNumber"
            type="text"
            rounded
            label="Mobile number"
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0 pb-0">
          <v-text-field
            v-model.trim="occupation"
            type="text"
            rounded
            label="Occupation"
            required
            outlined
            background-color="white"
          ></v-text-field>
        </v-col>

        <v-col cols="12" class="pt-0 mb-15">
          <TheButton
            class="mb-10"
            :text="'save changes'"
            @click="editProfile"
            :disabled="!firstName.length || !lastName.length ? true : false"
          />
          <!-- <v-btn
           
            @click="openModal"
            class="white--text font-weight-bold mt-2 mb-10"
            width="100%"
            color="delete"
            rounded
            large
            >DELETE POST</v-btn
          > -->
        </v-col>
      </v-row>
      <!-- <PostDeleteModal ref="deletePostModal" :postId="id"/> -->
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";
import TheButton from "@/components/app/TheButton.vue";
// import PostDeleteModal from "@/components/Post/PostDeleteModal.vue";

export default {
  name: "PostDetails",
  components: {
    TheLoader,
    TheButton,
  },
  data() {
    return {
      loading: true,
      id: "",
      modal: false,
      aboutRules: [
        (v) => v.length <= 150 || "Text must be less than 150 characters",
      ],
      avatarRules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],

      profile_image: null,
      firstName: "",
      lastName: "",
      about: "",

      birthdate: new Date().toISOString().substr(0, 10),
      city: "",

      mobileNumber: "",
      occupation: "",
    };
  },
  methods: {
    async editProfile() {
      try {
        await this.$store.dispatch("editProfile", {
          id: this.id,
          // profile_image: this.profile_image,
          firstName: this.firstName,
          lastName: this.lastName,
          about: this.about,
          birthdate: this.birthdate,
          city: this.city,
          mobileNumber: this.mobileNumber,
          occupation: this.occupation,
        });
        this.$router.push(`/account/profile/${this.id}`);
      } catch (error) {
        console.log(error);
      }
    },
    // openModal() {
    //   this.$refs.deletePostModal.changeState(true);
    // },
  },
  computed: {
    user() {
      return this.$store.state.User.user;
    },
    getEndDate() {
      const endDate = new Date();
      return endDate.toISOString().slice(0, 10);
    },
  },
  mounted() {
    this.id = this.$store.state.User.user.id;
    // this.profile_image = this.$store.state.User.user.profile_image.url;
    this.firstName = this.$store.state.User.user.firstName;
    this.lastName = this.$store.state.User.user.lastName;
    this.about = this.$store.state.User.user.about;
    this.birthdate = this.$store.state.User.user.birthdate;
    this.city = this.$store.state.User.user.city;
    this.mobileNumber = this.$store.state.User.user.mobileNumber;
    this.occupation = this.$store.state.User.user.occupation;

    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>