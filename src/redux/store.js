import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/users.slice";
import {carsReducer} from "./slices/cars.slice";

const rootReducer = combineReducers({
    usersReducer,
    carsReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {setupStore}