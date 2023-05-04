import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services/car.service";
import {carValidator} from "../../validators/car.validator";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../redux/slices/cars.slice";

const CarForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: 'all', resolver:joiResolver(carValidator)})
    const {carForUpdate} = useSelector(state => state.carsReducer)
    const dispatch = useDispatch()
    useEffect(()=> {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate])

    const onFormSubmit = (data) => {
        carService.createCar(data).then(value => value.data).then(value => dispatch(carsActions.createCar(value)))
        reset()
    }
    const onUpdate = (data) => {
        carService.updateCar(carForUpdate.id, data)
        dispatch(carsActions.updateCar(data))
        dispatch(carsActions.deleteCarForUpdate())
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? onUpdate : onFormSubmit)} className="form">
            <input type="text" placeholder="brand" {...register('brand')}/>
            {errors.brand && <div>{errors.brand.message}</div>}
            <input type="text" placeholder="price" {...register('price')}/>
            {errors.price && <div>{errors.price.message}</div>}
            <input type="text" placeholder="year" {...register('year')}/>
            {errors.year && <div>{errors.year.message}</div>}
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export default CarForm;