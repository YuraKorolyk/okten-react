import axios from 'axios'
import {baseURL} from "../config/url";

const axiosService = axios.create({baseURL: baseURL})

export {axiosService}