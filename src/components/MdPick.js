import React from 'react';
import { Link } from 'react-router-dom'; // 👈 1. 이동 마법 도구 수입!
import mdData from '../mdData.json';

function MdPick() {
  return (
    <div className="md-section">
      <h2 className="md-title">MD'S Pick</h2>
      
      <div className="md-grid">
        {mdData.map((item) => (
          <div className="md-card" key={item.id}>
            {/* 🚨 2. 카드 전체나 주요 영역을 Link로 감쌉니다! */}
            <Link to={`/detail/${item.id}`} onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="md-img-box">
                <img src={item.img} alt={item.title} />
                <div className="cart-icon-small">🛒</div>
              </div>
              <div className="md-info">
                <p className="m-name">{item.title}</p>
                <div className="m-price-row">
                  <span className="m-price">{item.price}원</span>
                  {item.oldPrice && <span className="m-old">{item.oldPrice}원</span>}
                </div>
                
                {/* 배지 로직 */}
                {item.badge === "NEW" && <span className="badge-new">NEW</span>}
                {item.badge === "BEST" && (
                  <div className="badge-best-group">
                    <span className="badge-best">BEST</span>
                    <span className="badge-hot">인기상품</span>
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="md-more">
        <button className="view-more-btn">더보기 +</button>
      </div>
    </div>
  );
}

export default MdPick;