import React, {useState} from 'react';
import styled from 'styled-components'
import cn from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import Nav from '@/components/layout/Nav'


const HeaderBlock = styled.div`
  text-align: center;
  position: fixed;
  display:flex;
  height:100px;
  width:100%;
  

  

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
    display:flex;  justify-content:space-between; width:100%; text-align:center;   align-items:center; position: relative;
    padding:0px 1%;
    background: rgba(255, 255, 255, 0.5); /* 반투명한 배경색 */


    .logo{
        width:100px; max-height:150px;
      img{
        width:100%; height:auto;
      }
      position:relative;
      z-index:9999;
    }
    ul {
      display: flex; justify-content:center; height:auto; 
      @media (max-width:768px){
        display:none;
      }
     
      transition: all 0.5s ease;

      &.open{
        display:none
      }
      
      li { font-size: 1em; color:#222222; font-weight:bold;  font-size:17px;  padding:0px 0px; white-space: nowrap;

      ul{
          width:100%; background:#1774d0; position:absolute; top:100%; left:0; display:none;  padding:0px 15px;
          li{
            display:block; align-items: center; color:#dadada; padding:20px 0;
          }
          
        }
        a { transition: all 0.3s ease; padding:40px 25px;

          &:hover, &.active { color: #1774d0;  font-weight:bold;}
        }
      }
      .depthNews1{
        transition: all 0.5s; 
        &:hover{
          .depthNews2{
            display:flex; justify-content: center;
            li{
              transition:all 0.3s; margin:0 15px;
              a{
              &:hover{
                color:#fff;
              }
            }
            }
           
          }
        }
      }
      .depthService1{
        &:hover{
          .depthService2{
            display:flex; justify-content: center;
            li{
              transition:all 0.3s; margin:0 15px;
              a{
              &:hover{
                color:#fff;
              }
            }
            }
          }
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
      z-index:99999;
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
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
    return (
        <HeaderBlock>
            <nav id="header__nav">
            <h1 className='logo'><Link to="/"><img src="./assets/image/logo_blue.png" alt="" /></Link></h1>
                <ul className={isOpen ? 'open' : ''}>
                    <li>
                        <NavLink to="/about">소개</NavLink>       
                    </li>
                    <li>
                        <NavLink to="/product">서비스주문</NavLink>
                    </li>
                    <li className='depthNews1'>
                        <NavLink to="/news" >소식</NavLink>
                        <ul className='depthNews2'>
                        <li><Link to="/">소식</Link></li>
                        <li><Link to="/">기업소식</Link></li>
                        </ul>
                    </li>
                    <li className='depthService1'>
                        <NavLink to="/notice">고객센터</NavLink>
                        <ul className='depthService2'>
                         <li><Link to="/">공지사항</Link></li>
                         <li><Link to="/">자주묻는질문</Link></li>
                         <li><Link to="/">취소/환불규정</Link></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/ask">문의하기</NavLink>
                    </li>
                </ul>
                <div className="info">
                  <div className="infotext">
                  <a href="#">로그인</a>
                  <a href="#">회원가입</a>
                  </div>
                  <div className={cn("menu-wrap", isOpen && "open")}  onClick={toggleMenu}  >
                  <span className='line'></span>
                  <span className='line'></span>
                  <span className='line'></span>
                </div>
                </div>
            </nav>
            <Nav isOpen={isOpen}/>
       
        </HeaderBlock>
        
    );
};

export default Header;
