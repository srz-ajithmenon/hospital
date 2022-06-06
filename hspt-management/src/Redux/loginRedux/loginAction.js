import { POST_LOGIN_INFO } from "./loginTypes"

export const loginAction = (user) => {
  return {
    payload: user,
    type: POST_LOGIN_INFO
  }
}
