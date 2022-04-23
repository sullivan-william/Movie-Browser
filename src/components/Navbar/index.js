import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/war_zone.jpg')} alt='logo' width="500" height="70" />
        </NavLink>
        <NavLink to='/'>
            Home
          </NavLink>
        <Bars />
        <NavMenu>
          {/* <NavLink to='/about' activeStyle>
            About
          </NavLink> */}
          <NavLink to='/Favorites' activeStyle>
            Favorites
          </NavLink>
          {/* <NavLink to='/contact-us' activeStyle>
            New Releases
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Popular Movies
          </NavLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;