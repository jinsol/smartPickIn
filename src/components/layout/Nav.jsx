import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const NavBlock = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(255, 255, 255, 0.3); /* 반투명한 배경색 */
backdrop-filter: blur(1px);
display: none;
justify-content: center;
align-items: center;
transition: all 0.5s ease;

&.on{
  display:flex;
}

.nav__menu {
  text-align: center;
}

`

const Nav = ({isOpen}) => {
    
    return (
        <NavBlock className={isOpen && 'on'}>
             <div className="nav__menu">
        <h1>네비게이션메뉴</h1>
        <ul>
          <li><NavLink to='/'>1</NavLink></li>
          <li><NavLink to='/'>2</NavLink></li>
          <li><NavLink to='/'>3</NavLink></li>
          <li><NavLink to='/'>4</NavLink></li>
          <li><NavLink to='/'>5</NavLink></li>
        </ul>
      </div>
      <div className="box"></div>
        </NavBlock>
    );
};

export default Nav;