import React, {useState} from 'react';

const initialAnimals = {
    cats:[],
    dogs:[]
}


const AddAnimal = ({id, placeholder, labelText}) => {
    const [text, setText] = useState('')
    const changeHandler = (e) => {
        setText(e.target.value)
    }



    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} placeholder={placeholder} type="text" value={text} onChange={changeHandler}/>
            <button onClick={()=>{}}>save</button>
        </>
    );
};

export default AddAnimal;