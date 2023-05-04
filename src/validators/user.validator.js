import Joi from "joi";

const userValidator = Joi.object({
    name:Joi.string().min(1).max(20).required(),
    username:Joi.string().min(1).max(20).required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
export {
    userValidator
}