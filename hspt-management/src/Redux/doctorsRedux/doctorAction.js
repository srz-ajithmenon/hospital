export const getDoctInfo = (limits) => {
  return {
    type: 'GET_DOCT_INFO',
    payload: limits,
  }
}

export const delDoctInfo = (doctid) => {
  return{
      type: 'DEL_DOCT_INFO',
      payload: doctid,
  }
}

export const updDoctInfo = (doct) => {
  return{
      type: 'UPD_DOCT_INFO',
      payload: doct,
  }
}