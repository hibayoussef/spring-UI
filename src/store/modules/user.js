import axios from "axios";

export default {
  namespace: true,
  state: {
    token: localStorage.getItem("accessToken") || null,
  },

  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
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
      }
    },

    SIGNUP(userData) {
      return new Promise((resolve, reject) => {
        const Data = JSON.stringify({
          name: userData.name,
          email: userData.email,
          password: userData,
        });
        axios
          .post(`/signup`, Data)
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
        const Data = JSON.stringify({
          email: userData.email,
          password: userData.password,
        });
        axios
          .post("/signin", Data)
          .then((response) => {
            console.log(response);
            const token = response.data.accessToken;
            commit("retrieveToken", token);
            localStorage.setItem("accessToken", token);
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
  },
};
