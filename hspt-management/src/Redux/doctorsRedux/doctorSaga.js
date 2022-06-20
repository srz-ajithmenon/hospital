import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import {Pagination} from '../LoadMore/Pagination';

const token="87592caf-0d6a-499e-9cf9-1b55c47a664b";

function* getDoctSaga (action) {
    try{
        const limits = action.payload;
        const res = yield call(axios.get,"http://localhost:8000/doctorsList");      
        console.log("output", res)
        const result = Pagination(limits, res.data)
        yield put({type:'GET_DOCT_INFO_SUCCESS',doctInfo : result});
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

function* updDoctSaga (action) {
    try{
        const ddata = action.payload;
        const res = yield call(axios.put,"http://localhost:8000/doctorsList/"+ddata.id,ddata);
        yield put({type:'GET_DOCT_INFO'});
      }
      catch (e) { console.log('error',e) }
}

export function* watchDoctContainer(){
    yield takeEvery('GET_DOCT_INFO', getDoctSaga)
    yield takeEvery('DEL_DOCT_INFO', delDoctSaga)
    yield takeEvery('UPD_DOCT_INFO', updDoctSaga)
}