import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

const AboutSection01Block = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`

const AboutSection02 = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const createChart = () => {
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
          labels: ["3페이지","2페이지", "1페이지"],
          datasets: [
            {
              label: "Data 1",
              data: [65,25,20],
              borderColor: "#1574D0",
              backgroundColor: "rgba(255, 99, 132, 0.9)",
              pointRadius: 15, // 포인트 크기
              pointBackgroundColor: "#1574D0", // 포인트 배경색
              pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
              pointHoverRadius: 37, // 호버 시 포인트 크기
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)", // 호버 시 포인트 배경색
              pointHoverBorderColor: "rgba(255, 255, 255, 1)", // 호버 시 포인트 테두리 색
              fill: false, // 라인 그래프에서 영역 채우기 비활성화
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
              max: 80, // 최대값 설정
            },
          },
        },
      });
    };

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };

    const initializeChart = () => {
      destroyChart(); // 이전 차트 파괴
      createChart(); // 새로운 차트 생성
    };

    // 컴포넌트가 처음 렌더링될 때 차트 초기화
    initializeChart();

    // 컴포넌트가 unmount될 때 차트 파괴
    return () => {
      destroyChart();
    };
  }, []);

  return <AboutSection01Block>
    <h1 className="maintext">
        SEO의 <strong>중요성</strong>
    </h1>
    <canvas ref={chartRef} />
    </AboutSection01Block>;
};

export default AboutSection02;