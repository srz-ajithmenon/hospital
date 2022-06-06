import axios from 'axios';
import { takeEvery, call, put } from "redux-saga/effects";
import { POST_LOGIN_INFO, POST_LOGIN_INFO_SUCCESS } from "./loginTypes";

function* postLogin(action) {
 try{
    const response= yield call(axios.post, "http://localhost:8000/user", action.payload) 
    yield put({type: POST_LOGIN_INFO_SUCCESS, response: response.data});
 }
 catch(e) { console.log('error', e) }
}

export function* watchUserContainer() {
    yield takeEvery(POST_LOGIN_INFO, postLogin);
}