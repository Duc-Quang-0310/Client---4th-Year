import { About } from "../../../pages/about/About";
import { SignIn } from "../../../pages/auth/login/SignIn";
import { PWRecoverNewPW } from "../../../pages/auth/passwordRecover/Phase2/PWRecoverNewPW";
import { PWRecover } from "../../../pages/auth/passwordRecover/PWRecover";
import { NewPWSuccess } from "../../../pages/auth/passwordRecover/Success/NewPWSuccess";
import { SignUpSuccess } from "../../../pages/auth/registration/Phase2/SignUpSuccess";
import { SignUp } from "../../../pages/auth/registration/SignUp";
import { Chat } from "../../../pages/chat/Chat";
import { Errors } from "../../../pages/err/Errors";
import { Home } from "../../../pages/home/Home";
import { Works } from "../../../pages/works/Works";
import { webStorage } from "../../helper/storage";
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
    path: route.SIGNUP_SUCCESS ,
    name: "signup_success",
    exact: true,
    component : SignUpSuccess,
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
  },
  {
    path: route.PWRECOVER_SUCCESS ,
    name: "pwrecover_success",
    exact: true,
    component : NewPWSuccess,
  },
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
  },
  {
    path: route.ABOUT,
    name:"about",
    exact: true,
    component: About
  },
  {
    path: route.CHAT ,
    name: "chat",
    exact: true,
    component : Chat,
  },
  {
    path: route.OUR_WORKS ,
    name: "works",
    exact: true,
    component : Works,
  },
]

export const routesSecured = () => {
  const token: any = webStorage.getToken("token")
  if(!!token) {
    return routes
  }
  else{
    return [...routes, ...protectedRoutes]
  }
}

export default routes



