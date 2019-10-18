import React, { useState } from "react";
import axios from 'axios';
import {axiosWithLoginAuth} from './utils/axiosWithLoginAuth';


const Login = (props) => {

  const [user, setUser] = useState({ username: '', password: ''})


  const handleChanges = event => {
      setUser({...user, [event.target.name]: event.target.value})
  }
   const handleSubmit = event => {
       event.preventDefault();
       console.log(user);
       axiosWithLoginAuth()
          .post(`/api/login`, user)
          .then(result => {
          console.log(result)
          localStorage.setItem("token", result.data.payload);    
         props.history.push("/bubble-page");
          
      })
  
  }

  // make a post request to retrieve a token from the api

  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            name='username'
            value={user.username}
            onChange={handleChanges} />
        </form>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Password'
            name='password'
            value={user.password}
            onChange={handleChanges} />
        </form>
        <form onSubmit={handleSubmit}>
          <button type='submit'>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
