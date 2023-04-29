import React from 'react';
import {useForm} from "react-hook-form";

const Cats = ({stateDispatch}) => {
    const {reset, register, handleSubmit} = useForm()
    const [{cats}, dispatch] = stateDispatch
    const saveHandler = (data) => {
        dispatch({type:"ADD_CAT", payload: data.cat})
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(saveHandler)}>
                <label htmlFor={"name"}>Add cat:</label>
                <input placeholder="cats" type="text" required {...register('cat')}/>
                <button>Save</button>
            </form>
            {cats.map((cat, i) => (
                <div key={i}>
                    <span>{cat.name}</span>
                    <button onClick={() => {
                        dispatch({type:"DEL_CAT", payload: cat.id})
                    }}>Delete</button>
                </div>
            ))}
        </>
    );
};

export default Cats;