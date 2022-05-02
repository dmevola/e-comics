import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from "../../utils/mutations"
import Auth from '../../utils/auth'
import './SignUp.css'

export default function Signup() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  
  const [addUser, { error }] = useMutation(ADD_USER)

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
 // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log(data)
      Auth.login(data.addUser.token)

    } catch (e) {
      console.error(e);
    }
  };



  return (
    <div className="signUp">
        {/* <Link to='/'>
            <img src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png'
                    className="signUp__logo" alt=""></img>
        </Link> */}

        <div className="signUp__container">
            <h1>sign-in</h1>
            <form onSubmit={handleFormSubmit}>
                <h5>Username</h5>
                <input
                  className='form-input'
                  placeholder='Your username'
                  name='username'
                  type='username'
                  id='username'
                  value={formState.username}
                  onChange={handleChange}
                />
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
                <button className="signUp__registerButton" >Create your E-Comic account</button>
            </form>
            {error && <h1>Login failed</h1>}
            <p>
                By signing-in you agree to e-comics Conditions of Use & Sale. Please entersee oure privacy
                Notince, our Cookies Notince and our Interest-based Ads 
                Notice.
            </p>
            
        </div>
    </div>
  )
}