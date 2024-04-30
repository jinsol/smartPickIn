import React, {useEffect} from 'react';
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const AboutSection04Block = styled.div`
    .about4wrap{
        margin:auto;
  padding: 50px;

 .textBox4 {
        text-align: center;
      .topborder {
        display: inline-block;
        border-bottom: 2px solid #1774d0;
        padding: 15px 20px;

      }
      h1 {
        color: #fff;
        font-size: 4em;
        color: #222;
        margin: 35px auto;
        strong {
          color: #1774d0;
        }
      }
      h2{
        font-size: 3em;
      }
      p {
        color: #565656;
        margin-top: 30px;
        font-size: 1.2em;
        line-height: 1.5em;
        strong{
              font-weight: bold;
              color:#222;
            }
      }
      .depth1{
        display: flex;
        justify-content: center;
       @media (max-width:1100px){
            display: block;
            margin: 0 auto;
            text-align: center;
        }
      
        .card{
        padding:0 20px;
        background:#fff;
        border: 1px solid #1774d0;
        border-radius: 50px;
        margin: 0 1% auto;
        padding: 15px;
        text-align: center;
        flex: 0 0 30%;
        @media (max-width:1100px){
            width: 70%;
            margin: 30px auto;
        }
      
        &:hover{
            img{
                    width: 100%;
                    height: auto;
                    transform:translateY(-10px);

                }
        }
        h2{
            padding-top: 20px;
            font-size: 3em;
            color: #1774d0;
            
        }
        h3{
            font-size: 2em;
            color: #222;
        }
        p{
        white-space: pre-line;
        color: #222;
        font-size: 1em;
        }
            .picbox{
                text-align: center;
                margin:auto;
                width: 250px;
                height: 200px;
                border-radius: 50px;
                background: transparent;
                padding-top:30px;
                overflow: hidden;
                align-items: center;
                img{
                    width: 100%;
                    height: auto;
                    transition: all 0.5s ease;

                }
            }
        }
      }
    }
}
`


const AboutSection04 = () => {
    const picData = [
        {
            num: '1',
            maintext: "광고비용절감",
            subtext: "CPC광고 (검색광고)에 들어가는 광고\n 비용을 절감하고 싶을 때",
            image: "./assets/image/about_pic01.png"
        },
        {
            num: '2',
            maintext: "검색결과 반영",
            subtext: "키워드 검색 시\n 내 브랜드가 보여지고 싶을 때",
            image: "./assets/image/about_pic02.png"

        },
        {
            num: '3',
            maintext: "순위 상승",
            subtext: "키워드 검색 시 3페이지 이후에\n 게시되어 있어 순위 상승이 필요할 때",
            image: "./assets/image/about_pic03.png"

        }
    ]
    useEffect(() => {
        gsap.utils.toArray(".textBox4").forEach((selector) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: selector,
                start: "100% 100%",
                end: "100% 100%",
                scrub: 1,
              },
            })
            .fromTo(
              selector,
              { opacity: 0, y: 100 },
              { opacity: 1, y: 0, ease: "none", duration: 7 },
              0
            );
        });

        gsap.utils.toArray(".card").forEach((selector) => {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: selector,
                  start: "100% 100%",
                  end: "100% 100%",
                  scrub: 1,
                },
              })
              .fromTo(
                selector,
                { opacity: 0, scale:0},
                { opacity: 1, scale:1, ease: "none", duration: 7 },
                0
              );
          });
      }, []);
    return (
        <AboutSection04Block>
            <div className="about4wrap">
            <div className="textBox4">
                <span className='topborder'></span>
                <h1>SEO<br/><strong>언제 필요할까?</strong> </h1>
                <ul className='depth1'>
                    {
                        picData.map((item, index)=>(
                            <li key={index} className='card'>
                                <div className="picbox">
                                <img src={item.image} alt="" />
                                </div>
                                <h2>{item.num}</h2>
                                <h3>{item.maintext}</h3>
                                <p>{item.subtext}</p>
                            </li>
                        ))}
                </ul>
                </div>
                </div>
{}        </AboutSection04Block>
    );
};

export default AboutSection04;