import { all } from "redux-saga/effects"
import  { watchUserContainer } from './loginRedux/loginSaga'
import{ watchVisitorsContainer } from './visitorsRedux/visitorsSaga'

export function* rootSaga(){
    yield all([
        watchUserContainer(),
        watchVisitorsContainer()
    ])
}