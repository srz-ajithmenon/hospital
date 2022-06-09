const initialState = {
    doct : []
}

const doctReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DOCT_INFO_SUCCESS' : return {
            ...state,
            doct: action.doctInfo
        }

        default : return state
    }
}

export default doctReducer