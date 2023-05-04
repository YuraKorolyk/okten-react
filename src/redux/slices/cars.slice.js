import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null
}
const slice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCars:(state, action) => {
            state.cars = action.payload;
        },
        createCar: (state, action) => {
            state.cars = [...state.cars, action.payload];
        },
        deleteCar:(state, action) => {
            state.cars = state.cars.filter(item => item.id !== action.payload);
        },
        updateCar:(state, action) => {
            // state.cars = [...state.cars, action.payload]
            state.cars = [...state.cars].map(item => item.id === state.carForUpdate.id ? {...action.payload, id:item.id} : item)
        },
        setCatForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        deleteCarForUpdate: state => {
            state.carForUpdate = false
        }
    }
})

const {reducer: carsReducer, actions} = slice

const carsActions = {
    ...actions
}
export {
    carsReducer,
    carsActions
}