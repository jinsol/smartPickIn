import styled from "styled-components";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

// import "./styles.css";
const SectionBlock = styled.section`
  min-height: 100vh;
  padding: 200px 0;
  /* transform: rotate(6deg); */
  .swiper-wrapper {
    perspective: 900px;
    .swiper-slide {
      transform: preserve-3d;
      width: 500px;
      height: 500px;
      background-color: gray;

      &:hover {
        background-color: black;
      }
    }
  }
`;

const HomeSection03 = () => {
  const calculateRotation = (slideIndex, centerIndex) => {
    const distanceFromCenter = slideIndex - centerIndex;
    const rotationAngle = distanceFromCenter * -20; // Adjust -20 for desired rotation幅 (haba, amount)
    return `rotateY(${rotationAngle}deg)`;
  };
  return (
    <SectionBlock>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </SectionBlock>
  );
};

export default HomeSection03;
