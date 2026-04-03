import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 🚨 [수정 1] 중괄호 { } 제거하고 .json 확장자를 명시합니다!
import keywordData from '../keywordData.json'; 
import './KeywordSection.css';

function KeywordSection() {
  // JSON 데이터의 첫 번째 키를 기본값으로 설정하거나 기존처럼 직접 입력합니다.
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
            {/* 선택된 태그에 해당하는 상품 리스트 출력 */}
            {keywordData[activeTag] && keywordData[activeTag].map((item) => (
              <div className="keyword-card" key={item.id}>
                
                <Link to={`/detail/${item.id}`} onClick={() => window.scrollTo(0, 0)} className="kw-link">
                  <div className="keyword-img-box">
                    {/* 🚨 [수정 2] 이미지 경로에 PUBLIC_URL을 더해 깃허브 배포 시 엑박을 방지합니다! */}
                    <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
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

