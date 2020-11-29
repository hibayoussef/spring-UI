<template>
  <v-app>
    <div>
      <v-app-bar class="grey darken-4">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          fab
          color="grey lighten-5"
        ></v-app-bar-nav-icon>

        <v-toolbar-title class="myfont font color size"
          ><router-link to="/" tag="span">CarsWBB</router-link></v-toolbar-title
        >

        <v-spacer></v-spacer>

        <span class="span-header">
          <v-btn @click="onCreated" icon class="pl-8 myfont">
            <v-icon color="#fafafa">LOGOUT</v-icon>
          </v-btn>
        </span>
      </v-app-bar>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["loggedIn"]),
    computed: {
      loggedIn() {
        return this.loggedIn;
      },
    },
  },
  methods: {
    ...mapActions(["destroyToken"]),
      onCreated() {
      this.destroyToken()
        .then((response) => {
            console.log(response)
            this.$router.push("/signin");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.font {
  font-size: 23pt;
}
.myfont {
  font-family: "Mansalva", cursive;
}
.color {
  color: #fafafa;
}
.size {
  font-weight: bold;
}

.span-header {
  display: flex;
  flex: 0.3 1 auto;
  flex-direction: row;
  justify-content: space-around;
}
</style>
