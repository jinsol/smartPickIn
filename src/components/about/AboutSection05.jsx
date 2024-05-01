import React, {useEffect} from 'react';
import styled from 'styled-components';
import gsap from "gsap";

const AboutSection05Block = styled.div`
.about5wrap{
    margin: auto;
    margin-top: 300px;
    padding-bottom:150px;
    text-align: center;
.listBox5 {
      .topborder {
        border-bottom: 2px solid #1774d0;
        padding: 15px 20px;

      }
      h1 {
        color: #fff;
        font-size: 4em;
        color: #222;
        margin: 35px auto;
        @media (max-width:1100px){
            font-size:3.5em;
        }
        @media (max-width:768px){
            font-size:3em;
        }
        strong {
          color: #1774d0;
        }
      }
      h2{
        font-size: 3em;
        color: #1774d0;
      }
      p {
        color: #565656;
        margin-top: 30px;
        font-size: 1.2em;
        line-height: 1.5em;
        white-space: pre-line;

        strong{
              font-weight: bold;
              color:#222;
            }
      }
      .depth1{
        padding:0px 30px;
        max-width: 1400px;
        margin: auto;
        .cardlist{
            margin-bottom: 150px;
            padding: 35px;
            border-radius: 50px;
            border: 1px solid #1774d0;
            &:nth-child(1){
                margin-top: 100px;
            }
            p{
                font-size: 1em;
                word-break: keep-all;
                color: #000;
                
            }
            h3{
                font-size: 3em;
                color: #222;
                font-weight: 300;
                @media (max-width:1100px){
                    font-size: 2.5em;
                }
                @media (max-width:768px){
                    font-size: 2.1em;
                }
            }
        }
      }
    }
}
`

const AboutSection05 = () => {

    React.useEffect(() => {
        gsap.utils.toArray(".cardlist").forEach((selector) => {
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
        gsap.utils.toArray(".mainText5").forEach((selector) => {
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

    const whyData = [
        {
            num: '01',
            maintext: "SEO 전문가",
            subtext: "SEO 검색엔진최적화 데이터 구조화 기술역량 우수기업으로 선정되었으며,\n웹개발 전문 인력을 보유하여 크롤링, 기술적 SEO 문제를 발견하여 개선사항 및 맞춤형 전략을 제안드립니다. (SEO 홈페이지 제작 가능)",
            image: "./assets/image/about_pic01.png"
        },
        {
            num: '02',
            maintext: "NO 어뷰징",
            subtext: "프로그램을 통한 무분별하고 과도한 작업은 어뷰징으로 인해 패널티가 발생할 수 있습니다.\n 스마트픽인에서는 실제 유저들을 모집 진행하며, 단기간에 과도한 작업을 권해드리지 않아 안정적이고 장기간 순위를 유지할 수 있도록 돕습니다.",
            image: "./assets/image/about_pic02.png"

        },
        {
            num: '03',
            maintext: "꾸준한 관리",
            subtext: "단순히 작업을 안내하는 것으로 끝이 아니라, 순위를 상승시킬 수 있는 방법에 대해 함께 고민하고\n 연구하여 지속적인 관리 및 컨설팅까지 진행하고 있습니다.",
            image: "./assets/image/about_pic03.png"

        },
        {
            num: '04',
            maintext: "다양한 분야의 작업",
            subtext: "N사, G사 등의 플레이스, 사이트, 백링크, 인스타그램 작업은 물론,\n 여러 분야에서 고객 확보 및 매출 증대를 위해 여러분에게 도움을 드릴 수 있는 다양한 솔루션들을 제공하고 있습니다.",
            image: "./assets/image/about_pic03.png"

        }
    ]
    return (
        <AboutSection05Block>
            <div className="about5wrap">
            <div className="listBox5">
                <div className="mainText5">
                <span className='topborder'></span>
                <h1>왜,<br/><strong>스마트픽인일까?</strong> </h1>
                </div>
                <ul className='depth1'>
                    {
                        whyData.map((item, index)=>(
                            <li key={index} className='cardlist'>
                                <div className="picbox">
                                    <img src="" alt="" />
                                </div>
                                <h2>{item.num}</h2>
                                <h3>{item.maintext}</h3>
                                <p>{item.subtext}</p>
                            </li>
                        ))}
                </ul>
                </div>
                </div>
        </AboutSection05Block>
    );
};

export default AboutSection05;