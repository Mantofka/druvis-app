import React, { useEffect, useState } from 'react';
import '../css/Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from '../StateProvider';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [{ user }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();

    // Send information to firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push(`/login-success/${user.uid}`);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Login</h1>
        <input
          className='login__username'
          type='text'
          placeholder='Username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className='login__password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={signIn} className='login__button'>
          Login
        </button>
      </div>
      <div className='home_button'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
