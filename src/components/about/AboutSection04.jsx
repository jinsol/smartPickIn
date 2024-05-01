import React, {useEffect} from 'react';
import styled from "styled-components";
import gsap from "gsap";


const AboutSection04Block = styled.div`
    .about4wrap{
    margin:auto;
    padding: 50px;
    @media (max-width:1100px){
      padding: 30px;
    }

 .textBox4 {
        text-align: center;
        .mainText4{
          margin-bottom: 120px;
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
        @media (max-width:1450px){
                font-size: 3.5em;
            }
            @media (max-width:768px){
                font-size:3em;
                text-align: center;
            }
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
        border-radius: 50px;
        border: 1px solid #1774d0;
        margin: 0 1% auto;
        padding: 15px;
        text-align: center;
        flex: 0 0 30%;
        transition: all 0.5s ease;
        @media (max-width:1100px){
            margin: 50px auto;
            padding: 25px;
        }
        
      
      
        &:hover{
            background:rgba(255,255,255,0.5);
            box-shadow: 0 6px 9px rgba(14, 78, 255, 0.1), 0 8px 10px rgba(3, 104, 255, 0.12);

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
            font-weight: 400;

        }
        p{
        white-space: pre-line;
        color: #222;
        font-size: 1em;
        padding: 10px 0;
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
            num: '01',
            maintext: "광고비용절감",
            subtext: "CPC광고 (검색광고)에 들어가는 광고\n 비용을 절감하고 싶을 때",
            image: "./assets/image/about_pic01.png"
        },
        {
            num: '02',
            maintext: "검색결과 반영",
            subtext: "키워드 검색 시\n 내 브랜드가 보여지고 싶을 때",
            image: "./assets/image/about_pic02.png"

        },
        {
            num: '03',
            maintext: "순위 상승",
            subtext: "키워드 검색 시 3페이지 이후에\n 게시되어 있어 순위 상승이 필요할 때",
            image: "./assets/image/about_pic03.png"

        }
    ]
    React.useEffect(() => {
      gsap.utils.toArray(".mainText4").forEach((selector) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: selector,
              start: "100% 100%",
              end: "100% 100%",
              scrub: 1,
              // markers: true,
            },
          })
          .fromTo(
            selector,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, ease: "none", duration: 5 },
            0
          );
      });
    }, []);
    return (
        <AboutSection04Block>
            <div className="about4wrap">
            <div className="textBox4">
              <div className="mainText4">
                <span className='topborder'></span>
                <h1>SEO<br/><strong>언제 필요할까?</strong> </h1>
                </div>
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
       </AboutSection04Block>
    );
};

export default AboutSection04;