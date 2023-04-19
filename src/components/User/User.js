import React from 'react';

const User = ({id, name, username, email}) => {
    return (
        <div>
            <span>{id}) </span>
            <span>{name} | </span>
            <span>{username} | </span>
            <span>{email}</span>
            <br/>
            <br/>
        </div>
    );
};

export default User;