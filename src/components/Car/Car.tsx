import React, {Dispatch, FC, SetStateAction} from 'react';
import {ICar} from "../../interfaces/car.interface";

interface IProps {
    car: ICar;
    onDelete: () => void;
    updateCar: Dispatch<SetStateAction<ICar | null>>;
}
const Car:FC<IProps> = ({car, onDelete, updateCar}) => {
    const {brand, price, year} = car

    return (
        <div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>updateCar(car)}>change</button>
            <button onClick={onDelete}>delete</button>
        </div>
    );
};

export default Car;