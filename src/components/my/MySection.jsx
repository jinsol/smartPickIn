import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from "react-icons/ai";
import cn from 'classnames';
import { CgShoppingCart } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


const MySectionBlock = styled.section`
 

  .depthMy1{
    display: grid;
    grid-template-columns: 1fr 0.2fr 1fr;
    place-items: center;
    text-align: center;
    margin-top: 50px;
   
    h1{
        font-size: 15em;
        color: var(--black);
        opacity: 0.2;
        transition: all 0.3s ease;
        @media (max-width:1200px){
            font-size: 10em;
        }
        @media (max-width:550px){
            font-size: 8em;
        }


    }
    span{
        border: 1px solid black;
        opacity: 0.06;
        height: 100%;
    }
    h2{
        margin-top: 25px;
        font-size: 3em;
        color: var(--black);
        opacity: 0.2;
        transition: all 0.3s ease;
        @media (max-width:1200px){
            font-size: 2em;
        }
    }
    .infoset{
        cursor: pointer;
        transform: scale(0);
        opacity: 0;
        transition: all 0.7s ease;
        &.on{
            transform: scale(1);
        opacity: 1;
        }
    }
    .infoset:hover{
        h1{
            opacity: 1;
            color: var(--blue);
        }
        h2{
            color: var(--blue);
            opacity: 1;
        }
    }
    .cart{
        cursor: pointer;
        transform: scale(0);
        opacity: 0;
        transition: all 0.7s ease;
        &.on{
        transform: scale(1);
        opacity: 1;
        }
    }
    .cart:hover{
        h1{
            opacity: 1;
            color: var(--blue);
        }
        h2{
            color: var(--blue);
            opacity: 1;
        }
    }
  }
`;
const MySection = () => {

    const [myAni,setMyAni] =useState(false)
    const navgiate = useNavigate()

    useEffect(()=>{
        setMyAni(true)
    },[])

    const infoClick = ()=>{
        navgiate('/usermodify')
    }
  
    return (
        <MySectionBlock>
        <ul className="depthMy1">
            <li className={cn('infoset',myAni && 'on')} onClick={infoClick}>
                <h1 className="icon"><AiOutlineUser /></h1>
                <h2>정보수정</h2>
            </li>
            <span></span>
            <li className={cn('cart',myAni && 'on')}>
            <h1 className="icon"><CgShoppingCart /></h1>
                <h2>장바구니</h2>
            </li>
        </ul>

        </MySectionBlock>
    );
};

export default MySection;