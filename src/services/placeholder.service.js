import {axiosPlaceholderService} from "./axios.service";
import {urlsPlaceholder} from "../configs/urls";

const placeholderService = {
    getAllUsers: ()=>axiosPlaceholderService.get(urlsPlaceholder.users),
    getAllComments:()=> axiosPlaceholderService.get(urlsPlaceholder.comments),
    createUser: (user) => axiosPlaceholderService.post (urlsPlaceholder.users, user),
    createComment: (comment) => axiosPlaceholderService.post (urlsPlaceholder.users, comment),
}
export {
    placeholderService
}