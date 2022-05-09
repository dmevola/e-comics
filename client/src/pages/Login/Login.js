import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations'
import Auth from '../../utils/auth'
import './Login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);
  const Navigate = useNavigate();

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try{
      const { data } = await login({
        variables: { ...formState }
      })

      console.log(data)
      Auth.login(data.login.token)
    } catch (e) {
      console.error(e)
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const signUp = ()=>{
    Navigate("/signup")
  }

  return (
    <div className="login">
        {/* <Link to='/'>
            <img src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png'
                    className="login__logo" alt=""></img>
        </Link> */}

        <div className="login__container">
            <h1>sign-in</h1>
            <form onSubmit={handleFormSubmit}>
                <h5>E-mail</h5>
                <input placeholder='Your email'
                    name='email'
                    type='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChange} />
                <h5>Password</h5>
                <input  placeholder='******'
                    name='password'
                    type='password'
                    id='password'
                    value={formState.password}
                    onChange={handleChange}/>
                <button className="login__signInButton" >Sign In</button>
            </form>
            {error && <h1>Login failed</h1>}
            <p>
                By signing-in you agree to e-comics Conditions of Use & Sale. Please entersee oure privacy
                Notince, our Cookies Notince and our Interest-based Ads 
                Notice.
            </p>
            <button className="signUp__registerButton" onClick={signUp}>Create your E-Comic account</button>
        </div>
    </div>
  )
}