import { POST_LOGIN_INFO, LOGOUT_INFO } from "./loginTypes"

export const loginAction = (user) => {
  return {
    payload: user,
    type: POST_LOGIN_INFO,
  }
}

export const logoutAction = () => {
  return{
    type: LOGOUT_INFO
  }
}