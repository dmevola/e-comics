import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useStateValue } from '../../StateProvider';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC } from '../../utils/queries';

export default function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const { data:userData} = useQuery(QUERY_ME_BASIC)
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <div className="header">
           <Link underline="none" to="/">
                <h4 className="header__logo" alt="">E-comic</h4>
           </Link>
           <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/> 
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
