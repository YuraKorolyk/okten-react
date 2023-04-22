import React from 'react';

const Todo = ({data}) => {

    return (
        <>
            <div>userId: {data.userId} postId: {data.id}</div>
            <div>Title: {data.title}</div>
            <div>Completed: {data.completed.toString()}</div>
            <br/>
        </>
    );
};

export default Todo;