import Home from "./pages/Home.vue";
import Register from "./pages/Auth/Register.vue";
import Login from "./pages/Auth/login.vue";
import AddCar from './modules/carOperations/pages/addCar.vue';
import ViewAllCars from './modules/carOperations/pages/carsActions/viewAllCars.vue';
import DropDownList from './modules/carOperations/pages/carsActions/dropdownList.vue';


export const routes = [
  { path: '/', redirect: '/home'},
  { path: "/home", name: "Hello", component: Home },
  { path: "/signup", name: "SignUp", component: Register },
  { path: "/signin", name: "SignIn", component: Login },
  { path: "/addcar", name: "AddCar", component: AddCar },
  { path: "/viewallcars", name: "ViewAllCars", component: ViewAllCars },
  { path: "/dropdownlist", name: "dropdownlist", component: DropDownList }
];
