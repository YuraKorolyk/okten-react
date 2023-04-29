import React, {useReducer} from 'react';
import AddAnimal from "../AddAnimal/AddAnimal";
import Dogs from "../Dogs/Dogs";
import Cats from "../Cats/Cats";

const reducer = (state, action) => {
    // console.log(state, action)
    switch (action.type) {
        case "ADD_CAT":
            const catID = state.cats.slice(-1)[0]?.id+1 || 1
            const cat = {id: catID, name: action.payload}
            return {...state, cats:[...state.cats, cat]}
        case "ADD_DOG":
            const dogID = state.cats.slice(-1)[0]?.id+1 || 1
            const dog = {id: dogID, name: action.payload}
            return {...state, dogs:[...state.dogs, dog]}
        case "DEL_CAT":
            const catIndex = state.cats.findIndex(value => value.id === action.payload)
            state.cats.splice(catIndex, 1)
            return {...state}

        case "DEL_DOG":
            const dogIndex = state.dogs.findIndex(value => value.id === action.payload)
            state.dogs.splice(dogIndex, 1)
            return {...state}
    }
}
const InputsBlock = () => {
    const stateDispatch = useReducer(reducer, {cats:[], dogs:[]})

    return (
        <div>
            {/*<AddAnimal id='cat' placeholder='add cat' labelText='Add cat:'/>*/}
            {/*<AddAnimal id='dog' placeholder='add dog' labelText='Add dog:'/>*/}
            <Cats stateDispatch={stateDispatch}/>
            <Dogs stateDispatch={stateDispatch}/>
        </div>
    );
};

export default InputsBlock;