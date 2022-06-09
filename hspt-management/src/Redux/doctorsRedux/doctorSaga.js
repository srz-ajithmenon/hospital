import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

const token="87592caf-0d6a-499e-9cf9-1b55c47a664b";

function* getDoctSaga () {
    try{
        const res = yield call(axios.get,"http://localhost:8000/doctorsList");      
        console.log("output", res)
        yield put({type:'GET_DOCT_INFO_SUCCESS',doctInfo : res.data});
      }
      catch (e) { console.log('error',e) }
}

function* delDoctSaga (action) {
    try{
        const ddata = action.payload;
        const res = yield call(axios.delete,"http://localhost:8000/doctorsList/"+ddata);
        yield put({type:'GET_DOCT_INFO'});
      }
      catch (e) { console.log('error',e) }
}

export function* watchDoctContainer(){
    yield takeEvery('GET_DOCT_INFO', getDoctSaga)
    yield takeEvery('DEL_DOCT_INFO', delDoctSaga)
}