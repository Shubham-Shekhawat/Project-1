import axios from 'axios';
import React, { useState } from 'react'

const LogIn = () => {
  const [UserName,setUserName] = useState();
  const [password,setPassword] = useState();

  const HandleLogin = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:4000/login',{UserName,password})
    .then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <form onSubmit={HandleLogin} className='login'>
      <h1>Login</h1>
      <input type="text" placeholder='Enter UserName' onChange={e => setUserName(e.target.value)}/>
      <input type="password" placeholder='Enter Password' onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}

export default LogIn