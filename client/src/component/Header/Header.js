import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useStateValue } from '../../StateProvider';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC } from '../../utils/queries';
import { ImSearch } from 'react-icons/im'


export default function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const { data:userData} = useQuery(QUERY_ME_BASIC)
    const [username] = useState(userData)
    console.log(username)
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <div className="header bg-blue-400 fixed w-full h-[80px] flex justify-between items-center md:justify-around">
           <Link underline="none" to="/">
                <h4 className="header__logo text-2xl text-yellow-300 hover:text-red-300 md:justify-center" alt="">E-comic</h4>
           </Link>
           <div className="header__search justify-center md:max-w-[800px]">
                <input className="header__searchInput max-w-[400px] rounded" type="text"/>
                <button className='btn inline-block p-1.5  bg-red-400 font-medium leading-tight uppercase rounded shadow-md hover:bg-yellow-200 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out items-center md:px-3'>{<ImSearch size={15} className='text-gray-600' />}</button>
                
                {/* {userData.me.username} */}
            
                {username}
                 
            </div>
            <div className="header__nav flex items-center">
                <Link  to={!Auth.loggedIn() && '/login'}>
                    <div className="header__option md:flex-row">
                    {Auth.loggedIn() ? (
                    <>
                    <Link className='bg-yellow-200 my-1 pb-1 px-1 rounded leading-tight shadow-md flex justify-center items-center text-gray-700 md:w-[72px] md:mx-3 transition duration-150 ease-in-out hover:outline hover:outline-1' to={"/addItem"}>
                        Add Item
                    </Link>
                    <Link className='bg-blue-200 my-1 pb-1 px-1 rounded leading-tight shadow-md flex justify-center items-center text-gray-700 md:w-[72px] md:mx-3 transition duration-150 ease-in-out hover:outline hover:outline-1' to='/profile'>
                        
                        Profile
                    </Link>
                    

                    <a className="bg-red-400 my-1 items-center flex justify-center pb-1 rounded shadow-md leading-tight text-gray-700 md:w-[80px] transition duration-150 ease-in-out hover:outline hover:outline-1" href='/' onClick={logout}>

                        Logout
                    </a>
                    </>
                ) : (
                    <>
                    <Link to='/login' className='bg-red-400 my-1 items-center flex justify-center pb-1 rounded shadow-md leading-tight text-gray-700 md:w-[80px] transition duration-150 ease-in-out hover:outline hover:outline-1'>
                        <div>
                            {/* <span className='icon'>
                                <i className='fas fa-sign-in-alt'></i>
                            </span> */}
                            Login
                        </div>
                        
                    </Link>
                    <Link to='/signup'className='bg-yellow-200 my-1 pb-1 px-1 rounded leading-tight shadow-md flex justify-center items-center text-gray-700 md:w-[72px] md:mx-3 transition duration-150 ease-in-out hover:outline hover:outline-1'>
                        {/* <span className='icon'>
                            <i className='fas fa-user-plus'></i>
                        </span> */}
                        Signup
                    </Link>
                    </>
                )}
                    </div>
                </Link>    
                <div className="header__optionBasket bg-green-300 flex justify-center items-center h-[35px] mr-2 pl-2 rounded shadow-md md:mr-5 text-gray-800">
                    
                    {localStorage.getItem('id_token') ?
                    <Link to="/checkout">
                        
                        <ShoppingBasketIcon className="ShoppingBasketIcon text-gray-800"/>  
                    </Link>
                    : <Link to="/login">
                        
                        <ShoppingBasketIcon className="ShoppingBasketIcon text-gray-800 hover:text-purple-500"/>  
                    </Link>
                    }
                    <span className="heade__optionLineTwo Header__basketCount">{basket?.length}</span>
                </div>
                
                
                 
            </div>
        </div>
    )
}
