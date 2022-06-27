import { LOGOUT_INFO, POST_LOGIN_INFO_SUCCESS } from "./loginTypes"

const userState= {
    user:[],
    isAuth: false
}
const loginReducer = (state= userState, action) => {
    switch(action.type){
        case POST_LOGIN_INFO_SUCCESS:
            localStorage.setItem('isAuth',true)
            return{
                ...state,
                isAuth: true,
                type: action.type,
                user: action.response,
            }
        case LOGOUT_INFO:
            localStorage.setItem('isAuth',false)
            console.log("red")
            // localStorage.removeItem("isAuth");
            return{
                isAuth: false,
                type: action.type,
            }
        default: return state
    }
}

export default loginReducer