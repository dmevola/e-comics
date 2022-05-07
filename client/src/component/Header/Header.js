import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useStateValue } from '../../StateProvider';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC } from '../../utils/queries';
import { HiSearch } from 'react-icons/hi'
import { ImSearch } from 'react-icons/im'

export default function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const { data:userData} = useQuery(QUERY_ME_BASIC)
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <div className="header bg-blue-400 fixed w-full h-[80px] flex justify-between items-center">
           <Link underline="none" to="/">
                <h4 className="header__logo text-2xl text-yellow-300 hover:text-red-300" alt="">E-comic</h4>
           </Link>
           <div className="header__search">
                <input className="header__searchInput max-w-[400px]" type="text"/>
                <button className='<button class="btn inline-block p-1.5  bg-red-400 font-medium leading-tight uppercase rounded shadow-md hover:bg-yellow-200 hover:shadow-lg   focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out items-center'>{<ImSearch size={15} className='text-gray-600 hover:text-red-400' />}</button>
                {/* <SearchIcon className="header__searchIcon"/>  */}
                {/* {userData.me.username} */}
                 
            </div>
            <div className="header__nav">
                <Link to={!Auth.loggedIn() && '/login'}>
                    <div className="header__option">
                    {Auth.loggedIn() ? (
                    <>
                    
                    <Link to='/profile'>
                        <span className='icon'>
                        <i className='fas fa-user-circle'></i>
                        </span>
                        Profile
                    </Link>

                    <a href='/' onClick={logout}>
                        <span className='icon'>
                        <i className='fas fa-sign-out-alt'></i>
                        </span>
                        Logout
                    </a>
                    </>
                ) : (
                    <>
                    <Link to='/login'>
                        <span className='icon'>
                        <i className='fas fa-sign-in-alt'></i>
                        </span>
                        Login
                    </Link>
                    <Link to='/signup'>
                        <span className='icon'>
                        <i className='fas fa-user-plus'></i>
                        </span>
                        Signup
                    </Link>
                    </>
                )}
                    </div>
                </Link>    
                <div className="header__optionBasket">
                    
                    {localStorage.getItem('id_token') ?
                    <Link to="/checkout">
                        
                        <ShoppingBasketIcon className="ShoppingBasketIcon"/>  
                    </Link>
                    : <Link to="/login">
                        
                    <ShoppingBasketIcon className="ShoppingBasketIcon"/>  
                </Link>
                }
                    <span className="heade__optionLineTwo Header__basketCount">{basket?.length}</span>
                </div>
                
                 
            </div>
        </div>
    )
}
