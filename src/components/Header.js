import React, { useState } from 'react'; // 👈 useState 추가
import { Link, useNavigate } from 'react-router-dom'; // 👈 useNavigate 추가
import { useSelector } from 'react-redux';

function Header() {
  // 1. 상태 및 도구 준비
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 저장 창고
  const navigate = useNavigate(); // 페이지 이동을 도와주는 배달원
  const cart = useSelector((state) => state.cart);
  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

  // 2. 검색 실행 함수
  const handleSearch = (e) => {
    // 엔터키를 누르거나 아이콘을 클릭했을 때 실행
    if (e.key === 'Enter' || e.type === 'click') {
      if (searchQuery.trim() === '') return; // 빈칸이면 무시
      navigate(`/search?q=${searchQuery}`); // 주소창에 ?q=검색어 붙여서 이동!
      setSearchQuery(''); // 이동 후 입력창 비우기
    }
  };

  return (
    <header className="main-header">
      <div className="header-left">
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src="/img/logo.png" alt="쓰임 로고" className="logo-img" />
          </div>
        </Link>
        <div className="hamburger">☰</div>
      </div>

      <nav className="header-center">
        <ul className="nav-menu">
          <li>COLLECTION</li>
          <li>BEST</li>
          <li>PRODUCT</li>
          <li className="gift-tag">🎁GIFT</li>
          <li>COMMUNITY</li>
          <li>B2B바로가기</li>
          <li>K굿즈 매장안내</li>
        </ul>
      </nav>

      <div className="header-right">
        {/* 검색 입력창 영역 */}
        <div className="header-search-box" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          background: '#f4f4f4', 
          padding: '5px 12px', 
          borderRadius: '20px',
          marginRight: '15px'
        }}>
          <input 
            type="text" 
            placeholder="검색어를 입력하세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // 글자 칠 때마다 상태 업데이트
            onKeyDown={handleSearch} // 엔터키 감지
            style={{ 
              border: 'none', 
              background: 'none', 
              outline: 'none', 
              fontSize: '13px',
              width: '150px' 
            }}
          />
          <span onClick={handleSearch} style={{ cursor: 'pointer', fontSize: '16px' }}>🔍</span>
        </div>

        <div className="icon-group">
          <span>👤</span>
          
          <Link to="/cart" className="cart-header-link" style={{ position: 'relative', textDecoration: 'none', color: 'inherit' }}>
            <span>🛒</span>
            {totalCount > 0 && (
              <span className="cart-badge" style={{
                position: 'absolute',
                top: '-5px',
                right: '-10px',
                background: '#ff4d4f',
                color: 'white',
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '50%',
                fontWeight: 'bold'
              }}>
                {totalCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;