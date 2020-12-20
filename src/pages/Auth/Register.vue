<template>
  <div class="bg">
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
          <v-card class="mx-auto mt-5 pa-4 text-center secondary text-no-wrap" max-width="1500" id="limited-products" >
            <!-- <v-alert :value="userExisted" color="error" icon="warning">
              This User already Exists , Try a different set of Data.
            </v-alert> -->
            <v-card-text>
              <v-container>
                <form @click="onSignUp">
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
                        name="email"
                        label="Email"
                        id="email"
                        v-model="email"
                        type="text"
                        color="#D50000"
                        class="myfont"
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
                        type="text"
                        color="#D50000"
                        class="myfont"
                        required
                      >
                        {{ password }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-btn class="red accent-4 color myfont">
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
      name: "",
      email: "",
      password: "",
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
        .then((res) => {
          console.log("SignUp succeeded");
          this.$router.push("/signin");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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

.padding {
  padding-top: 40px;
}

.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("https://www.supercars.net/blog/wp-content/uploads/2020/01/Ferrari-F40.jpg")
    no-repeat center center;
  background-size: cover;
  transform: scale(1);
}
</style>
