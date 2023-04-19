import React, {useEffect, useState} from 'react';
import {placeholderService} from "../../services/placeholder.service";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(()=> {
        placeholderService.getAllComments().then(value => value.data).then(value => setComments(value))
    }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <br/>
            {
                comments.map(comment => <Comment
                    key={comment.id}
                    name={comment.name}
                    email={comment.email}
                    body={comment.body}
                    id={comment.id}
                />)
            }
        </div>
    );
};

export default Comments;