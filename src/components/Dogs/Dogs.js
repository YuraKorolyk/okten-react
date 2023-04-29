import React from 'react';
import {useForm} from "react-hook-form";

const Dogs = ({stateDispatch}) => {
    const {reset, register, handleSubmit} = useForm()
    const [{dogs}, dispatch] = stateDispatch

    const saveHandler = (data) => {
        dispatch({type:"ADD_DOG", payload: data.dog})
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(saveHandler)}>
                <label htmlFor={"name"}>Add dogs:</label>
                <input placeholder="dogs" type="text" required {...register('dog')}/>
                <button>Save</button>
            </form>
            {dogs.map((dog, i) => (
                <div key={i}>
                    <span>{dog.name}</span>
                    <button onClick={() => {
                        dispatch({type:"DEL_DOG", payload: dog.id})
                    }}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Dogs;