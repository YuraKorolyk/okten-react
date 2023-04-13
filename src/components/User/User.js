import React, {useState} from 'react';
import styles from './User.module.css'
import Button from "../../UI/Button/Button";
const User = ({id, name, username}) => {
    const [posts, setPosts] = useState([])
    const [clickedBtn, setClickedBtn] = useState(false)
    const btnClickHandler = () => {
        if (!clickedBtn) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(res => res.json())
                .then(data => {
                    setPosts(data)
                })
        }
        setClickedBtn(prev => !prev)

    }
    return (
        <div className={styles.user}>
            <div>ID: {id} NAME: {name}</div>
            <div>USERNAME: {username}</div>
            <Button onButtonClick={btnClickHandler}>See post</Button>
            {clickedBtn && posts.map(post => {
                return (
                    <div key={post.id}>
                        <h2>{post.id} {post.title}</h2>
                        <div>{post.body}</div>
                    </div>
            )})}
        </div>
    );
};

export default User;