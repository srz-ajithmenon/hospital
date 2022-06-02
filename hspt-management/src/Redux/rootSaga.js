import { all } from "redux-saga/effects"
import  {watchUserContainer} from './login/loginSaga'

export function* rootSaga(){
    yield all([
        watchUserContainer(),
    ])
}