import React, {useState} from 'react';
import styled from 'styled-components'
import cn from 'classnames'
import { NavLink,Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowDown  } from "react-icons/md";


const NavBlock = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(255, 255, 255, 0.8); /* 반투명한 배경색 */
backdrop-filter: blur(10px);
transition: all 0.5s ease;
display: none;
align-items: center;
justify-content: center;
&.on{
  display:flex;
}


.nav__menu{
  .depth1{
    li{
      font-size:35px;
      padding:25px 0;
      line-height: 35px;
      position:relative;
      
      
      a { 
        display: inline-block;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
          &:hover, &.active, &.on{ color: #1774d0; 
          
          }
          .arrow{
            display: inline-block;
            position: absolute;
            top:25px;
          }
          .strong{
            font-weight:bold;
            color:#105faf;
            font-size: 20px;
          }
        }
        
    }
    li:nth-child(3){
      .hidden1{
        display:none;
        li{
          margin-top: 15px;
          font-size:20px;
          color:gray;
          padding:5px 0;
        }
        &.on{
          display:block;
          color:green;

        }
      }
    }
    li:nth-child(4){
      .hidden2{
        display:none;
        li{
          font-size:20px;
          margin-top: 15px;
          color:gray;
          padding:5px 0;
        }
        &.open{
          display:block;
        }
      }
    }
  }
}


`

const Nav = ({isOpen}) => {
  const [click, setClick] = useState(false)
  const [click1, setClick1] = useState(false)

  const depthClick = ()=>{
    setClick(!click)
  }
  const depthClick1 = ()=>{
    setClick1(!click1)
  }
    
    return (
        <NavBlock className={isOpen && 'on'}>
             <div className="nav__menu">
                 <ul className='depth1'>
                     <li onClick={isOpen}>
                        <NavLink to="/about"><span className='strong'>01</span> 소개 <MdKeyboardDoubleArrowRight className='arrow' /></NavLink>       
                    </li>
                    <li onClick={isOpen}>
                        <NavLink to="/product"><span className='strong'>02</span> 서비스주문 <MdKeyboardDoubleArrowRight className='arrow' /></NavLink>
                    </li>
                    <li onClick={depthClick}>
                        <a className={click && 'on'}><span className='strong'>03</span> 소식 <MdOutlineKeyboardDoubleArrowDown className='arrow' />
                      </a>
                        <ul className={cn("hidden1", click && "on")}>
                        <li> <Link to="/">소식</Link></li>
                        <li> <Link to="/">기업소식</Link></li>
                        </ul>
                    </li>
                    <li onClick={depthClick1}>
                        <a className={click1 && 'on'}><span className='strong'>04</span> 고객센터  <MdOutlineKeyboardDoubleArrowDown className='arrow' />
                        </a>
                        <ul className={cn("hidden2", click1 && "open")} >
                        <li> <Link to="test">공지사항</Link></li>
                        <li> <Link to="/">자주묻는질문</Link></li>
                        <li> <Link to="/">취소/환불규정</Link></li>
                        </ul>
                    </li>
                    <li onClick={isOpen}>
                        <NavLink to ="/ask"><span className='strong'>05</span> 문의하기<MdKeyboardDoubleArrowRight className='arrow' />
                      </NavLink>
                    </li>
                </ul>
      </div>
      <div className="box"></div>
        </NavBlock>
    );
};

export default Nav;