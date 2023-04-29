import React, {FC, useEffect, useState} from 'react';
import {carsService} from "../../services/cars.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import {ICar} from "../../interfaces/car.interface";

const Cars:FC = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null)
    useEffect(()=> {
        carsService.getAllCars().then(value => value.data).then(value => setCars(value))
    }, [])

    const deleteCarHandler = (id:number):void => {
        carsService.deleteCar(id)
        setCars(prev => prev.filter(item => item.id !== id));
    }

    return (
        <>
            <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>

            <div style={{marginTop: '30px'}}>
                {cars.map(car => <Car
                    key={car.id}
                    car={car}
                    onDelete={()=>deleteCarHandler(car.id)}
                    updateCar={setCarForUpdate}
                />)}
            </div>
        </>
    );
};

export default Cars;