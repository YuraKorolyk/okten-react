import React, {useEffect, useState} from 'react';
import {placeholderService} from "../../services/placeholder.service";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=> {
        placeholderService.getAllUsers().then(value => value.data).then(value => setUsers(value))
    }, [])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <br/>
            {
                users.map(user => <User
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    id={user.id}
                />)
            }
        </div>
    );
};

export default Users;