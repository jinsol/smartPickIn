import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow } from "swiper";
import { EffectCoverflow } from "swiper/modules";
// import SwiperCore, { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

const HomeSection03SlideBlock = styled.article`
  .swiper {
    /* transform: rotate(-5deg); */
    .swiper-wrapper {
      display: flex;
      padding: 10vh 0;

      .swiper-slide {
        width: 500px;
        height: auto;
        background-color: gray;
        transition: transform 0.5s;
        opacity: 0.5;
        transform-style: preserve-3d;
        img {
          object-fit: contain;
          width: 100%;
        }
      }

      .swiper-slide-prev {
        /* transform: skewY(10deg) translateX(20px); */
        background-color: red;
        opacity: 0.9;
      }
      .swiper-slide-active {
        background-color: green;
        /* transform: translateY(45px); */
        opacity: 1;
      }
      .swiper-slide-next {
        /* transform: skewY(-10deg) translateX(-20px); */
        opacity: 0.9;
        background-color: blue;
      }
    }
  }
`;

const HomeSection03Slide = () => {
  const options = {
    // width: 800,
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true, // loop 속성 추가
    effect: "coverflow",
    centeredSlides: true,
    modules: [EffectCoverflow],
    coverflowEffect: {
      rotate: 50,
      stretch: 10,
      depth: 10,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      1101: {},
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
