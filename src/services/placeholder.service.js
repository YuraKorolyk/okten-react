import {axiosService} from "./axios.service";
import {urls} from "../config/url";

const placeholderService = {
    getTodos: ()=>axiosService.get(urls.todos),
    getAlbums: ()=>axiosService.get(urls.albums),
    getComments: ()=>axiosService.get(urls.comments),
    getPostById: (id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {placeholderService}