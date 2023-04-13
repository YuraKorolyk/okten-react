import React, {useEffect, useState} from 'react';
import Spaceship from "../Spaceship/Spaceship";

const Spaceships = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(res => res.json())
            .then(data => {
                setLaunches(data);
            })
    }, [])
    return (
        <div>
            {launches
                .filter(item => item.launch_year !== '2020')
                .map(item => <Spaceship
                    key={item.mission_name}
                    name={item.mission_name}
                    year={item.launch_year}
                    img={item.links.mission_patch_small}
            />)}


        </div>
    );
};

export default Spaceships;