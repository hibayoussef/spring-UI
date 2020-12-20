
import MutationsTypes from '../types/mutations-types';

const mutations = {
  [MutationsTypes.addIngrediant](state, data) {
    state.ingrediants.push(data);
  },

  getIngrediants(state, data) {
    state.ingrediants = data;
  },
};

export default mutations;
