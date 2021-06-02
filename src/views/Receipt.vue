<template>
  <div class="container">
    <TheLoader v-if="loading" />
    <section v-else>
      <img src="../../public/img/logo.png" alt="e-pant" width="30%" />
      <v-row class="background-image">
        <v-col cols="12" class="mt-6 d-flex">
          <h1>Receipt Overview</h1>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-card
            elevation="3"
            rounded="xl"
            align="center"
            height="max-content"
            class="pb-10"
          >
            <div class="pt-6" align="center">
              <h3 class="text-uppercase text--headlineLight">
                Your receipt - overview
              </h3>
              <small class="mb-0 pb-0">kl. 11:30, 22/09/2021</small>
            </div>
            <div class="pt-6" align="center">
              <h4 class="text-uppercase text--headlineLight">
                You have received points for
              </h4>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-center text-uppercase">Value</th>
                      <th class="text-center text-uppercase">Amount</th>
                      <th class="text-center text-uppercase">Money Received</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.id">
                      <td class="text-center">{{ item.value }}</td>
                      <td class="text-center">{{ item.amount }}</td>
                      <td class="text-center">{{ item.money }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr class="primary">
                      <th class="text-center white--text text-uppercase">
                        Total
                      </th>
                      <th class="text-center white--text text-uppercase">
                        29 p.
                      </th>
                      <th class="text-center white--text text-uppercase">
                        44,50 kr
                      </th>
                    </tr>
                  </thead>
                </template>
              </v-simple-table>
              <v-row justify="center" class="pb-0">
                <v-col cols="10">
                  <p class="mt-4">
                    Nice job! <br />
                    You earned yourself
                  </p>
                  <h2 class="secondary--text display-1 font-weight-bold">
                    22 points
                  </h2>
                  <p class="primary--text">
                    Use these points to redeem treats on Graitor's official app!
                  </p>
                </v-col>
              </v-row>
            </div>
          </v-card>
          <div align="center" class="mb-15">
            <v-btn
              class="primary white--text font-weight-bold mt-5 mb-10"
              width="80%"
              rounded
              large
              disabled
              >Go to graitor's app</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TheLoader from "@/components/app/TheLoader.vue";

export default {
  name: "PostDetails",
  components: {
    TheLoader,
  },
  data() {
    return {
      loading: true,
      items: [
        { id: 1, value: "1,00 kr", amount: "19 p.", money: "19 kr" },
        { id: 2, value: "1,50 kr", amount: "3 p.", money: "4,50 kr" },
        { id: 3, value: "3,00 kr", amount: "7 p.", money: "21 kr" },
      ],
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style scoped lang="css">
</style>