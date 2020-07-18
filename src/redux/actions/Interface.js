import axios from 'axios';

export const GetBooks = () =>{
  return{
    type: 'GETALLBOOKS',
    payload: axios(
      {
        method: 'GET',
        url: 'http://192.168.1.6:3000/user'
      }
    )
  }
}