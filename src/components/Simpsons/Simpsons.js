import React from 'react';
import Simpson from "../Simpson/Simpson";
const Simpsons = ({data}) => {
    return (
        <>
            {data.map((item, i) => <Simpson
                key={i}
                {...item}
            />)}
        </>
    );
};

export default Simpsons;