const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  successMsg: '',
  data: [],
  genre: [],
  author: [],
  type: []
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
    case 'GETALLGENRE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'GETALLGENRE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Something bad happened'
      }
    case 'GETALLGENRE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        successMsg: 'Data successfully listed',
        genre: action.payload.data.data
      }
    case 'GETALLAUTHOR_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'GETALLAUTHOR_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Something bad happened'
      }
    case 'GETALLAUTHOR_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        successMsg: 'Data successfully listed',
        author: action.payload.data.data
      }
    case 'GETALLBOOKTYPE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'GETALLBOOKTYPE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Something bad happened'
      }
    case 'GETALLBOOKTYPE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        successMsg: 'Data successfully listed',
        type: action.payload.data.data
      }
    case 'ADDBOOK_PENDING':
      return{
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'ADDBOOK_REJECTED':
      return{
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response
      }
    case 'ADDBOOK_FULFILLED':
      return{
        ...state,
        isLoading: false,
        isError: false,
        successMsg: action.payload.response
      }
    case 'EDITBOOK_PENDING':
      return{
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'EDITBOOK_REJECTED':
      return{
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response
      }
    case 'EDITBOOK_FULFILLED':
      return{
        ...state,
        isLoading: false,
        isError: false,
        successMsg: action.payload.response
      }
    case 'DELETEBOOK_PENDING':
      return{
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'DELETEBOOK_REJECTED':
      return{
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response
      }
    case 'DELETEBOOK_FULFILLED':
      return{
        ...state,
        isLoading: false,
        isError: false,
        successMsg: action.payload.response
      }
    case 'BORROWBOOK_PENDING':
      return{
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'BORROWBOOK_REJECTED':
      return{
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response
      }
    case 'BORROWBOOK_FULFILLED':
      return{
        ...state,
        isLoading: false,
        isError: false,
        successMsg: action.payload.response
      }
    default:
      return state;
  }
}

export default Interface;