import MutationsTypes from '../types/mutations-types';


const mutations = {
  [MutationsTypes.ADD_NEW_CAR_MUTATION](state, data) {
    state.loadedCar.push(data);
  },
  [MutationsTypes.GET_ALL_CARS_MUTATION](state , data){
    state.loadedCar = data 
  },
  [MutationsTypes.DELETE_CAR_MUTATION](state,data){
    state.loadedCar = data
  },
  [MutationsTypes.GET_CAR_BY_SELLING_DATE_MUTATION](state , data){
    state.loadedCar = data
  },
  [MutationsTypes.GET_REPORT_MUTATION](state , data){
    // The Data that comes from api in action => I want to put it in reports arrays
    state.reports = data
  },
  [MutationsTypes.CREATE_CAR_WITH_OPTEMISTIC_LOCK](state , data){
    state.cars = data
  }
};

export default mutations;
