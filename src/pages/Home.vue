<template>
  <v-app>
    <div>
      <v-app-bar class="red accent-4">
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
            <!-- <v-icon color="#fafafa" >LOGOUT</v-icon> -->
            <v-icon large color="white darken-2">
              mdi-arrow-up-bold-box-outline
            </v-icon>
          </v-btn>
        </span>
      </v-app-bar>
    </div>
    <v-container>
      <v-row>
        <v-flex class="text-center">
          <v-btn
            large
            router
            to="/viewAllCars"
            class="red accent-4  btn-style "
          >
            Explore Cars
          </v-btn>
        </v-flex>
        <v-flex class="text-center">
          <v-btn large router to="/addCar" class="red accent-4  btn-style ">
            add Car
          </v-btn>
        </v-flex>
      </v-row>

      <v-layout row wrap>
        <v-col>
          <v-carousel :show-arrows="false">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      items: [
        {
          src: "https://wallpaperset.com/w/full/c/a/0/263730.jpg",
        },
        {
          src: "https://wallpaperset.com/w/full/8/e/5/135751.jpg",
        },
        {
          src:
            "https://image.cnbcfm.com/api/v1/image/105807049-1553189463674bugatti.jpg?v=1553189697",
        },
        {
          src: "https://wallpaperaccess.com/full/48895.jpg",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["loggedIn"]),
    
      loggedIn() {
        return this.loggedIn;
     
    },
  },
  methods: {
    ...mapActions(["destroyToken"]),
    onCreated() {
      this.destroyToken()
        .then((response) => {
          console.log(response);
          this.$router.push("/signin");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
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
