import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/war_zone.jpg')} alt='logo' width="100" height="60" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/Favorites' activeStyle>
            Favorites
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            New Releases
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Popular Movies
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;