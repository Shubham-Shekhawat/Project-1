import React, { useState } from 'react'
import axios from 'axios'

const RegisterPage = () => {
    const [UserName,setUserName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
    const handleRegistration = (e)=>{
        e.preventDefault();
        // fetch('http://localhost:4000/register',{                                      without axios
        //     method:  'POST',
        //     body : JSON.stringify({UserName,email,password}),
        //     headers : {'Content-Type': 'application/json'}
        // })

        axios.post('http://localhost:4000/register',{UserName,email,password})
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.error(err)
        });
    }

  return (
    <form action="" className='register' onSubmit={handleRegistration}>
        <h1>Register</h1>
      <input type="text" name='name' placeholder='Enter UserName' value={UserName} onChange={(e) => setUserName(e.target.value)} />
      <input type="email" name="email" id="" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
      <input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}  />
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterPage