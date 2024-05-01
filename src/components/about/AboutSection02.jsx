import React from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection02Block = styled.div`
.section2wrap{
  display: flex;
  justify-content: space-between;
  margin: 0 150px auto;
  margin-bottom:250px;

  @media (max-width:1100px){
    display: block;
  margin: 0 50px auto;
  margin-bottom:150px;
    text-align: center;
}

  .textBox2{
    .topborder{
      display: inline-block;
      border-bottom:2px solid #1774d0;
      padding: 15px 20px ;
    }
    h1{ color:#fff;
            font-size: 4em;
            color:#222;
            margin-top: 45px;
            @media (max-width:1450px){
                font-size: 3.5em;
            }
            @media (max-width:768px){
                font-size:3em;
                text-align: center;
            }
           
            strong{
                color:#1774d0;
            }
        }
        P{
            color:#565656;
            margin-top:30px;
            font-size:1.2em;
            line-height: 1.5em;
            word-break: keep-all;
            @media (max-width:768px){
                font-size:1.1em;
                text-align: center;
            }
            @media (max-width:550px){
                font-size: 0.9em;
            }
            strong{
              font-weight: bold;
              color:#222;
            }
        }
  }
  .downrold{
   
      padding: 0px;
      text-align: center;
      overflow: hidden;

      .imagebox{
        width: 250px;
        height: auto;
        margin: 0 auto;
        @media (max-width:1100px){
          width:150px;
          padding-top: 50px;
        }
      img{
        width:100%;
        height:100%;
      transition: all 0.5s ease;
      }
    }
      .downbutton{
        display: inline-block;
        border:1px solid #1774d0;
        padding: 20px 60px;
        margin-top: 15px;
        border-radius: 50px;
        font-size: 1.1rem;
        font-weight: bold;
        color: #1774d0;
        transition: all 0.3s ease;
        word-break: keep-all;
        white-space: nowrap;
        @media (max-width: 768px) {
      font-size: 1.1rem;
      padding: 15px 50px;
    }
        @media (max-width: 550px) {
      font-size: 1rem;
      padding: 15px 40px;
    }
        &:hover{
          background: #1774d0;
          border:1px solid transparent;
          color: #fff;
          
        }
      }
  }
}

`

const AboutSection02 = () => {
  React.useEffect(() => {
    gsap.utils.toArray(".textBox2").forEach((selector) => {
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
          { opacity: 1, y: 0, ease: "none", duration: 7 },
          0
        );
    });
  }, []);

  React.useEffect(() => {
    gsap.utils.toArray(".imagebox").forEach((selector) => {
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
          { opacity: 0, scale: 0},
          { opacity: 1, scale: 1, ease: "none", duration: 9 },
          0
        );
    });
  }, []);

  React.useEffect(() => {
    gsap.utils.toArray(".downbutton").forEach((selector) => {
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
          { opacity: 0,},
          { opacity: 1, ease: "in", duration: 9 },
          0
        );
    });
  }, []);


  return (
    <AboutSection02Block>
      <div className="section2wrap">
       <div className="textBox2">
                <span className='topborder'></span>
                <h1>SEO란 <br/><strong>무엇일까</strong> </h1>
                <p>SEO(Search Engine Optimazation, 검색엔진최적화)는
                    <br />                
                  검색 유저의 의도를 이해하고 이에 충실히 맞춰 <strong>검색결과 페이지에서<br />
                  잘 확인되도록 구조를 개선하여 오가닉트래픽(Organic Traffic)을 늘리는 방법</strong>입니다.
                   </p>
                </div>
                <div className="downrold">
                 <figure className='imagebox'> <img src="./assets/image/about_ic02.png" alt="" /></figure>
                  <a href="https://site-high.com/files/proposal_seo.pdf" target='_blank' className='downbutton'>파일열기</a>
                </div>
             </div>
    </AboutSection02Block>
  );
};

export default AboutSection02;