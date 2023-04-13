import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])
    return (
        <div>
            {users.map(user=> <User
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
            />)}
        </div>
    );
};

export default Users;