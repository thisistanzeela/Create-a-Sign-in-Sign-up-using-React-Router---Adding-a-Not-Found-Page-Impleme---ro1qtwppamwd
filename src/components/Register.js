import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ emailChange, passwordChange, setNavigate }) {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    emailChange(newEmail);
    passwordChange(newPassword);
    if (newEmail && newPassword) {
      setNavigate(true);
    }
  };

  return (
    <div id='registerPage'>
      <h1 id='register-tag'>Register</h1>

      <form onSubmit={handleSubmitBtn}>
        <h3>Email</h3>
        <input
          placeholder='abc@gmail.com'
          type='text'
          id='register-email'
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />

        <h3>Password</h3>
        <input
          placeholder='Enter password'
          type='password'
          id='register-password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        /><br />

        <input id='register-submit' type='submit' value='Submit' />
      </form>

      <br />

      <div>
        Already a User?
        <Link to='/'>
          <button id='register-to-login'>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
