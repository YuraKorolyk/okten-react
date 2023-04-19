import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/cars.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([])
    const [carForUpdate, setCarForUpdate] = useState(null)
    useEffect(()=> {
        carsService.getAllCars().then(value => value.data).then(value => setCars(value))
    }, [])

    const deleteCarHandler = (id) => {
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