import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger를 가져옵니다.
gsap.registerPlugin(ScrollTrigger);
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// GSAP에 ScrollTrigger를 등록합니다.
gsap.registerPlugin(ScrollTrigger);

const AboutSection01Block = styled.div`
  .section3wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 200px;
    margin: auto;
    margin-bottom: 150px;
    
    @media (max-width:1100px){
        display: block;
    }

    .chartbox{
      position: relative;
      flex: 1;
      .chart {
        width: 100%;
    }
    @media (max-width:1100px){
      width: 100%;
    }

    }
   

    .outside {
      position: absolute;
      top: 48px;
      left: 40px; /* 원하는 위치로 조정 */
      img{
        width: 100%;
        
      }
      @media (max-width:1100px){
        top: 40px;
      left: 40px;
    }
    img{
      width: 70%;
    }
    }

    .textBox3 {
      flex: 1;
        @media (max-width:1100px){
        top: 0px;
      left: 40px;
      text-align: center;
    }

      .topborder {
        display: inline-block;
        border-bottom: 2px solid #1774d0;
        padding: 15px 20px;

      }
      h1 {
        color: #fff;
        font-size: 4em;
        color: #222;
        margin-top: 45px;
        strong {
          color: #1774d0;
        }
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
  }
`;

const AboutSection03 = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  // 그래프 애니메이션 실행 함수
  const animateChart = () => {
    if (chartRef.current) { // chartRef가 null이 아닌 경우에만 실행
      if (chartInstance) {
        // 차트 인스턴스가 이미 존재하면 파괴합니다.
        chartInstance.destroy();
      }
      
      // 새로운 차트를 생성합니다.
      const ctx = chartRef.current.getContext("2d");
      createChart(ctx);
    }
  };
  
  // 차트 생성 함수
  const createChart = (ctx) => {
    // 이전에 생성된 차트가 있다면 파괴합니다.
    if (chartInstance) {
      chartInstance.destroy();
    }
  
    // 새로운 차트를 생성합니다.
    Chart.register(
      LineController,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement
    );
    chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["3페이지", "2페이지", "1페이지"],
        datasets: [
          {
            label: "Data 1",
            data: [65, 25, 20],
            borderColor: "#1574D0",
            backgroundColor: "#1574D0",
            pointRadius: 15,
            pointBackgroundColor: "#1574D0",
            pointBorderColor: "rgba(255, 255, 255, 1)",
            pointHoverRadius: 37,
            pointHoverBackgroundColor: "#1574D0",
            pointHoverBorderColor: "rgba(255, 255, 255, 1)",
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: true,
          },
          y: {
            beginAtZero: true,
            max: 80,
          },
        },
        animation: {
          duration: 2000,
          easing: "easeInOutQuart",
        },
      },
    });
  };
  
  // 그래프 초기화와 파괴


  // gsap을 사용한 애니메이션
  useEffect(() => {
    gsap.utils.toArray(".textBox3").forEach((selector) => {
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

    gsap.utils.toArray(".chart").forEach((selector) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: selector,
            start: "100% 100%",
            end: "100% 100%",
            scrub: 1,
            onEnter: () => {
              animateChart();
            },
          },
        })
        .fromTo(
          selector,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, ease: "none", duration: 7 },
          0
        );
    });

    gsap.utils.toArray(".outside").forEach((selector) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: selector,
            start: "100% 100%",
            end: "100% 100%",
            scrub: 1,
            onEnter: () => {
              animateChart();
            },
          },
        })
        .delay(32312)
        .fromTo(
          selector,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, ease: "none", duration: 7 }
        )
       
    });
  }, []);

  

  return (
    <AboutSection01Block>
      <div className="section3wrap">
        <div className="textBox3">
          <span className="topborder"></span>
          <h1>
            SEO의
            <br />
            <strong>중요성</strong>{" "}
          </h1>
          <p>
            잠재 고객이 검색 엔진에서 검색했을 때, 검색 결과에서 <br />
            <strong>최대 3페이지 정도만을 탐색하고 이후 이탈하는 경우가 97%</strong>
            에 달합니다. <br />
            즉, 검색 결과에서 내 브랜드의 순위상승이 이루어지지 않으면 <br />
            자연 검색에서는 고객 방문의 기회가 없다고 해도 무방합니다. <br />
          </p>
        </div>
        <div className="chartbox">
        <canvas ref={chartRef} className="chart" />
        <figure className="outside"><img src="./assets/image/chart_bubble.png" alt="" /></figure>
        </div>
      </div>
    </AboutSection01Block>
  );
};

export default AboutSection03;