import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from "../../Assets/logo.jpg";
import Avatar from '../Avatar/Avatar';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../../Actions/currentUser';
import decode from 'jwt-decode'
const Navbar = () => {
  const navRef = useRef();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  var User = null;
  
  const handleLogout = () => {
      dispatch({ type: 'LOGOUT' });
      Navigate('/')
      dispatch(setCurrentUser(null))
  }

  useEffect(() => {
      const token = User?.token
      if (token) {
          const decodedToken = decode(token)
          if (decodedToken.exp * 1000 < new Date().getTime()) {
              handleLogout()
          }
      }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [User?.token, dispatch])

const showNavbar = () => {
  console.log("Clicked")
  navRef.current.classList.toggle("responsive_nav");
};
return (
  <header>
    <div className="logo">
      <Link to="/" className='HomeLink'>

        <img src={logo} className="Logo" />
      </Link>
    </div>
    
    <nav ref={navRef}>
      
      <Link id="link" to='/Dashboard'>Dashboard</Link>
      <Link to="/About" id="link" >About Us</Link>
      {User === null ?
                    <Link to='/Auth' className='Login-btn'>Log In</Link> :
                    <>
                        <Avatar backgroundColor='#009dff' px="12px" py="7px" borderRadius="50%" color='white'>
                            {/* <Link to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: 'none' }}> */}
                                {/* {User.result.name.charAt(0).toUpperCase()} */}
                                {/* user */}
                            {/* </Link> */}
                        </Avatar>

                        <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
                    </>
                }
      

      <i onClick={showNavbar} id="close-icon" className="fal fa-times fa-2x"></i>
      
    </nav>
    <i onClick={showNavbar} id="ham-icon" className="fas fa-bars fa-2x"></i>
  </header>
)
}

export default Navbar