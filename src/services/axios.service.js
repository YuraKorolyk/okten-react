import axios from "axios";
import {baseCarURL, basePlaceholderURL} from "../constants/urls";

const axiosPlaceholderService =  axios.create({baseURL: basePlaceholderURL})
const axiosCarService = axios.create({baseURL: baseCarURL})
export {
    axiosPlaceholderService,
    axiosCarService
}