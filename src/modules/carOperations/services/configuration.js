
const CarsConfigurations = {
    CREATE_CAR_URL: `api/services/cars/create` , 
    GETTING_CAR_INFO_URL: `api/services/cars` , 
    DELETE_CAR_URL: id => `api/services/cars/${id}` , 
    PUT_PURCHASE_CAR_URL: id => `api/services/cars/purchase/${id}` , 
    GET_CAR_BY_SELLING_DATE_URL: sellingDate => `api/services/cars/selling-date/${sellingDate}`,
    GET_REPORT_URL: `api/services/cars/report`,
    EDIT_CAR_INFORMATION_URL: `JHVJHVKJKJKJ` , 
    POST_CARS_WITH_OPTIMISTIC_LOCK:`api/services/cars/create/with-optimistic-lock`
}


export default CarsConfigurations;
 