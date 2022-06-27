import axios from 'axios';
import { takeEvery, call, put } from "redux-saga/effects";
import { GET_VISITORS_INFO, GET_VISITORS_INFO_SUCCESS  } from "./visitorsTypes";

function* postLogin(action) {
 try{
    const response= yield call(axios.get, "http://localhost:8000/visitors") 
    yield put({type: GET_VISITORS_INFO_SUCCESS, response: response.data});
 }
 catch(e) { console.log('error', e) }
}

export function* watchVisitorsContainer() {
    yield takeEvery(GET_VISITORS_INFO, postLogin);
}