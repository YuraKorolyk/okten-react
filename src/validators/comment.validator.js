import Joi from "joi";

const commentValidator = Joi.object({
    name:Joi.string().min(1).max(20).required(),
    body:Joi.string().min(1).max(40).required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
export {
    commentValidator
}