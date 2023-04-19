import axios from "axios";
import {baseCarsURL, basePlaceholderURL} from "../configs/urls";


const axiosPlaceholderService = axios.create({baseURL: basePlaceholderURL});
const axiosCarsService = axios.create({baseURL: baseCarsURL});

export {
    axiosPlaceholderService,
    axiosCarsService
}