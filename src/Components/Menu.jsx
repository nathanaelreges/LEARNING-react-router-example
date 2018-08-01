import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Menu = props => {
   const homeActiveCheck = (match, location) => {
      const path = location.pathname
      return  path == '/home' || path == '/'
   }
   
   return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to='/' className="navbar-brand">Navbar</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
         <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
               <NavLink to='/home' className="nav-link" 
                  isActive={homeActiveCheck} activeClassName="active">
                  Home
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink to='/about' className="nav-link" activeClassName="active">About</NavLink>
            </li>
         </ul>
      </div>
   </nav>
}

export default Menu