import React, {useEffect, useState} from 'react';
import {placeholderService} from "../../services/placeholder.service";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";
import {useDispatch, useSelector} from "react-redux";
import {usersActions, usersReducer} from "../../redux/slices/users.slice";

const Users = () => {

    const {users} = useSelector(state => state.usersReducer)
    console.log(users)

    const dispatch = useDispatch()

    // const [users, setUsers] = useState([])
    useEffect(()=> {
        placeholderService.getAllUsers().then(value => value.data).then(value => dispatch(usersActions.setUsers(value)))
    }, [])

    return (
        <div>
            <UserForm/>
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