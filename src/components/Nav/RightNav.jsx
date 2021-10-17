import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  z-index: 10;
  li {
    padding: 20px 25px;
    cursor: pointer;
    font-family: 'Halant';
    font-size: 18px;
    font-weight: bolder;

    &:hover{
      border-bottom: solid 4px orange;
    
  }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--red);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
      font-family: 'Halant';
      font-weight: 600;
      
    }
  }
`;

const RightNav = ({ open }) => {
  
  return (
  <nav>
    <div>

    
 
      <Ul className="nav-items" open={open}>
        
        <li className="nav-items" >
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          Home
          </Link>
        </li>

        <li className="nav-items">
        <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          About Us
          </Link>
        </li>

        <li className="nav-items">
        <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          Special's
          </Link>
        </li>
        <li className="nav-items">
        <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          Reserve
          </Link>
        </li>
        <Link
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
        <li className="nav-items">
          Chef's
        </li>
          </Link>

        <li className="nav-items">
        <Link
            activeClass="active"
            to="section6"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          Contact
          </Link>
          </li>
      </Ul>
    </div>
  </nav>
  )
}

export default RightNav