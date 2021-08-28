export const API = {
    AUTH: {
        LOGIN : "api/users/login",
        REGISTER_UNCONFIRM: "api/users/registry",
        REGISTER_CONFIRM: ( token:string ):string => {
            return `api/users/registry/${token}`
        },
        PWRECOVERY_UNCONFIRM: "api/users/pwRecovery",
        PWRECOVERY_CONFIRM: ( token:string ):string => {
            return `api/users/pwRecovery/newPassWord/${token}`
        }
    }
}



  
