import React from 'react';

const Car = ({car, onDelete, updateCar}) => {
const {brand, price, year} = car

    return (
        <div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>updateCar(car)}>change</button>
            <button onClick={onDelete}>delete</button>
        </div>
    );
};

export default Car;