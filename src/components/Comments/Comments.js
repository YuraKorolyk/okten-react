import React, {useEffect, useState} from 'react';
import {placeholderService} from "../../services/placeholder.service";
import {Link, Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState(null)
    useEffect(()=> {
        placeholderService.getComments()
            .then(res => res.data)
            .then(res => setComments(res))
    },[])
    return (
        <div>
            <h2>Comments</h2>
            <Outlet/>
            {comments?.map(comment => (
                <div key={comment.id}>
                    <Link to={`posts/${comment.id.toString()}`} state={comment.id}>
                        {JSON.stringify(comment)}
                    </Link>
            </div>))}
        </div>
    );
};

export default Comments;