import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsService} from "../../services/cars.service";
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setCars, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: 'all', resolver:joiResolver(carValidator)})

    useEffect(()=> {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate])

    const onFormSubmit = (data) => {
        carsService.createCar(data).then(value => value.data).then(value => setCars(prev=>[...prev, value]))
        reset()
    }
    const onUpdate = (data) => {
        carsService.updateCar(carForUpdate.id, data)
        setCars(prev => [...prev].map(item => item.id === carForUpdate.id ? {...data, id:item.id} : item))
        setCarForUpdate(null)
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