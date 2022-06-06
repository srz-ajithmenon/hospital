import { all } from "redux-saga/effects"
import  { watchUserContainer } from './loginRedux/loginSaga'

export function* rootSaga(){
    yield all([
        watchUserContainer(),
    ])
}