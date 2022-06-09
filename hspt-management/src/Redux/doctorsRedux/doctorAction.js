export const getDoctInfo = () => {
    return {
      type: 'GET_DOCT_INFO',
    }
  }

  export const delDoctInfo = (doctid) => {
    return{
        type: 'DEL_DOCT_INFO',
        payload: doctid,
    }
  }