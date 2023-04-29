import {axiosPlaceholderService, IRes} from "./axios.service";
import {urlsPlaceholder} from "../configs/urls";
import {IUser} from "../interfaces/user.interface";

const placeholderService = {
    getAllUsers: ():IRes<IUser[]>=>axiosPlaceholderService.get(urlsPlaceholder.users),
    getAllComments:()=> axiosPlaceholderService.get(urlsPlaceholder.comments),
    createUser: (user:IUser):IRes<IUser> => axiosPlaceholderService.post (urlsPlaceholder.users, user),
    createComment: (comment:string) => axiosPlaceholderService.post (urlsPlaceholder.users, comment),
}
export {
    placeholderService
}