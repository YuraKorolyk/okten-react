import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
}
const slice = createSlice({
    name:'usersSlice',
    initialState,
    reducers: {
        setUsers:(state, action) => {
            state.users = action.payload
        },
        addUser:(state, action) => {
            state.users = [...state.users, action.payload]
        }
    }
})

const {reducer: usersReducer, actions} = slice

const usersActions = {
    ...actions
}
export {
    usersActions,
    usersReducer
}