import React from 'react';
import styled from 'styled-components'

const NavBlock = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(255, 255, 255, 0.3); /* 반투명한 배경색 */
backdrop-filter: blur(1px);
display: flex;
justify-content: center;
align-items: center;
opacity:0;
transition: all 0.5s ease;

&.on{
    opacity:1;

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
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <div className="box"></div>
        </NavBlock>
    );
};

export default Nav;