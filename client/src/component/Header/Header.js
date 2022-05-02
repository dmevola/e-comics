// import React from 'react';
// import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';
// import "./Header.css"

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };

//   return (
//     <header className='header'>
//       <div className='header__container'>
//             <Link to='/'>
//             <h1>e-comics</h1>
//             </Link>

//             <nav>
                // {Auth.loggedIn() ? (
                //     <>
                    
                //     <Link to='/profile'>
                //         <span className='icon'>
                //         <i className='fas fa-user-circle'></i>
                //         </span>
                //         Profile
                //     </Link>

                //     <a href='/' onClick={logout}>
                //         <span className='icon'>
                //         <i className='fas fa-sign-out-alt'></i>
                //         </span>
                //         Logout
                //     </a>
                //     </>
                // ) : (
                //     <>
                //     <Link to='/login'>
                //         <span className='icon'>
                //         <i className='fas fa-sign-in-alt'></i>
                //         </span>
                //         Login
                //     </Link>
                //     <Link to='/signup'>
                //         <span className='icon'>
                //         <i className='fas fa-user-plus'></i>
                //         </span>
                //         Signup
                //     </Link>
                //     </>
                // )}
//             </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import {FaShoppingCart } from 'react-icons/fa';

export default function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    const basket = "1"
    return (
        <div className="header">
           <Link underline="none" to="/">
                <h4 className="header__logo" alt="">E-comic</h4>
           </Link>
           <div className="header__search">
                <input className="header__searchInput" type="text"/>   
                
                
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
                    <Link to="/checkout">
                        <FaShoppingCart/>  
                    </Link>
                    <span className="heade__optionLineTwo Header__basketCount">{basket?.length}</span>
                </div>
                
                 
            </div>
        </div>
    )
}
