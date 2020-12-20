// import axios from "axios";

// export default {
//   namespace: true,
//   state: {
//     token: localStorage.getItem("accessToken") || null,
//   },

//   getters: {
   
//   },

//   mutations: {
  
//   },
//   actions: {

//     VIEW_CARS({ commit }, data) {
//       return new Promise((resolve, reject) => {
//         const Data = JSON.stringify({
//             data : data.data
//         });
//         axios
//           .get("/", Data)
//           .then((response) => {
//             console.log(response);
//             const token = response.data.accessToken;
//             commit("retrieveToken", token);
//             localStorage.setItem("accessToken", token);
//             resolve(response);
//           })
//           .catch((error) => {
//             console.log(error);
//             reject(error);
//           });
//       });
//     },
//   },
// };
