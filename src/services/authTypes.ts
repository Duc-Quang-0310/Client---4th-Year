interface iLoginParams {
    username: string;
    password: string;
}

interface iSignUpParams {
    username: string;
    email: string;
    password: string;
}

interface iPWRecover_P1 {
    username: string;
    email: string;
}

interface iPWRecover_P2 {
    password: string;
}


export type {iLoginParams , iSignUpParams, iPWRecover_P1, iPWRecover_P2}

