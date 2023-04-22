import React, {useEffect, useState} from 'react';
import {placeholderService} from "../../services/placeholder.service";
import {useLocation} from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState(null)
    const location = useLocation()
    useEffect(()=> {
        placeholderService.getPostById(location.state)
            .then(res => res.data)
            .then(res => setPost(res))
    },[])
    return (
        <div>
            {post && JSON.stringify(post)}
        </div>
    );
};

export default Post;