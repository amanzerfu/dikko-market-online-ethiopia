// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Amanuel Zerfu</Logo>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/portfolio">Portfolio</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled(Link)`
  margin-left: 2rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
