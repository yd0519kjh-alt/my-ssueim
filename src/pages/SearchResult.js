import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import bestData from '../data'; // 메인 상품 데이터
import keywordData from '../keywordData.json';
import mdData from '../mdData.json';

function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || ""; // 주소창의 ?q=검색어 가져오기

  // 🚨 2. 모든 데이터를 하나로 합치기 (mdData 추가!)
  const allProducts = [
    ...bestData,
    ...Object.values(keywordData).flat(),
    ...mdData // 👈 MD 추천 상품들도 이제 검색 대상입니다!
  ];

  // 3. 검색어가 포함된 상품 필터링 (제목 검색)
  const filteredProducts = allProducts.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-result-container" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '50px', fontWeight: 'bold' }}>
        <span style={{ color: '#ff4d4f' }}>"{query}"</span> 검색 결과 ({filteredProducts.length})
      </h2>

      {filteredProducts.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '30px' 
        }}>
          {filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ overflow: 'hidden', borderRadius: '10px', aspectRatio: '1/1', border: '1px solid #eee' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '15px 5px' }}>
                  <p style={{ fontSize: '14px', margin: '5px 0', height: '40px', overflow: 'hidden' }}>{item.title}</p>
                  <p style={{ fontWeight: 'bold' }}>{item.price}원</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '100px 0', color: '#999' }}>
          <p style={{ fontSize: '40px' }}>🔍</p>
          <p>찾으시는 상품이 없습니다. 다른 검색어를 입력해 보세요!</p>
        </div>
      )}
    </div>
  );
}

export default SearchResult;