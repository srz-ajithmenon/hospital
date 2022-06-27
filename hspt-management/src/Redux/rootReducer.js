import { combineReducers } from "redux";
import loginReducer from "./loginRedux/loginReducer";
import visitorsReducer from './visitorsRedux/visitorsReducer'

const rootReducer=combineReducers({
    loginReducer:loginReducer,
    visitorsReducer: visitorsReducer
})

export default rootReducer