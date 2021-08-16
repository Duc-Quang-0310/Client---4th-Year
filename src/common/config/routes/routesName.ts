export const route = {
    HOME: "/home",
    USERS: "/users",
    SIGNIN: "/users/sign-in",
    SIGNUP: "/users/sign-up",
    PWRECOVER: "/users/pw-recovery",
    PWRECOVER_NEWPASSWORD:"/users/pw-recovery/new-password",
    CHAT:"/chat/:id",
    ERROR: "/error"
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

