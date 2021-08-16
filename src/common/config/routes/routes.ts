import { SignIn } from "../../../pages/auth/login/SignIn";
import { PWRecoverNewPW } from "../../../pages/auth/passwordRecover/Phase2/PWRecoverNewPW";
import { PWRecover } from "../../../pages/auth/passwordRecover/PWRecover";
import { SignUp } from "../../../pages/auth/registration/SignUp";
import { Errors } from "../../../pages/err/Errors";
import { Home } from "../../../pages/home/Home";
import { iRoute, route } from "./routesName";

const protectedRoutes:iRoute[] = [
  {
    path: route.SIGNIN ,
    name: "signin",
    exact: true,
    component : SignIn,
  },
  {
    path: route.SIGNUP  ,
    name: "signup",
    exact: true,
    component : SignUp,
  },
  {
    path: route.PWRECOVER  ,
    name: "pwrecover",
    exact: true,
    component : PWRecover,
  },
  {
    path: route.PWRECOVER_NEWPASSWORD ,
    name: "pwrecover_newpassword",
    exact: true,
    component : PWRecoverNewPW,
  }
]

const routes:iRoute[] = [
  {
    path: route.HOME ,
    name: "home",
    exact: true,
    component: Home
  },
  {
    path: route.ERROR,
    name:"error",
    exact: true,
    component: Errors
  }
]

export const routesSecured = () => {
  const token: any = null
  if(!!token) {
    return routes
  }
  else{
    return [...routes, ...protectedRoutes]
  }
}

export default routes



