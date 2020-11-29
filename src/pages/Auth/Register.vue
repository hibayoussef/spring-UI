<template>
  <div>
    <v-container>
      <!-- <v-layout row v-if="error">
        <v-flex sx12 sm6 offset-sm3> -->
          <!-- <app-alert
            @dismissed="onDissmised"
            :v-text="error.message"
          ></app-alert> -->
        <!-- </v-flex> -->
      <!-- </v-layout> -->
      <v-layout row class="padding">
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <!-- <v-alert :value="userExisted" color="error" icon="warning">
              This User already Exists , Try a different set of Data.
            </v-alert> -->
            <v-card-text>
              <v-container class="margin">
                <form @click="onSignUp">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="name"
                        label="Name"
                        id="name"
                        v-model="name"
                        type="text"
                        color="black"
                        required
                      >
                        {{ name }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Email"
                        id="email"
                        v-model="email"
                        type="text"
                        color="black"
                        required
                      >
                        {{ email }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        v-model="password"
                        type="password"
                        color="black"
                        required
                      >
                        {{ password }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-btn class="grey darken-4 color">
                        Sign up
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
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {

        userExisted: false,
        name: "",
        email: "",
        password: ""
        // rules: {
        //   required: (value) => !!value || "Required",
        //   email: (value) => {
        //     const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
        //     return pattern.test(value) || "Invalid Email";
        //   },
        // },
    };
  },

  methods: {
    ...mapActions(["SIGNUP"]),
    onSignUp() {
        this.SIGNUP({
          name: this.name,
          email: this.email,
          password: this.password,
        })
          .then(res => {
            console.log('SignUp succeeded')
            this.$router.push("/signin");
            console.log(res)
          })
          .catch((error) => {
            this.userExisted = true;
            console.log(error)
          });
    },
  },
};
</script>

<style scoped>
.color {
  color: #fafafa;
}


.margin{
  margin-top: 30px;
}


.padding{
  padding-top: 40px;
}
</style>
