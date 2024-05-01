import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {Link} from 'react-router-dom'
import { MdKeyboardDoubleArrowRight} from "react-icons/md";


const AboutSection01Block = styled.div`
    padding-top: 250px;
    .wrap{
        display: flex;
        justify-content: space-between;
        margin: 0 150px auto;
        margin-bottom:250px;
        @media (max-width:1100px){
            display: block;
            margin: 0 50px auto;
             margin-bottom:50px;

            .textbox{
                text-align:center;
                a{
                    margin:0 auto;
                }
            }

        }

       .textbox{
        /* display: flex; */
        /* flex: 1;
        flex-direction: column;
        justify-content: center; */
        word-break: keep-all;
        transform: translateY(150px);
        opacity: 0;
        transition: all 1s ease;
        @media (max-width:1100px){
            margin-bottom: 100px;
        }

        &.on{
            transform: translateY(0);
        opacity: 1;
        }

        .mainText{
        h1{ color:#fff;
            font-size: 4em;
            color:#222;
            @media (max-width:1450px){
                font-size: 3.5em;
            }
            @media (max-width:768px){
                font-size:3em;
                text-align: center;
            }
            @media (max-width:550px){
                font-size: 2.3em;
            }
            strong{
                color:#1774d0;
            }
        }
        P{
            color:#565656;
            margin-top:30px;
            font-size:1.4em;
            word-break: keep-all;
           
            @media (max-width:768px){
                font-size:1.2em;
                text-align: center;
            }
            @media (max-width:550px){
                font-size: 1.1em;
            }
        }
        a{
            display:flex;
            align-items: center;
            text-align: center;
            background:#f7bd2c;
            padding: 20px 30px;
            width:40%;
            color:#fff;
            font-size: 1.25em;
            font-weight: bold;
            margin-top: 30px;
            border-radius: 50px;
            line-height:30px;
            @media (max-width:768px){
                font-size: 0.9em;
                padding: 10px 30px;
            }
            @media (max-width:550px){
                font-size: 0.9em;
                padding: 5px 50px;

            }

            span{
                margin:auto;
                text-align: center;
            }

            &:hover{
                
                .arrow{
                    right:150px;
                    opacity: 0.3;
                    transform: translateX(15px);
            

        }
            }
        }
        .arrow{
            font-size:30px;
            transition: all 0.3s ease-out;
            @media (max-width:768px){
                font-size: 25px;
            }
            @media (max-width:550px){
                font-size: 15px;
               

            }
        }
        }
       }
       .imagebox{
        height:350.5px;
        .subtitle{
            strong{
                padding-right: 3px;
                color:#1774d0;
            }
                    text-align: center;
                    font-size: 2rem;
                    letter-spacing: 3px;
                    opacity: 0;
                    transition: all 0.8s 0.7s ease;
                    transform: scale(0);
                    @media (max-width:1450px){
                font-size:1.5rem;
                    
                }
                @media (max-width:768px){
                font-size:1.4rem;
                    
                }
                @media (max-width:550px){
                font-size:1.2rem;
                    
                }
                    &.on{
                    opacity: 1;
                    transform: scale(1);

                    }
                }
            .symbolText{
                text-align: center;
                font-size:14rem;
                font-weight:bold;
                color:#1774d0; 
                @media (max-width:1450px){
                font-size:9rem;
                    
                }
                @media (max-width:768px){
                font-size:7rem;
                    
                }
                @media (max-width:550px){
                font-size:5.5rem;
                    
                }
               
                    span{
                        display: inline-block;
                        transform: translateY(200px);
                        opacity: 0;
                        transition: all 0.8s;
                        transition-delay: 0.2s;
                        
                        &:nth-child(2){
                            transition-delay: 0.3s;
                        }
                        &:nth-child(3){
                            transition-delay: 0.5s;
                        }
                    }
                    
                    &.on{
                        span{
                        transform: translateY(0);
                        opacity: 1;
                        }
                    }
            }
        .img2{
            position: absolute;
            width: 0px;
            top:0%;
            left:50%;
            transform: translate(-50%);
            transition: all 1s ease;
            &.on{
            width:300px;
                
            }
            img{
                width:100%;
            }
        }
        .img1{
           position:absolute;
           top:0;
           left:50%;
           transform: translate(-50%);
            opacity: 0;
            transition: all 0.8s 0.2s ease;
            &.on{
            opacity: 1;
                
            }
            /* img{
                width:100%;
                overflow:unset;
                z-index: -1;
            } */
        }
       }
       
    }
   
`
const AboutSection01 = () => {

    const [image,setImage] = useState(false)
    
    useEffect(()=>{
        setImage(true)
    },[])

   
    return (
        <AboutSection01Block>
            <div className="wrap">
                <div className={cn("textbox", image && 'on')}>
                    <div className="mainText">
                <h1> <strong>순위상승방법</strong>을 <br/>정확히 알고 계신가요?</h1>
                <p>높아지는 중요성만큼 어려워지고있는 SEO 스마트픽인에서 알려드릴게요.
                   </p>
                   <Link to="/ask"><span>진단받기</span>
                   <MdKeyboardDoubleArrowRight  className='arrow' />
                    </Link>
                    </div>
                </div>
                <div className="imagebox">
                     <div className={cn('symbolText', image && 'on')}><span>S</span><span>E</span><span>O</span></div>
                    <p className={cn('subtitle', image && 'on')}><strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimazation</p>
                    {/* <figure className={cn("img1", image && 'on')}><img src="./assets/image/aboutSection01.img.gif" alt="" /></figure> */}
                </div>
            </div>
        </AboutSection01Block>
    );
};

export default AboutSection01;