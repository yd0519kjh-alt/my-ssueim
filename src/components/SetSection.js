import React from 'react'; // 👈 맨 앞에 '\'가 없어야 합니다!
import { Link } from 'react-router-dom'; 
import { setData } from '../setData';

function SetSection() {
  return (
    <div className="set-section">
      <h2 className="set-title">그릇세트</h2>
      
      <div className="set-grid">
        {setData.map((item) => (
          <div className="set-card" key={item.id}>
            <Link 
              to={`/detail/${item.id}`} 
              onClick={() => window.scrollTo(0, 0)} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="set-img-box">
                <img src={item.img} alt={item.title} />
                <div className="cart-btn-round">🛒</div>
              </div>
              
              <div className="set-info">
                <p className="s-name">{item.title}</p>
                <div className="s-price-row">
                  <span className="s-price">{item.price}원</span>
                  {item.oldPrice && <span className="s-old">{item.oldPrice}원</span>}
                </div>
                
                {item.isBest && (
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

      <div className="set-more">
        <button className="view-more-btn">더보기 +</button>
      </div>
    </div>
  );
}

export default SetSection;