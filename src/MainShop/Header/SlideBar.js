import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Container = styled.div`
  position: sticky;
  background: #5c3296;
  height: 38px;
  overflow: hidden;
  transition: 0.2s;
  .swiper-wrapper {
    transition-timing-function: linear;
  }
`;

const Link = styled.a`
  line-height: 38px;
  color: #fff;
  font-size: 13px;
  text-decoration: none;
`;

export function SlideBar() {
  return (
    <>
      <Container>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          speed={8000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <testSwiper>
            <Link href="https://whoisnerdy.com/event/23purplefri.html">
              널디 퍼플 프라이데이! 전 품목 최대 83% 할인{" "}
            </Link>
          </testSwiper>
          <SwiperSlide>
            <Link href="https://whoisnerdy.com/event/23purplefri.html">
              널디 퍼플 프라이데이! 전 품목 최대 83% 할인{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://whoisnerdy.com/event/23purplefri.html">
              널디 퍼플 프라이데이! 전 품목 최대 83% 할인{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://whoisnerdy.com/event/23purplefri.html">
              널디 퍼플 프라이데이! 전 품목 최대 83% 할인{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://whoisnerdy.com/event/23purplefri.html">
              널디 퍼플 프라이데이! 전 품목 최대 83% 할인{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://whoisnerdy.com/event/23purplefri.html">
              널디 퍼플 프라이데이! 전 품목 최대 83% 할인{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://whoisnerdy.com/event/23purplefri.html">
              널디 퍼플 프라이데이! 전 품목 최대 83% 할인{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://whoisnerdy.com/event/23purplefri.html">
              널디 퍼플 프라이데이! 전 품목 최대 83% 할인{" "}
            </Link>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
