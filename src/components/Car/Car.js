import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions} from "../../redux/slices/cars.slice";
import {carService} from "../../services/car.service";

const Car = ({car}) => {

    const {brand, price, year} = car
    const dispatch = useDispatch()
    const deleteCarHandler = (id) => {
        carService.deleteCar(id)
        dispatch(carsActions.deleteCar(id));
    }
    return (
        <div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>dispatch(carsActions.setCatForUpdate(car))}>change</button>
            <button onClick={() => deleteCarHandler(car.id)}>delete</button>
        </div>
    );
};

export default Car;