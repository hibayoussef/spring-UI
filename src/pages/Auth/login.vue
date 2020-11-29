<template>
<v-app>
  <v-container>
    <v-layout row class="padding">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <!-- <v-alert color="error" :value="error" icon="close">some Data are Wrong Email or Password </v-alert> -->
          <v-card-text>
            <v-container class="margin">
              <form @click="onSignIn">
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
                      Sign In
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
import { mapActions } from 'vuex'

export default {
  data() {
    return {
        email: "",
        password: "",
        error: false
    };
  },
  method: {
    ...mapActions(['LOGIN']), 
    onSignIn(){
      this.LOGIN({
           email:this.email,
           password:this.password
        })
        .then(res => {
          console.log('Login succeeded')
          this.$router.push('/home');
          console.log( res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
};
</script>

<style scoped>
.color {
  color: #fafafa;
}


.margin {
  margin-top: 30px;
}


.padding {
  padding-top: 40px;
}
</style>
