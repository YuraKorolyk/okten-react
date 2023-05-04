import {axiosCarService} from "./axios.service";
import {urlsCars} from "../constants/urls";

const carService = {
    getAllCars: ()=>axiosCarService.get(urlsCars.cars),
    createCar: (car)=>axiosCarService.post(urlsCars.cars, car),
    updateCar: (id, car) => axiosCarService.put(`${urlsCars.cars}/${id}`, car),
    deleteCar: (id)=>axiosCarService.delete(`${urlsCars.cars}/${id}`)
}
export {carService}