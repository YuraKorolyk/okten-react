import React, { useEffect, useState } from 'react';
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
    }, [])
    return (
        <div>
            {posts.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body}/>)}
        </div>
    );
};

export default Posts;