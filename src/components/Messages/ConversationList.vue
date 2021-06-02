<template>
  <div>
    <v-list>
      <router-link :to="{ name: 'Message User', params: { id: 1 } }">
        <v-list-item-group color="primary" v-for="(n, index) in 4" :key="index">
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
                >Lorem, ipsum dolor sit...</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-row align="center" justify="end">
              <span class="caption">12/01/21</span>
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