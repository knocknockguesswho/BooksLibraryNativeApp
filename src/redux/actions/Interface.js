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
    type: 'ADDBOOK',
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

export const EditBooks = (token, data, id) =>{
  return{
    type: 'EDITBOOK',
    payload: axios(
      {
        method: 'PUT',
        url: `http://192.168.1.6:3000/admin/${id}`,
        data: data,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token
        }
      }
    )
  }
}

export const DeleteBook = (token, id)=>{
  return{
    type: 'DELETEBOOK',
    payload: axios(
      {
      method: 'DELETE',
      url: `http://192.168.1.6:3000/admin/${id}`,
      headers: {
        Authorization: token
      }
    })
  }
}


export const BorrowBook = (token, id)=>{
  return{
    type: 'BORROWBOOK',
    payload: axios(
      {
      method: 'PUT',
      url: `http://192.168.1.6:3000/member/borrow/${id}`,
      headers: {
        Authorization: token
      }
    })
  }
}


export const ReturnBook = (token, id)=>{
  return{
    type: 'RETURNBOOK',
    payload: axios(
      {
      method: 'PUT',
      url: `http://192.168.1.6:3000/member/return/${id}`,
      headers: {
        Authorization: token
      }
    })
  }
}