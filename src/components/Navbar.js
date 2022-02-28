import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h1>BookStore CMS</h1>
    <div className="links">
      <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
      <NavLink exact to="/Categories" activeClassName="nav-active">Categories</NavLink>
    </div>
    <span>icon</span>
  </div>
);

export default Navbar;
