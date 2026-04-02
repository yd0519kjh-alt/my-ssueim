
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videoData = [
  {
    id: 1,
    title: "블랑 시리즈",
    subtitle: '식탁 위 작은 유럽 "Blanc"',
    videoId: "GkkFOEsnqAE", // 쓰임 공식: 프리미엄 강옥 소지 BLANC 영상
  },
  {
    id: 2,
    title: "어라운드",
    subtitle: '유니크한 감성의 세라믹웨어 "어라운드"',
    videoId: "VQ-CSGmZh_k", // 쓰임 공식 제품 영상 (예시)
  },
  {
    id: 3,
    title: "하트 시그널 머그",
    subtitle: "장인이 만드는 쓰임의 베스트셀러",
    videoId: "h70ZUBXf8ls", // 쓰임 공식: 하트 시그널 머그 영상
  }
];

function VideoSection() {
  return (
    <div className="video-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="video-swiper"
      >
        {videoData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="video-slide-content">
              {/* 왼쪽: 텍스트 영역 */}
              <div className="video-text-box">
                <h2 className="v-title">{item.title}</h2>
                <p className="v-subtitle">{item.subtitle}</p>
                <button className="v-shop-btn">SHOP</button>
              </div>

              {/* 오른쪽: 유튜브 영상 영역 */}
              <div className="video-player-box">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VideoSection;