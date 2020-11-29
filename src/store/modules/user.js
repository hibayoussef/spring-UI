import axios from "axios";

export default {
  state: {
    token: localStorage.getItem("accessToken") || null,
  },

  getters: {
    loggedIn(state) {
      return state.token !== null;
    }
  },

  mutations: {
    retrieveToken(state, userData) {
      state.token = userData.token;
    },

    destroyToken(state) {
      state.token = null;
    },
  },
  actions: {
    destroyToken({ commit }) {
      if (this.getters.loggedIn) {
        localStorage.removeItem("accessToken");
        commit("destroyToken");
        this.$router.push("/signin");
      }
    },

    SIGNUP(userData) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/signup`, {
            name: userData.name,
            email: userData.email,
            password: userData,
          })
          .then((res) => {
            console.log(res);
            resolve(res);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },

    LOGIN({ commit }, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post("/signin", {
            email: userData.email,
            password: userData.password,
          })
          .then((response) => {
            console.log(response);
            const token = response.data.accessToken;
            commit("retrieveToken", token);
            localStorage.setItem("accessToken", token);
            resolve(response);
          })
          .catch((error) => {
            console.log("some errors was happened:", error);
            reject(error);
          });
      });
    },
  },
};
