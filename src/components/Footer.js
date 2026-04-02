import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      {/* 1. 상단 정보 섹션 (공지사항, 고객센터 등) */}
      <div className="footer-top">
        <div className="footer-inner">
          {/* 공지사항 */}
          <div className="footer-col">
            <h4 className="col-title">공지사항 <span className="plus-icon">+</span></h4>
            <ul className="footer-list">
              <li>26년 3월 혜택</li>
              <li>26년 2월 혜택</li>
              <li>26년 1월 혜택</li>
              <li>2025 추석 연휴 배송 및 휴무 안내</li>
            </ul>
          </div>

          {/* 고객센터 */}
          <div className="footer-col">
            <h4 className="col-title">고객센터 <span className="plus-icon">+</span></h4>
            <div className="cs-info">
              <p className="tel">1668-2513</p>
              <p className="tel-sub">1668-2513</p>
              <p>평일 : 10:00 ~ 16:00</p>
              <p>점심 : 11:50 ~ 13:00</p>
              <p>토, 일, 공휴일 휴무</p>
            </div>
          </div>

          {/* 입금계좌 안내 */}
          <div className="footer-col">
            <h4 className="col-title">입금계좌 안내</h4>
            <div className="bank-info">
              <p>신한 140-009-148358</p>
              <p>하나 133-910060-33304</p>
              <p>우리 1005-702-042210</p>
              <p>기업 586-014479-01-013</p>
              <p>예금주 : (주)생활의 쓰임</p>
            </div>
          </div>

          {/* 회원혜택 안내 */}
          <div className="footer-col icon-col">
            <h4 className="col-title">회원혜택 안내</h4>
            <div className="benefit-icons">
              <div className="icon-item">
                <div className="circle-icon">🎧</div>
                <span>고객센터</span>
              </div>
              <div className="icon-item">
                <div className="circle-icon">🎁</div>
                <span>회원혜택</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 중간 메뉴 바 */}
      <div className="footer-menu-bar">
        <div className="footer-inner">
          <ul className="menu-links">
            <li>회사소개</li>
            <li>이용약관</li>
            <li className="bold">개인정보처리방침</li>
            <li>이용안내</li>
          </ul>
        </div>
      </div>

      {/* 3. 하단 회사 정보 섹션 */}
      <div className="footer-bottom">
        <div className="footer-inner bottom-flex">
          <div className="info-left">
            <div className="footer-logo">쓰임</div>
            <div className="company-details">
              <p>08503 서울 금천구 가산디지털1로 171 가산 SK V1 center 301호~302호 | 대표 : 김영만 | 전화 : 1668-2513 (cs@ssueim.com) | 상호 : (주)생활의쓰임 | 사업자등록번호 : 105-87-37064</p>
              <p>통신판매업 신고 제2012-서울금천-0364호 [사업자정보확인]</p>
              <p>개인정보보호책임자 : 한희준 | 영업/제휴 문의 : sales@ssueim.com</p>
              <br />
              <p>반품주소지 : 경기도 파주시 상지석길 409 다산로지스 6센터</p>
              <br />
              <p>LG 에스크로 구매안전서비스 서비스 가입사실 확인</p>
              <p>현금 등으로 결제시 저희 쇼핑몰이 가입한 PG 에스크로 구매안전 서비스를 이용하실 수 있습니다.</p>
              <p className="copyright">Copyright © (주)생활의 쓰임. All rights reserved.</p>
            </div>
          </div>

          <div className="info-right">
            <div className="sns-icons">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>Blog</span>
            </div>
            <ul className="quick-links">
              <li>공지사항</li>
              <li>배송및내역주문</li>
              <li>고객센터</li>
              <li>멤버쉽안내</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;