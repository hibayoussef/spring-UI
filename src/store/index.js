
import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user';
import { carsStore } from '../modules/carOperations/store/car-store';

Vue.use(Vuex);

export const store = new Vuex.Store({

    modules:{
        user,
        carsStore
    }
})

