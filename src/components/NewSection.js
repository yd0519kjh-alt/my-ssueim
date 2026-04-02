import React from 'react';
import { Link } from 'react-router-dom'; // 👈 1. 이동 마법 도구 수입!
import { newData } from '../newData';

function NewSection() {
  return (
    <div className="new-section">
      <h2 className="new-title">신상품</h2>
      
      <div className="new-grid">
        {newData.map((item) => (
          <div className="new-card" key={item.id}>
            {/* 🚨 2. 카드 내부를 Link로 감싸서 상세 페이지(/detail/ID)로 보냅니다! */}
            <Link 
              to={`/detail/${item.id}`} 
              onClick={() => window.scrollTo(0, 0)} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="new-img-box">
                <img src={item.img} alt={item.title} />
                <div className="cart-btn-round">🛒</div>
              </div>
              
              <div className="new-info">
                <span className="brand-name">{item.brand}</span>
                <p className="n-name">{item.title}</p>
                <div className="n-price-row">
                  <span className="n-price">{item.price}원</span>
                  {item.oldPrice && <span className="n-old">{item.oldPrice}원</span>}
                </div>
                {item.isNew && <span className="badge-new-item">NEW</span>}
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="new-more">
        <button className="view-more-btn">더보기 +</button>
      </div>
    </div>
  );
}

export default NewSection;