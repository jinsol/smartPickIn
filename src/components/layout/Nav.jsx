import React, {useState} from 'react';
import styled from 'styled-components'
import cn from 'classnames'
import { NavLink,useNavigate } from 'react-router-dom'
import { IoMdArrowDropdown,IoMdArrowDropright,IoMdArrowDropup   } from "react-icons/io";
import { initServiceMenu } from "@/store/service";
import { initNewsMenu } from "@/store/news";
import { useDispatch } from 'react-redux';



const NavBlock = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(255, 255, 255, 0.95); /* 반투명한 배경색 */
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
      font-size:25px;
      padding:25px 0;
      line-height: 35px;
      position:relative;
      z-index:99999999;
      font-weight: 500;
      color: var(--gray01);
      @media (max-width:768px){
        font-size: 20px;
      }
      
      
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
            top:30px;
            @media (max-width:768px){
            top:33px;
      }
          }
          .strong{
            font-weight:bold;
            color:#105faf;
            font-size: 22px;
            padding-right:5px;
            @media (max-width:768px){
              font-size: 18px;
            
      }
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
          cursor: pointer;

          @media (max-width:768px){
              font-size: 15px;
            
      }
        }
        &.on{
          display:block;

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
          cursor: pointer;

          @media (max-width:768px){
              font-size: 15px;
            
      }
        }
        &.open{
          display:block;
        }
      }
    }
    li:last-child{
      .hidden3{
        display:none;
        li{
          font-size:20px;
          margin-top: 15px;
          color:gray;
          padding:5px 0;
          cursor: pointer;
          @media (max-width:768px){
              font-size: 15px;
            
      }
        }
        &.open{
          display:block;
        }
      }
    }
  }
}


`

const Nav = ({isOpen, toggleMenu,loging,user}) => {
  const [click, setClick] = useState(false)
  const [click1, setClick1] = useState(false)
  const [click2, setClick2] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleMenuClick = (value) => {
    navigate(`/service/#${value}`);
    dispatch(initServiceMenu(value));
  };
  const newsMenuClick = (value) => {
    navigate(`/news/#${value}`);
    dispatch(initNewsMenu(value));
  };
  const myPageClick = () => {
    navigate('/usermodify');
  };
  const myPageClick1 = () => {
    navigate('/cart');
  };

  

  const depthClick = ()=>{
    setClick(!click)
  }
  const depthClick1 = ()=>{
    setClick1(!click1)
  }
  const depthClick2 =()=>{
    setClick2(!click2)
  }
 
    
    return (
        <NavBlock className={isOpen && 'on'}>
             <div className="nav__menu">
                 <ul className='depth1'>
                     <li onClick={toggleMenu}>
                        <NavLink to="/about"><span className='strong'>01</span> 소개<IoMdArrowDropright className='arrow' /></NavLink>       
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink to="/product"><span className='strong'>02</span> 서비스주문 <IoMdArrowDropright className='arrow' /></NavLink>
                    </li>
                    <li onClick={depthClick}>
                        <a className={click && 'on'}><span className='strong'>03</span> 소식 
                          {
                            !click ?
                          <IoMdArrowDropdown  className='arrow' />
                          :
                          <IoMdArrowDropup  className='arrow' />
                        }
                      </a>
                        <ul className={cn("hidden1", click && "on")}>
                        <li onClick={()=>{
                          toggleMenu();
                          newsMenuClick('소식')
                        }}> 소식</li>
                        <li onClick={()=>{
                          toggleMenu();
                          newsMenuClick('기업소식')
                        }}>기업소식</li>
                        </ul>
                    </li>
                    <li onClick={depthClick1}>
                        <a className={click1 && 'on'} ><span className='strong'>04</span> 고객센터
                        {
                            !click1 ?
                          <IoMdArrowDropdown  className='arrow' />
                          :
                          <IoMdArrowDropup  className='arrow' />
                        }  
                        </a>
                        <ul className={cn("hidden2", click1 && "open")} >
                        <li onClick={()=>{toggleMenu(); handleMenuClick('공지사항')}}>공지사항</li>
                        <li onClick={()=>{toggleMenu(); handleMenuClick('자주묻는질문')}}> 자주묻는질문</li>
                        <li onClick={()=>{toggleMenu(); handleMenuClick('취소·환불규정')}}> 취소·환불규정</li>
                        </ul>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink to ="/ask"><span className='strong'>05</span> 문의하기<IoMdArrowDropright className='arrow' />
                      </NavLink>
                    </li>
                    {
                     user || loging ? (
            <ul>
              <li onClick={depthClick2}>
                <a className={click2 && 'on'}><span className='strong'>06</span> 마이페이지 
                  {!click2 ? <IoMdArrowDropdown className='arrow' /> : <IoMdArrowDropup className='arrow' />}
                </a>
                <ul className={cn("hidden3", click2 && "open")}>
                  <li onClick={()=>{
                    myPageClick('정보수정')
                    toggleMenu();
                  }}>정보수정</li>
                  <li  onClick={()=>{
                   myPageClick1('장바구니')
                    toggleMenu();
                  }}>장바구니</li>
                </ul>
              </li>
            </ul>
          ) : (
            <div></div>
          )}
      </ul>  
      </div>
      <div className="box"></div>
        </NavBlock>
    );
};


export default Nav;