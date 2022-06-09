import { all } from "redux-saga/effects"
import  { watchUserContainer } from './loginRedux/loginSaga'
import { watchDoctContainer } from "./doctorsRedux/doctorSaga"

export function* rootSaga(){
    yield all([
        watchUserContainer(),watchDoctContainer(),
    ])
}