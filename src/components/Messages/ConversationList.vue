<template>
  <div>
    <v-list>
      <router-link :to="{ name: 'Message User', params: { id: 3 } }">
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
              <!-- <v-list-item-title> {{user.firstName}} {{user.lastName}} </v-list-item-title> -->
              <v-list-item-title class="font-weight-bold">
                Evan You
              </v-list-item-title>
              <v-list-item-subtitle
                >Vue is the best framework</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-row align="center" justify="end">
              <span class="caption">Jun 21st, 2021</span>
            </v-row>
          </v-list-item>

          <v-divider></v-divider>
        </v-list-item-group>
      </router-link>
      <router-link :to="{ name: 'Message User', params: { id: 3 } }">

        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-avatar color="grey lighten-1">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHair&accessoriesType=none&hairColor=Green&facialHairType=Blank&clotheType=Hoodie&clotheColor=Red&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Black"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <!-- <v-list-item-title> {{user.firstName}} {{user.lastName}} </v-list-item-title> -->
              <v-list-item-title class="font-weight-bold">
                You Evan
              </v-list-item-title>
              <v-list-item-subtitle
                >I will be at your door at</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-row align="center" justify="end">
              <span class="caption">Jun 15th, 2021</span>
            </v-row>
          </v-list-item>

          <v-divider></v-divider>
        </v-list-item-group>
      </router-link>
      <router-link :to="{ name: 'Message User', params: { id: 3 } }">

        <v-list-item-group color="primary" >
          <v-list-item>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Red&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <!-- <v-list-item-title> {{user.firstName}} {{user.lastName}} </v-list-item-title> -->
              <v-list-item-title class="font-weight-bold">
                John Doe
              </v-list-item-title>
              <v-list-item-subtitle
                >Hey, what time should I pickup</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-row align="center" justify="end">
              <span class="caption">Apr 11th, 2021</span>
            </v-row>
          </v-list-item>

          <v-divider></v-divider>
        </v-list-item-group>
      </router-link>
    </v-list>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>