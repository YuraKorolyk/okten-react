import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import styles from './Post.module.css'
const Post = ({id, title, body}) => {
    const [btnClicked, setBtnClicked] = useState(false)
    const btnClickHandler = () => {
        setBtnClicked(prev => !prev)
    }
    return (
        <div className={styles.module}>
            <div>{id}  {title}</div>
            {btnClicked && <div>{body}</div>}
            <Button onButtonClick={btnClickHandler}>click</Button>
        </div>
    );
};

export default Post;