import CarsService from '../../services/cars.service';
import ActionsTypes from '../types/actions-types';
import MutationsTypes from '../types/mutations-types';


const actions = {

    // car actions to add new car
    async [ActionsTypes.ADD_NEW_CAR_ACTION]( {commit} , car)
    {
        const carService = new CarsService();
        const reply = await carService.sendRquestToCreateNewCar({car});
        if(reply){
            commit(MutationsTypes.ADD_NEW_CAR_MUTATION , reply.data.data);
        }
        console.log('the response i the action is:' , reply.data.data);
    },

    // Get All Cars action 
    async [ActionsTypes.GET_ALL_CAR_ACTION] ({commit}){
        const carsService = new CarsService();
        const reply = await carsService.viewAllCars();
        if(reply){
            commit(MutationsTypes.GET_ALL_CARS_MUTATION , reply.data.car)
        } 
        console.log('get all car action:',reply.data.car);
    },


    // delete Car action 
    async [ActionsTypes.DELETE_CAR_ACTION] ({ state } , carId){
        const carService = new CarsService();
        const reply = await carService.deleteCar({carId});
        if(reply.data.deleted){
            state.cars.splice(carId,1)
            // commit(MutationsTypes.DELETE_CAR_MUTATION , reply.data.car)
        }
        

    },


    async [ActionsTypes.PURCHASE_CAR_ACTION] ({ commit } , carId) {
        const carService = new CarsService();
        const reply = await carService.purchaseCar({ carId });
        if(reply){
            commit(MutationsTypes.PURCHASE_CAR_MUTATION , reply.data.data)
        }
    }, 


    async [ActionsTypes.GET_CAR_BY_SELLING_DATE_ACTION]({ commit } , sellingDate){
        const carService = new CarsService();
        const reply = await carService.getCarbySellingDate({ sellingDate });
        if(reply){
            commit(MutationsTypes.GET_CAR_BY_SELLING_DATE_MUTATION , reply.data.data)
        }
    }, 

    async [ActionsTypes.GET_REPORT_ACTION]({ commit }){
        const carService = new CarsService();
        const reply = await carService.generateReport();
        if(reply){
            commit(MutationsTypes.GET_REPORT_MUTATION , reply.data.report)
        }
    },
    // Edit Car's Information action
    async [ActionsTypes.EDIT_CAR_ACTION](_, payload) {
        const { name, price , numberofspace } = payload;
       const carService = new CarsService();
       const reply = await carService.editCar({ name, price , numberofspace });
       if(reply){
           return 1
       }
      },

    // Create Car with Optimistic lock 
    async [ActionsTypes.GET_CARS_WITH_OPTIMISTIC_LOCK]({ commit} , {id , name , price, version}){
        const carService = new CarsService();
        const reply = await carService.createcarwithoptimisticlok({id , name , price, version});
        if(reply){
            commit(MutationsTypes.CREATE_CAR_WITH_OPTEMISTIC_LOCK , reply.data.data)
        }
    }
}


export default actions;