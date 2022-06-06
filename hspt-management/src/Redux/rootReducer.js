import { combineReducers } from "redux";
import loginReducer from "./loginRedux/loginReducer";

const rootReducer=combineReducers({
    loginReducer:loginReducer
})

export default rootReducer