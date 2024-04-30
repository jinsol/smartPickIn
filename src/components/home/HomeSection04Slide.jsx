import React from "react";
import styled from "styled-components";
import HomeSection04SlideItem from "@/components/home/HomeSection04SlideItem";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSection04SlideBlock = styled.li`
  @media (max-width: 1100px) {
    overflow: hidden;
  }
  .swiper {
    overflow: visible;
    @media (max-width: 1100px) {
      overflow: hidden;
    }
    .swiper-wrapper {
      .swiper-slide {
        max-width: 90%;
      }
    }
  }
`;

const HomeSection04Slide = () => {
  const slideItems = [
    {
      tag: "SITE",
      title: "사이트 순위상승",
      list: ["#스타트 패키지"],
      image: "/assets/image/service_site.png",
    },
    {
      tag: "PLACE",
      title: "플레이스 순위상승",
      list: ["#검색유입 패키지", "#UV활성화 + 저장하기"],
      image: "/assets/image/service_place.png",
    },
    {
      tag: "INSTAGRAM",
      title: "인스타그램 인기게시물",
      list: ["#인스타 계정 육성 관리"],
      image: "/assets/image/service_instagram.png",
    },
  ];

  const options = {
    slidesPerView: 1,
    spaceBetween: 30,
    className: "mySwiper",
    loop: true,
    slidesPerGroup: 1,
    breakpoints: {
      1101: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        loop: false, // 1101px 이상에서는 loop 비활성화
      },
    },
  };

  return (
    <HomeSection04SlideBlock>
      <Swiper {...options}>
        {slideItems.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <HomeSection04SlideItem
                tag={item.tag}
                title={item.title}
                list={item.list}
                image={item.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HomeSection04SlideBlock>
  );
};

export default HomeSection04Slide;
