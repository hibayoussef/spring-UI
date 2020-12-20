<template>
  <v-app>
    <v-container>
      <v-layout row class="padding">
        <v-flex xs12 sm6 offset-sm3>
          <v-card
            :class="`rounded-lg`"
            class="pa-4 text-center secondary"
            :style="'border: 3px solid #D50000;'"
          >
            <v-card-text>
              <v-container class="margin">
                <!-- <form @submit.prevent="onCreateCar"> -->
                <form>
                  <v-layout row>
                    <p class="size text-left fontcolor font-weight-bold">
                      Please fill in the car information you want to add:
                    </p>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="name"
                        label="Name"
                        id="name"
                        v-model="name"
                        type="text"
                        color="#D50000"
                        class="myfont"
                        required
                      >
                        {{ name }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="price"
                        label="Price"
                        id="price"
                        v-model="price"
                        type="price"
                        color="#D50000"
                        class="myfont"
                        required
                      >
                        {{ price }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="number of seats"
                        label="Number of Seats"
                        id="number of seats"
                        v-model="numberofseats"
                        type="number of seats"
                        color="#D50000"
                        class="myfont"
                        required
                      >
                        {{ numberofseats }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                  <!-- :disabled="!formIsValid" -->
                  <v-layout row>
                    <v-flex xs12 class="text-right">
                      <v-btn
                        class="red accent-4 color myfont"
                        @click="onCreateCar"
                      >
                        Add
                      </v-btn>
                      <v-btn class="red accent-4 color myfont ml-3">
                        Cancel
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import ActionsTypes from "../store/types/actions-types";

export default {
  data() {
    return {
      name: " ",
      price: " ",
      numberofseats: " ",
    };
  },
  created() {},
  mounted() {},
  methods: {
    onCreateCar() {
      this.createcardispatcher({
        name: " ",
        price: " ",
        numberofseats: " ",
      })
    },
    ...mapActions({
      createcardispatcher: ActionsTypes.ADD_NEW_CAR_ACTION,
    }),
  },
  computed: {
    // formIsValid() {
    //   return this.name != "" && this.price != "" && this.numberofseats != "";
    // },
  },
};
</script>

<style scoped>
.myfont {
  font-family: "Mansalva", cursive;
}
.color {
  color: #fafafa;
}

.fontcolor {
  color: white;
}

.margin {
  margin-top: 10px;
}

.padding {
  padding-top: 40px;
}

.size {
  font-size: 16px;
}
</style>
