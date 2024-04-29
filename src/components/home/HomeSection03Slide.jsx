import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow } from "swiper";
import { EffectCoverflow, Mousewheel, FreeMode } from "swiper/modules";
// import SwiperCore, { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

const HomeSection03SlideBlock = styled.article`
  .swiper {
    transform: rotate(-5deg) scale(1.05);
    .swiper-wrapper {
      display: flex;
      padding: 10vh 0;

      .swiper-slide {
        /* width: 500px; */
        border-radius: 25px;
        border: 1px solid white;
        overflow: hidden;
        height: auto;
        transition: transform 0.5s;
        opacity: 0.5;
        cursor: grab;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }

      .swiper-slide-prev {
        /* transform: skewY(10deg) translateX(20px); */
        /* background-color: red; */
        opacity: 0.9;
      }
      .swiper-slide-active {
        /* background-color: green; */
        /* transform: translateY(45px); */
        opacity: 1;
      }
      .swiper-slide-next {
        /* transform: skewY(-10deg) translateX(-20px); */
        opacity: 0.9;
        /* background-color: blue; */
      }
    }
  }
`;

const HomeSection03Slide = () => {
  const options = {
    // width: 800,
    modules: [EffectCoverflow, Mousewheel, FreeMode],
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true, // loop 속성 추가
    effect: "coverflow",
    centeredSlides: true,
    coverflowEffect: {
      rotate: -10,
      stretch: 10,
      depth: 100,
      modifier: 0.4,
      slideShadows: true,
    },
    //자동슬라이드
    autoplay: {
      delay: 100,
    },
    //마우스휠
    mousewheel: {
      invert: true,
    },
    breakpoints: {
      1101: {
        slidesPerView: 4,
      },
    },
  };

  const products = [
    { title: "Product 임시", img: "/assets/image/product_01.jpg" },
    { title: "Product 임시", img: "/assets/image/product_02.jpg" },
    { title: "Product 임시", img: "/assets/image/product_03.jpg" },
    { title: "Product 임시", img: "/assets/image/product_04.jpg" },
    { title: "Product 임시", img: "/assets/image/product_05.jpg" },
    { title: "Product 임시", img: "/assets/image/product_06.jpg" },
    { title: "Product 임시", img: "/assets/image/product_07.jpg" },
    { title: "Product 임시", img: "/assets/image/product_08.jpg" },
    { title: "Product 임시", img: "/assets/image/product_09.jpg" },
    { title: "Product 임시", img: "/assets/image/product_10.jpg" },
    { title: "Product 임시", img: "/assets/image/product_11.jpg" },
    { title: "Product 임시", img: "/assets/image/product_12.jpg" },
    { title: "Product 임시", img: "/assets/image/product_13.jpg" },
    { title: "Product 임시", img: "/assets/image/product_14.jpg" },
    { title: "Product 임시", img: "/assets/image/product_15.jpg" },
    { title: "Product 임시", img: "/assets/image/product_16.jpg" },
    { title: "Product 임시", img: "/assets/image/product_17.jpg" },
    { title: "Product 임시", img: "/assets/image/product_18.jpg" },
    { title: "Product 임시", img: "/assets/image/product_19.jpg" },
    { title: "Product 임시", img: "/assets/image/product_20.jpg" },
    { title: "Product 임시", img: "/assets/image/product_21.jpg" },
    { title: "Product 임시", img: "/assets/image/product_22.jpg" },
    { title: "Product 임시", img: "/assets/image/product_23.jpg" },
    { title: "Product 임시", img: "/assets/image/product_24.jpg" },
  ];

  return (
    <HomeSection03SlideBlock>
      <Swiper className="mySwiper" {...options}>
        {products.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.img} alt={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HomeSection03SlideBlock>
  );
};

export default HomeSection03Slide;
