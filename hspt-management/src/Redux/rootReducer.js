import { combineReducers } from "redux";
import loginReducer from "./loginRedux/loginReducer";
import doctReducer from './doctorsRedux/doctorReducer'

const rootReducer=combineReducers({
    loginReducer:loginReducer,
    doctInfo:doctReducer
})

export default rootReducer