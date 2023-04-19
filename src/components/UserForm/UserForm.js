import React from 'react';
import {useForm} from "react-hook-form";
import {placeholderService} from "../../services/placeholder.service";
import {joiResolver} from '@hookform/resolvers/joi'
import {userValidator} from "../../validators/user.validator";
import './UserForm.css'
const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm({mode: 'all', resolver:joiResolver(userValidator)})
    const onFormSubmit = (data) => {
        placeholderService.createUser(data).then(value => value.data).then(value => setUsers(prev=>[...prev, value]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="form">
            <input type="text" placeholder="name" {...register('name')}/>
            {errors.name && <div>{errors.name.message}</div>}
            <input type="text" placeholder="username" {...register('username')}/>
            {errors.username && <div>{errors.username.message}</div>}
            <input type="text" placeholder="email" {...register('email')}/>
            {errors.email && <div>{errors.email.message}</div>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default UserForm;