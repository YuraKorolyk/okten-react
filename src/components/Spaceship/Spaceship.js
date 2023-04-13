import React from 'react';

const Spaceship = ({name, year, img}) => {
    return (
        <div>
            <div>Name: {name} | Year: {year}</div>
            <img src={img} alt=""/>
        </div>
    );
};

export default Spaceship;