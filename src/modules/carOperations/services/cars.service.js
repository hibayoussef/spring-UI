import api from "../../../axiosWithDelimiterFile";
import CarsConfigurations from "./configuration";

export default class CarsService {
  // Create new Car 
  sendRquestToCreateNewCar(car) {
    console.log('the car informations in the car services:' , car)
    return api.post(CarsConfigurations.CREATE_CAR_URL, { car });
  }


  // get Cars 
  viewAllCars(){
    return api.get(CarsConfigurations.GETTING_CAR_INFO_URL);
  }

  // edit car service
  editCar(carId , name , price, numberofSeats){
    return api.post(CarsConfigurations.EDIT_CAR_INFORMATION_URL , {carId , name , price, numberofSeats})
  }

  // delete car service 
  deleteCar(carId){
    return api.delete(CarsConfigurations.DELETE_CAR_URL , {carId})
  }


  //  purchase car action 
  purchaseCar(carId){
    return api.put(CarsConfigurations.PUT_PURCHASE_CAR_URL , {carId})
  }


  // get car by selling Date 
  getCarbySellingDate(sellingDate){
    return api.get(CarsConfigurations.GET_CAR_BY_SELLING_DATE_URL , {sellingDate})
  }


  // generate report 
  generateReport(){
    return api.get(CarsConfigurations.GET_REPORT_URL)
  }


  createcarwithoptimisticlok(id , name , price, version){
    return api.post(CarsConfigurations.POST_CARS_WITH_OPTIMISTIC_LOCK , {id , name , price, version} )
  }
}
