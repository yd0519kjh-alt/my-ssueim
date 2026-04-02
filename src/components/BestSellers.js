import React from "react";
// 1. 라우터 도구 수입!
import { Link } from "react-router-dom";
// Swiper 관련...
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import bestData from "../data";

function BestSellers() {
  return (
    <div className="best-sellers-container">
      <h2 className="best-title">B E S T</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={true}
        slidesPerGroup={4}
        loop={false}
        className="mySwiper"
      >
        {bestData.map((item) => (
          <SwiperSlide key={item.id}>
            {/* 🚨 수정 포인트: 그냥 /detail이 아니라 번호를 들고 갑니다! */}
            <Link to={`/detail/${item.id}`} className="product-link-wrapper">
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src={item.img} alt={item.title} className="p-img" />
                  <div className="best-number-badge">
                    BEST
                    <br />
                    {item.id}
                  </div>
                  <div className="cart-btn-round">🛒</div>
                </div>
                <div className="product-info">
                  <p className="p-name">{item.title}</p>
                  <p className="p-price-row">
                    <span className="current-price">{item.price}원</span>
                    {item.oldPrice && (
                      <span className="old-price">{item.oldPrice}원</span>
                    )}
                  </p>
                  <div className="p-tag-row">
                    {item.tags &&
                      item.tags.map((tag) => (
                        <span key={tag} className="red-tag">
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BestSellers;
