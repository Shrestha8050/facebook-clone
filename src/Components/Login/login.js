import { Button } from '@material-ui/core';
import React from 'react';
import './login.css';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../Provider/StateProvider';
import { actionType } from '../../Provider/reducer';

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <h1>Login Page</h1>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png'
          alt=''
        />
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwpapvRhYpMRwxkQP2yDOmEvo8n_T6EpwKgQ&usqp=CAU'
          alt=''
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
