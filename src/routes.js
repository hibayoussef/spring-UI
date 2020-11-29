import Home from "./pages/Home.vue";
import Register from "./pages/Auth/Register.vue";
import Login from "./pages/Auth/login.vue";

export const routes = [
  { path: "/home", name: "Hello", component: Home },
  { path: "/signup", name: "SignUp", component: Register },
  { path: "/signin", name: "SignIn", component: Login }
];
