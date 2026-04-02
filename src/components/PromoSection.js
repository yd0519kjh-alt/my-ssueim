import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function PromoSection() {
  return (
    <div className="promo-container">
      {/* 1. 왼쪽 3단 슬라이더 영역 */}
      <div className="promo-left">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          autoHeight={true} // 👈 이 코드를 꼭 추가해 주세요!
          className="promo-swiper"
        >
          <SwiperSlide>
            <img src="/img/left1.jpg" alt="프로모션 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/left2.jpg" alt="프로모션 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/left3.jpg" alt="프로모션 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 2. 오른쪽 고정 이미지 영역 */}
      <div className="promo-right">
        <div className="promo-rt">
          <img src="/img/promo_rt.jpg" alt="오른쪽 위" />
        </div>
        <div className="promo-rb">
          <img src="/img/promo_rb.jpg" alt="오른쪽 아래" />
        </div>
      </div>
    </div>
  );
}

export default PromoSection;
