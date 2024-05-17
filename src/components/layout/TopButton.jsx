import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMdArrowRoundUp } from "react-icons/io";

const TopButtonBlock = styled.div`
  position: fixed;
  bottom: 20px;
  right: 50px;

 

  #top {
    font-weight: bold;
    font-size: 35px;
    padding: 15px 20px;
    color: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 50%;
    outline: none;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    @media (max-width:768px){
    padding: 10px 15px;
  }
  @media (max-width:550px){
    padding: 7px 12px;
  }
  }
.arrow{
    transition: all 0.3s ease;

}
  #top:hover {
    color: var(--white);
    background: var(--blue);
    .arrow{
        transform: translateY(-5px);
    }
  }
`;

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);

    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <TopButtonBlock>
        <button id='top' onClick={scrollToTop} type='button'><IoMdArrowRoundUp className='arrow' /></button>
      </TopButtonBlock>
    )
  );
};

export default TopButton;