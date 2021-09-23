export const route = {
    HOME: "/home",
    USERS: "/users",
    SIGNIN: "/users/sign-in",
    SIGNUP: "/users/sign-up",
    SIGNUP_SUCCESS: "/users/sign-up/success/:token",
    PWRECOVER: "/users/pw-recovery",
    PWRECOVER_NEWPASSWORD:"/users/pw-recovery/new-password/:token",
    PWRECOVER_SUCCESS: "/users/pw-recovery/new-password/:token/success",
    CHAT:"/chat/:id",
    ERROR: "/error",
    ABOUT: "/about",
    OUR_WORKS:"/our-work"
}

export interface iRoute {
    path: string,
    name: string,
    exact: boolean,
    component: any,
    props?: any,
}

export interface iToken{
    token: string
}

