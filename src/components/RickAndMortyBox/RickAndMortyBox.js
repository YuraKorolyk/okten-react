import React from 'react';
import RickAndMorty from "../RickAndMorty/RickAndMorty";
const RickAndMortyBox = ({data}) => {
    return (
        <>
            {data.map(item => <RickAndMorty
                key={item.id}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}
                image={item.image}
            />)}
        </>
    );
};

export default RickAndMortyBox;