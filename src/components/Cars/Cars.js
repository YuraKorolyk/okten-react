import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../redux/slices/cars.slice";

const Cars = () => {
    const {cars} = useSelector(state => state.carsReducer)
    const dispatch = useDispatch()
    useEffect(()=> {
        carService.getAllCars().then(value => value.data).then(value => dispatch(carsActions.setCars(value)))
    }, [])

    return (
        <>
            <CarForm/>
            <div style={{marginTop: '30px'}}>
                {cars.map(car => <Car
                    key={car.id}
                    car={car}
                />)}
            </div>
        </>
    );
};

export default Cars;