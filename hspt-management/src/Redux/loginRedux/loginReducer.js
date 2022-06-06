import { POST_LOGIN_INFO_SUCCESS } from "./loginTypes"

const userState= {
    user:[],
    isAuthUser: false
}
const loginReducer = (state= userState, action) => {
    switch(action.type){
        case POST_LOGIN_INFO_SUCCESS:
            return{
                ...state,
                type: action.type,
                isAuthUser: true,
                user: action.response
            }
        default: return state
    }
}

export default loginReducer