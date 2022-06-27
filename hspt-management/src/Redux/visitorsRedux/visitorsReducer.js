import {GET_VISITORS_INFO_SUCCESS} from './visitorsTypes'

const visitorsState= {
    visitors:[]
}

const visitorsReducer = ( state= visitorsState, action) =>{
    switch(action.type){
        case GET_VISITORS_INFO_SUCCESS:
            return{
                ...state,
                visitors: action.response
            }
        default:return state
    }
}

export default visitorsReducer