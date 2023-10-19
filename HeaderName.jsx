import React from 'react';
import './Header.css';
import {Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header_logout() {
    const navigate = useNavigate();
    async function handleLogout(event) {
        event.preventDefault();
        try {
          alert("you are logged out successfully")
          navigate('/');
          console.log('done')
  
        }
        catch (error) {
          console.log('error in logout', error.message)
          alert("Error in Sign In")
        }
        console.log("clicked")
      }
  return (
    <div>
      <header className="header">
        <h2 className="logo">DEV@DEAKIN</h2>
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="options">
          <button className="option">POST</button>
        
           <button className='option'onClick={handleLogout}>LOGOUT</button>
          <Outlet/>
        </div>
      </header>
    </div>
  );
}

export default Header_logout;