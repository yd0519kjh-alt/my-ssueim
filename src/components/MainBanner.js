import React from 'react';
import { Carousel } from 'react-bootstrap';

function MainBanner() {
  return (
    <div className="main-slider">
      {/* indicators={true}: 하단에 현재 몇 번째 사진인지 점으로 표시해줍니다 */}
      <Carousel fade interval={3000} indicators={true}>
        
        {/* 1번 배너 */}
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src="/img/banner1.jpg" alt="배너 1" />
        </Carousel.Item>

        {/* 2번 배너 */}
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src="/img/banner2.jpg" alt="배너 2" />
        </Carousel.Item>

        {/* 3번 배너 */}
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src="/img/banner3.jpg" alt="배너 3" />
        </Carousel.Item>

        {/* 4번 배너 */}
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src="/img/banner4.jpg" alt="배너 4" />
        </Carousel.Item>

        {/* 5번 배너 */}
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src="/img/banner5.jpg" alt="배너 5" />
        </Carousel.Item>

        {/* 6번 배너 */}
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src="/img/banner6.jpg" alt="배너 6" />
        </Carousel.Item>

        {/* 7번 배너 */}
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src="/img/banner7.jpg" alt="배너 7" />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default MainBanner;