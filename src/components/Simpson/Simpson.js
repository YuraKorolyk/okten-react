import React from 'react';

const Simpson = ({name, surname, age, info, photo}) => {
    return (
        <div>
            <h2>{name} {surname}</h2>
            <p>Age: {age}</p>
            <p>{info}</p>
            <img src={photo} alt="photo"/>
        </div>
    );
};

export default Simpson;