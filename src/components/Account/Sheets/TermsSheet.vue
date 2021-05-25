<template>
  <div class="text-center">
    <v-bottom-sheet v-model="termsSheet" inset >
      <v-sheet class="text-left" height="90vh">
        <div align="right">
          <v-btn
            class="mt-6"
            text
            color="error"
            @click="termsSheet = false"
          >
            close
          </v-btn>
        </div>
         <v-card flat>
          <v-card-title class="font-weight-bold">e-pant Terms &amp; Conditions</v-card-title>
          <v-card-subtitle class="font-italic">Last revised April 29, 2021</v-card-subtitle>
          <v-card-text style="height: 80vh">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            deleniti aperiam itaque iusto ipsa. Doloribus maiores, obcaecati
            voluptate aperiam cumque earum temporibus repudiandae quisquam sunt
            consectetur aliquam assumenda consequatur voluptatibus quis odio
            unde soluta laborum ex delectus repellendus rem minima molestias
            porro! Non accusamus dolores a numquam ea eum possimus laboriosam
            iusto maxime quae qui quisquam nemo repellat quis voluptates
            veritatis repellendus voluptate at facilis provident ex nihil, quam
            minus architecto. Repellat ducimus aut nisi, natus deserunt
            necessitatibus aspernatur facilis a eveniet dolor enim odit dolore?
            Provident enim quisquam velit assumenda, quo, hic commodi fugit
            eaque debitis voluptates, totam repellendus inventore. Sunt eveniet
            repellat doloremque! Iste atque tempora molestiae. Explicabo
            dicta repellat rem sit hic nesciunt dolore?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sint eveniet, ipsam impedit illo
            minima nihil ad nemo beatae voluptates saepe natus aut alias, iure
            dolor excepturi veniam recusandae id assumenda quia eum provident
            sapiente nulla. Earum consequatur natus voluptatibus fugiat. Lorem
            ipsum dolor sit amet
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data() {
      return {
          termsSheet: false
      }
  },
  methods: {
    changeState(opened) {
      if (opened == true) this.termsSheet = opened;
    },
  }, 
};
</script>