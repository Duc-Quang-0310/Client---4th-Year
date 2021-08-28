import { API } from "../common/constants/api"
import { AxiosClient } from "./api/axiosConnection"
import { iLoginParams, iPWRecover_P1, iPWRecover_P2, iSignUpParams } from "./authTypes"
export const authServices = {
    login: async(params:iLoginParams ) => {
        const {data} = await AxiosClient.post(API.AUTH.LOGIN, params)
        return data
    },
    register_unconfirm: async( params:iSignUpParams) => {
        const {data} = await AxiosClient.post(API.AUTH.REGISTER_UNCONFIRM, params)
        return data
    },
    register_confirm: async( params: string) => {
        const {data} = await AxiosClient.post(API.AUTH.REGISTER_CONFIRM(params))
        return data
    },
    pwrecovery_unconfirm: async(params: iPWRecover_P1) => {
        const {data} = await AxiosClient.post(API.AUTH.PWRECOVERY_UNCONFIRM, params)
        return data
    },
    pwrecovery_confirm: async( params: iPWRecover_P2, token: string) => {
        const { data } = await AxiosClient.post(API.AUTH.PWRECOVERY_CONFIRM(token) ,params)
        return data
    }
}



