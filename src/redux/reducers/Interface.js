const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  successMsg: '',
  data: []
}

const Interface = (state = initialState, action)=>{
  switch(action.type){
    case 'GETALLBOOKS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'GETALLBOOKS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Something bad happened'
      }
    case 'GETALLBOOKS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        successMsg: 'Data successfully listed',
        data: action.payload.data.data
      }
    default:
      return state;
  }
}

export default Interface;