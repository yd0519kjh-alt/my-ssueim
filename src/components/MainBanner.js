import React from 'react';
import { Carousel } from 'react-bootstrap';
// 🚨 JSON 데이터를 불러옵니다.
import banners from '../banners.json'; 

function MainBanner() {
  return (
    <div className="main-slider">
      {/* indicators={true}: 하단 점 표시 */}
      <Carousel fade interval={3000} indicators={true}>
        
        {/* 🚨 JSON 배열을 map으로 돌려서 배너를 생성합니다. */}
        {banners.map((banner) => (
          <Carousel.Item key={banner.id}>
            <img 
              className="d-block w-100 banner-img" 
              /* 🚨 PUBLIC_URL을 더해 깃허브 배포 경로를 완벽하게 맞춥니다. */
              src={process.env.PUBLIC_URL + banner.img} 
              alt={banner.alt} 
            />
          </Carousel.Item>
        ))}

      </Carousel>
    </div>
  );
}

export default MainBanner;