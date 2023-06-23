import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ email, password, setLoggedIn, setNavigate }) {
  const [emailVal, setEmailVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailVal === email && passwordVal === password && emailVal) {
      setLoggedIn(true);
    }
  };

  return (
    <div id='loginPage'>
      <h1 id='login-tag'>Login</h1>

      <form onSubmit={handleSubmit}>
        <h3>Email</h3>
        <input
          placeholder='abc@gmail.com'
          type='email'
          id='login-email'
          value={emailVal}
          onChange={(e) => setEmailVal(e.target.value)}
        />

        <h3>Password</h3>
        <input
          placeholder='Enter password'
          type='password'
          id='login-password'
          value={passwordVal}
          onChange={(e) => setPasswordVal(e.target.value)}
        /><br />

        <button id='login-submit' type='submit'>Login</button>
      </form>

      <br />
      Don't have an account?
      <button id='login-to-register' onClick={() => setNavigate(false)}>
        <Link to="/register">Register here..</Link>
      </button>
    </div>
  );
}

export default Login;
