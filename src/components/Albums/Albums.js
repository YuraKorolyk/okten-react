import React, {useEffect, useState} from 'react';
import {placeholderService} from "../../services/placeholder.service";

const Albums = () => {
    const [albums, setAlbums] = useState(null)
    useEffect(()=> {
        placeholderService.getAlbums()
            .then(res => res.data)
            .then(res => setAlbums(res))
    },[])
    return (
        <div>
            <h2>Albums</h2>
            {albums?.map(album => <div key={album.id}>{JSON.stringify(album)}</div>)}
        </div>
    );
};

export default Albums;