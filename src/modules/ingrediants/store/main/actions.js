import IngrediantsService from "../../services/ingrediants-service";

import ActionsTypes from '../types/actions-types';
import MutationsTypes from '../types/mutations-types';


const actions = {
  async [ActionsTypes.createNewIngredaint]({ commit }, ingrediant) {
    const ingredinatService = new IngrediantsService();
    const reply = await ingredinatService.sendRequestToCreateNewIngrediant(
      ingrediant
    );

    /**
     * reply from backend will be like
     * { message, data}
     * or
     * { message, error}
     */
    if (reply) {
      commit(MutationsTypes.addIngrediant, reply.data.data);
    }
  },

  async getIngrediants({ commit }) {
    const ingredinatService = new IngrediantsService();
    const reply = await ingredinatService.sendRequestToGrabIngrediants();
    if (reply) {
      commit("getIngrediants", reply.data.ings);
    }
  },
};

export default actions;
