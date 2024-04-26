import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {Link} from 'react-router-dom'
import { MdKeyboardDoubleArrowRight} from "react-icons/md";
// import {ReactComponent as MySvg} from '/assets/image/다운로드.svg'


const AboutSection01Block = styled.div`
    height: 100vh;
    background:#fff;
    padding-top: 250px;
    .wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0px 200px;
        max-width:1650px;
        margin: 0 auto;
        @media (max-width:1100px){
            display: block;
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

        &.on{
            transform: translateY(0);
        opacity: 1;
        }

        h1{ color:#fff;
            font-size: 4em;
            color:#222;
            strong{
                color:#1774d0;
            }
        }
        P{
            color:#565656;
            margin-top:30px;
            font-size:1.2em;
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
            span{
                margin: 0 auto;
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

        }
       }
       .imagebox{
        position: relative;
        flex:1;
        width:100%;
        height:350.5px;

        
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
            /* position: absolute; */
            text-align: center;
            /* width:500px; */
            height:auto;
            /* top:0%; */
            /* left:50%; */
            /* transform: translate(-50%); */
            width:500px;
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
                <h1> <strong>순위상승방법</strong>을 <br/>정확히 알고 계신가요?</h1>
                <p>높아지는 중요성만큼 어려워지고있는 SEO 스마트픽인에서 알려드릴게요.
                   </p>
                   <Link to="/ask"><span>진단받기</span>
                   <MdKeyboardDoubleArrowRight  className='arrow' />
                    </Link>
                </div>
                <div className="imagebox">
                    <figure className={cn("img1", image && 'on')}> </figure>
                   
                    <figure className={cn("img2", image && 'on')}><img src="./assets/image/about_ic01.png" alt="" /></figure>
                </div>
            </div>
        </AboutSection01Block>
    );
};

export default AboutSection01;