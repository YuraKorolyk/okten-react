import React from 'react';
import {useForm} from "react-hook-form";
import {placeholderService} from "../../services/placeholder.service";
import {joiResolver} from '@hookform/resolvers/joi'
import './CommentForm.css'
import {commentValidator} from "../../validators/comment.validator";
const CommentForm = ({setComments}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm({mode: 'all', resolver:joiResolver(commentValidator)})
    const onFormSubmit = (data) => {
        placeholderService.createComment(data).then(value => value.data).then(value => setComments(prev=>[...prev, value]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="form">
            <input type="text" placeholder="name" {...register('name')}/>
            {errors.name && <div>{errors.name.message}</div>}
            <input type="text" placeholder="body" {...register('body')}/>
            {errors.body && <div>{errors.body.message}</div>}
            <input type="text" placeholder="email" {...register('email')}/>
            {errors.email && <div>{errors.email.message}</div>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default CommentForm;