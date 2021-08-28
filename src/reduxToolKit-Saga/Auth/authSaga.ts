import {all, call, put, takeLatest, takeEvery} from 'redux-saga/effects'
import { route } from '../../common/config/routes/routesName'
import { webStorage } from '../../common/helper/storage'
import { authServices } from '../../services/authServices'
import { login, login_fail, login_success, logout, reset } from './AuthSlice'
import { PayloadAction } from "@reduxjs/toolkit";
import { iLoginParams } from '../../services/authTypes'

export interface iLoginDataType {
    user: object
    token: string
}

export interface iResponType {
    message: string,
    success: boolean,
    data?: iLoginDataType ,
}

function* loginSaga ( action: PayloadAction<iLoginParams>) {
    console.log("action.payload from login Saga", action.payload );
    try {
        const response:iResponType = yield call(() => authServices.login(action.payload))
        console.log("1", response);
        
        if( response.success ) {
            webStorage.setToken( "token", response.data?.token)
            yield put(login_success( {
                token: response.data?.token, 
                userInfo: response.data?.user, 
                loggingStatus: response.success, 
                loggingMessage: response.message 
            } ))

            setTimeout(() => {
                window.location.pathname = route.HOME
            }, 600);
            yield put(reset())
        }        
    } catch (error) {        
        yield put (login_fail({
            loggingMessage: error.response.data.message,
            loggingStatus: error.response.data.success
        }))
    }
}

function* logoutSaga ( ){
    console.log("logout saga");
    
    try {
        webStorage.removeToken("token")
        yield put(logout())
        setTimeout(() => {
            window.location.reload();
        }, 400);
    } catch (error) {
        console.log(error);
    }
}

export default function* AuthSaga () {
    console.log("Auth Saga");
    yield all([takeLatest(login.toString(), loginSaga), takeLatest(logout.toString(), logoutSaga)])
}
