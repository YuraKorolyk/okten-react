import React from 'react';

const RickAndMorty = ({name,status,species,gender,image}) => {
    return (
        <div>
            <h2>{name} / {status} / {species} / {gender}</h2>
            <img src={image} alt="image"/>
        </div>
    );
};

export default RickAndMorty;