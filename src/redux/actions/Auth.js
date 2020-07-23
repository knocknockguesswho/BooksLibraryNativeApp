import axios from 'axios';

export const Login = (data) =>{
  return{
    type: 'LOGIN',
    payload: axios(
      {
        method: 'POST',
        url: `http://192.168.1.6:3000/auth/login`,
        data:{
          username: data.username,
          password: data.password
        }
      }
    )
  }
}

export const Logout = () =>{
  return{
    type: 'LOGOUT_FULFILLED'
  }
}


export const Register = (data) =>{
  return{
    type: 'REGISTER',
    payload: axios(
      {
      method: 'POST',
      url: 'http://192.168.1.6:3000/auth/register',
      data: {
        fullname: data.fullName,
        username: data.username,
        password: data.password,
        email: data.email,
        role: 2
      }
    })
  }
}