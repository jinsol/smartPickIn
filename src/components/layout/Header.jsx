import React, {useState} from 'react';
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import Nav from '@/components/layout/Nav'


const HeaderBlock = styled.div`
  text-align: center;
  padding: 30px 2%;
  position: relative;
  display:flex;
  background:#fff;
  opacity:0.5s;
  blur(15px);

  

  .member { position: absolute; top: 30px; left: 30px;
    a { margin-right: 10px; }
  }
  .itemcount { position: absolute; top: 20px; right: 30px;
    font-size: 30px; color: navy;
    span { position: absolute; top: -2px; right: -5px; width: 20px;
      height: 20px; border-radius: 50%; background: hotpink; color: #fff;
      font-size: 12px; line-height: 20px; text-align: center; font-weight: bold;
    }
  }
  .openNav { position: absolute; top: 20px; right: 80px; font-size: 30px; color: blue;
    cursor: pointer; display: none; }
  #header__nav { 
    display:flex; flex:1; justify-content:space-between; width:92%; text-align:center;
    .logo{font-size:25px;
      position:relative;
      z-index:9999;
    }
    ul {
      display: flex; justify-content:space-between;
      opacity:1;
      transition: all 0.5s ease;

      &.open{
        opacity:0;
      }
      
      li { margin: 10px 10px; font-size: 1em; color:#222222; font-weight:bold; 
        a { transition: all 0.3s ease;
          &:hover, &.active { color: #1774d0;  font-weight:bold;}
        }
      }
    }
 .info{
  position:relative;
  z-index:9999;
  display:flex;
  align-items:center;
  .infotext{
    display:flex; align-items:center;
    margin-right:20px;
    a{padding-left:15px;}
  }
 }
    .menu-wrap{
      position: relative;
      width: 28px;
      height: 16px;
      cursor: pointer;
    }
    .menu-wrap .line{
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: #222;
      left: 0;
    }
    .menu-wrap .line:first-child{
      top: 0;
      transform-origin: 25% 50%;
      transition: .3s;
    }
    .menu-wrap .line:nth-child(2){
      top: calc(50% - 1px);
    }
    .menu-wrap .line:last-child{
      bottom: 0;
      transform-origin: 25% 50%;
      transition: .3s;
    }
    
    
    .menu-wrap.open .line:first-child{
      transform: rotate(45deg) translateX(10%);
    }
    .menu-wrap.open .line:nth-child(2){
      opacity: 0;
    }
    .menu-wrap.open .line:last-child{
      transform: rotate(-45deg) translateX(10%);
    }
  }
`



const Header = () => {
<<<<<<< HEAD
  return <div></div>;
=======

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu =()=>{
    setIsOpen(!isOpen)
  }

  
    return (
        <HeaderBlock>
            <nav id="header__nav">
            <h1 className='logo'><Link to="/">image</Link></h1>
                <ul className={isOpen ? 'open' : ''}>
                    <li>
                        <NavLink to="/">소개</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">서비스주문</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">순위확인</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">고객센터</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">문의하기</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/test">test view</NavLink>
                    </li>
                  
                </ul>
                <div className="info">
                  <div className="infotext">
                  <a href="#">로그인</a>
                  <a href="#">회원가입</a>
                  </div>
                  <div className={`menu-wrap ${isOpen ? 'open' : ''}`}  onClick={toggleMenu}  >
                  <span className='line'></span>
                  <span className='line'></span>
                  <span className='line'></span>
                </div>
                </div>
              <Nav isOpen={isOpen}/>
            </nav>
       
        </HeaderBlock>
        
    );
>>>>>>> d0f72bf384eecb75eb37d3a2ce8b26b0779331ee
};

export default Header;