import axios, {AxiosResponse} from "axios";
import {baseCarsURL, basePlaceholderURL} from "../configs/urls";

type IRes<T> = Promise<AxiosResponse<T>>

const axiosPlaceholderService = axios.create({baseURL: basePlaceholderURL});
const axiosCarsService = axios.create({baseURL: baseCarsURL});

export {
    axiosPlaceholderService,
    axiosCarsService
}
export type {
    IRes
}