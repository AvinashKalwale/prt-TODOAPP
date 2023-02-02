import React, { useState } from 'react'
import '../App.css';

function Register() {
    const [user, setUser]=useState({
        name:"", email:"", password:"", cPassword:""
    })
  return (
    <div>
    <h1>Registeration form</h1>
    <div>
        <label htmlFor='name'>Name: </label>
        <input type='text' value={user.name}/>
        <label htmlFor='email'>Email: </label>
        <input type='email' value={user.email}/>
        <label htmlFor='password'>Password: </label>
        <input type='password' value={user.password}/>
        <label htmlFor='cpassword'>Confirm Password: </label>
        <input type='password' value={user.cPassword}/>
    </div>
    </div>
  )
}

export default Register