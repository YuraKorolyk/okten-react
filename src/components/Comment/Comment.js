import React from 'react';

const Comment = ({id, name, body, email}) => {
    return (
        <div>
            <span>{id}) </span>
            <span>{name} | </span>
            <span>{body} | </span>
            <span>{email}</span>
            <br/>
            <br/>
        </div>
    );
};

export default Comment;