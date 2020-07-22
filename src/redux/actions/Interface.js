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

export const GetAllGenre = (token) =>{
  return{
    type: 'GETALLGENRE',
    payload: axios(
      {
        method: 'GET',
        url: 'http://192.168.1.6:3000/admin/genre',
        headers: {
          Authorization: token
        }
      }
    )
  }
}

export const GetAllAuthor = (token) =>{
  return{
    type: 'GETALLAUTHOR',
    payload: axios(
      {
        method: 'GET',
        url: 'http://192.168.1.6:3000/admin/author',
        headers: {
          Authorization: token
        }
      }
    )
  }
}

export const GetAllBookType = (token) =>{
  return{
    type: 'GETALLBOOKTYPE',
    payload: axios(
      {
        method: 'GET',
        url: 'http://192.168.1.6:3000/admin/book_type',
        headers: {
          Authorization: token
        }
      }
    )
  }
}

export const AddBooks = (token, data) =>{
  return{
    type: 'POSTBOOKS',
    payload: axios(
      {
        method: 'POST',
        url: 'http://192.168.1.6:3000/admin/post/book_table',
        data: data,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token
        }
      }
    )
  }
}