
import api from '../../../axiosWithDelimiterFile';
const END_POINTS_URL =  {
    create_ingrediant: '/ing/create-ingrediant',
    get_ingrediants: '/ing/grab-ingrediants'
}
export default class IngrediantsService {
    sendRequestToCreateNewIngrediant(ingrediant) {
        /**
         * ingrediant will be like 
         * {
         *  name: 'whatever',
         * price: '2000',
         * id: 'some unique id'
         * 
         }
         */
        return api.post(END_POINTS_URL.create_ingrediant, { ingrediant});
    }

    /**
     *  data = {
            priceOfSelling,
            customerName,
            dateOfSelling
        };
     */
    updateCar(data) {
        

        return api.post('', data);
    }

    sendRequestToGrabIngrediants() {
        return api.get(END_POINTS_URL.get_ingrediants);
    }
}