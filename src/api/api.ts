import axios from "axios"
import { baseURL } from "./variable"

export const axiosClient = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    headers: {
        "content-Type" : "application/json"
    }
})

axiosClient.interceptors.request.use(
    (res) => {
        if( res && res.data){
            return res.data;
        }
        return res;
    },
    (error) => {
        throw error;
    }
)


