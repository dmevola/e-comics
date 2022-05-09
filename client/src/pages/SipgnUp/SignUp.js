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
    <div className="signUp my-0 bg-yellow-200 flex">
        {/* <Link to='/'>
            <img src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png'
                    className="signUp__logo" alt=""></img>
        </Link> */}

        <div className="signUp__container my-7 py-0 pb-6 flex bg-blue-300 justify-center items-center">
            <h1 className='font-bold'>Create Account</h1>
            <form onSubmit={handleFormSubmit} className='flex-col sm:w-[250px] mx-9 items-center flex'>
                <h5>Username</h5>
                <input
                  className='form-input rounded pl-2 pr-0 text-center'
                  placeholder='Your username'
                  name='username'
                  type='username'
                  id='username'
                  value={formState.username}
                  onChange={handleChange}
                />
                <h5>E-mail</h5>
                <input 
                    className='rounded pl-2 pr-0 text-center'
                    placeholder='Your email'
                    name='email'
                    type='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChange} />
                <h5>Password</h5>
                <input  
                    className='rounded pl-2 pr-0 text-center'
                    placeholder='******'
                    name='password'
                    type='password'
                    id='password'
                    value={formState.password}
                    onChange={handleChange}/>
                <button className="signUp__registerButton btn p-1.5 font-bold text-gray-800 bg-green-300 leading-tight uppercase rounded shadow-md hover:bg-purple-200 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out items-center sm:px-3" >Create Account</button>
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