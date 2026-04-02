import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function BenefitBanner() {
  return (
    <div className="benefit-banner-section">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        className="benefit-swiper"
      >
        {/* 1번 슬라이드: 멤버십 혜택 */}
        <SwiperSlide>
          <div className="benefit-item">
            <div className="benefit-text">
              <h3>쓰임몰 회원 멤버십 혜택</h3>
              <p>가입시 다양한 쿠폰이벤트 🎁</p>
            </div>
            <div className="benefit-icon">
              {/* 쿠폰 SVG 아이콘 */}
              <svg width="80" height="60" viewBox="0 0 100 60">
                <text x="10" y="15" fontSize="10" fontWeight="bold">MEMBERSHIP</text>
                <rect x="5" y="20" width="80" height="40" fill="none" stroke="black" strokeWidth="2" />
                <circle cx="5" cy="40" r="8" fill="#f7f7f7" stroke="black" strokeWidth="2" />
                <line x1="30" y1="20" x2="30" y2="60" stroke="black" strokeDasharray="4" />
                <text x="45" y="50" fontSize="25" fontWeight="bold">%</text>
              </svg>
            </div>
          </div>
        </SwiperSlide>

        {/* 2번 슬라이드: 웨딩&이사 지원 혜택 */}
        <SwiperSlide>
          <div className="benefit-item">
            <div className="benefit-text">
              <h3>웨딩&이사 지원 혜택</h3>
              <p>인증 시 20% 할인쿠폰 3000P지원 💑</p>
            </div>
            <div className="benefit-icon">
              {/* 웨딩 SVG 아이콘 */}
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" stroke="black" strokeWidth="1.5">
                <path d="M20 50 V30 Q20 20 30 20 T40 30 V50" /> {/* 사람1 */}
                <circle cx="30" cy="15" r="5" />
                <path d="M50 50 V35 Q50 25 60 25 T70 35 V50" /> {/* 사람2 */}
                <circle cx="60" cy="20" r="5" />
                <path d="M42 10 Q45 5 48 10 T42 15 T36 10 T42 5" fill="none" /> {/* 하트 */}
                <path d="M43 8 A3 3 0 0 1 47 8 L45 12 L43 8" fill="none" /> {/* 간단 하트 */}
                <text x="42" y="8" fontSize="12">❤️</text>
              </svg>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BenefitBanner;