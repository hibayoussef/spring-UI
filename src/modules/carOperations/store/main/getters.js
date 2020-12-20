import GettersTypes from '../types/getters-types'

const getters = {
    [GettersTypes.GET_CAR_FORM_GETTER](state) {
        return state.loadedCar;
    } ,
    [GettersTypes.GET_HEADERS_TABLE_GETTER](state){
        return state.headers;
    }
}
 
export default getters;