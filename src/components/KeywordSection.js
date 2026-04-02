import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 👈 1. 내비게이션 도구 수입!
import { keywordData } from '../keywordData';
import './KeywordSection.css'; // 👈 이 코드가 있어야 CSS를 읽어옵니다!

function KeywordSection() {
  const [activeTag, setActiveTag] = useState("#마일드화이트");
  const tags = Object.keys(keywordData);

  return (
    <div className="keyword-section">
      <div className="keyword-inner">
        
        {/* 1. 왼쪽 사이드바 */}
        <div className="keyword-sidebar">
          <h2>인기 키워드</h2>
          <ul>
            {tags.map((tag) => (
              <li 
                key={tag} 
                className={activeTag === tag ? "active" : ""}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* 2. 오른쪽 상품 그리드 */}
        <div className="keyword-content">
          <div className="keyword-grid">
            {keywordData[activeTag].map((item) => (
              <div className="keyword-card" key={item.id}>
                {/* 🚨 2. 카드 전체를 Link로 감쌉니다. 주소는 /detail/번호! */}
                <Link to={`/detail/${item.id}`} onClick={() => window.scrollTo(0, 0)} className="kw-link">
                  <div className="keyword-img-box">
                    <img src={item.img} alt={item.title} />
                    <div className="cart-icon-small">🛒</div>
                  </div>
                  <div className="keyword-info">
                    <p className="kw-title">{item.title}</p>
                    <p className="kw-price">{item.price}원</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <button className="view-more-btn">더보기 +</button>
        </div>

      </div>
    </div>
  );
}

export default KeywordSection;