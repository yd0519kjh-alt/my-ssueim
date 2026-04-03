import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { logout } from '../store'; 

function Header() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user); // 👤 유저 상태 감시
  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (searchQuery.trim() === '') return; 
      navigate(`/search?q=${searchQuery}`); 
      setSearchQuery(''); 
    }
  };

  const menuLinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    width: '100%',
    height: '100%'
  };

  // 🎨 아이콘 옆 텍스트 스타일
  const iconTextStyle = {
    fontSize: '12px',
    color: '#666',
    marginLeft: '5px',
    cursor: 'pointer'
  };

  return (
    <header className="main-header" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      borderBottom: '1px solid #f2f2f2',
      position: 'relative'
    }}>
      <div className="header-left" style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" className="logo-link" style={{ textDecoration: 'none' }}>
          <div className="logo">
            <img src="/img/logo.png" alt="쓰임 로고" className="logo-img" style={{ height: '25px' }} />
          </div>
        </Link>
        <div className="hamburger" style={{ display: 'none', fontSize: '20px', marginLeft: '15px', cursor: 'pointer' }}>☰</div>
      </div>

      <nav className="header-center">
        <ul className="nav-menu" style={{
          display: 'flex',
          gap: '25px',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          fontSize: '14px',
          fontWeight: 500
        }}>
          <li>COLLECTION</li>
          <li>BEST</li>
          <li>PRODUCT</li>
          <li className="gift-tag" style={{ color: '#ff4d4f' }}>🎁GIFT</li>
          <li>COMMUNITY</li>
          <li>B2B바로가기</li>
          
          {/* 🚨 [수정] 게시판 뒤에 '매장안내'가 마지막 메뉴가 됩니다. */}
          <li><Link to="/board" style={menuLinkStyle}>게시판</Link></li>
          <li>K굿즈 매장안내</li>
        </ul>
      </nav>

      <div className="header-right" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="header-search-box" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          background: '#f4f4f4', 
          padding: '5px 12px', 
          borderRadius: '20px',
          marginRight: '20px'
        }}>
          <input 
            type="text" 
            placeholder="검색어를 입력하세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            onKeyDown={handleSearch} 
            style={{ 
              border: 'none', 
              background: 'none', 
              outline: 'none', 
              fontSize: '13px',
              width: '130px',
              color: '#333'
            }}
          />
          <span onClick={handleSearch} style={{ cursor: 'pointer', fontSize: '16px', color: '#888' }}>🔍</span>
        </div>

        {/* 🚨 [수정 및 핵심] 아이콘 그룹 영역 */}
        <div className="icon-group" style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '20px', color: '#333' }}>
          
          {/* 👤 사람 아이콘 영역: 로그인/로그아웃 기능을 심었습니다. */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            { user.isLogin ? (
              // 로그인 상태: 사람 아이콘 + 이름 + 로그아웃 텍스트
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span title="마이페이지" style={{cursor:'pointer'}}>👤</span>
                <span style={{ fontSize: '12px', color: '#333', fontWeight: 'bold', marginLeft: '8px' }}>
                  {user.userName}님
                </span>
                <span onClick={() => {
                  dispatch(logout());
                  alert('로그아웃 되었습니다. 🔒');
                  navigate('/');
                }} style={iconTextStyle} title="로그아웃">
                  (로그아웃)
                </span>
              </div>
            ) : (
              // 로그아웃 상태: 사람 아이콘만 표시 -> 클릭 시 로그인 페이지 이동
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }} title="로그인">
                👤<span style={iconTextStyle}>로그인</span>
              </Link>
            )}
          </div>
          
          {/* 🛒 장바구니 아이콘 영역 */}
          <Link to="/cart" className="cart-header-link" style={{ position: 'relative', textDecoration: 'none', color: 'inherit' }} title="장바구니">
            <span>🛒</span>
            {totalCount > 0 && (
              <span className="cart-badge" style={{
                position: 'absolute',
                top: '-7px',
                right: '-12px',
                background: '#ff4d4f',
                color: 'white',
                fontSize: '10px',
                padding: '2px 7px',
                borderRadius: '50%',
                fontWeight: 'bold',
                lineHeight: 1
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