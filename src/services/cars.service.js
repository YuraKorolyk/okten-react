import {axiosCarsService} from "./axios.service";
import {urlsCars} from "../configs/urls";

const carsService = {
    getAllCars: ()=>axiosCarsService.get(urlsCars.cars),
    createCar: (car)=>axiosCarsService.post(urlsCars.cars, car),
    updateCar: (id, car) => axiosCarsService.put(`${urlsCars.cars}/${id}`, car),
    deleteCar: (id)=>axiosCarsService.delete(`${urlsCars.cars}/${id}`)
}
export {
    carsService
}