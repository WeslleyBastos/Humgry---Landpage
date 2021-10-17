import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 0 0;

    h1{
        margin: -20px 0;
        font-weight: 400;
        font-size: 65px;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <h1> Humgry </h1>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar