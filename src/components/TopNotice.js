import React, { useState } from 'react'; // 1. useState를 가져옵니다.

function TopNotice() {
  // 2. [현재상태, 상태변경함수] = useState(초기값);
  // 처음에는 보여야 하니까 초기값은 true!
  const [show, setShow] = useState(true);

  // 3. 만약 show가 false가 되면 아무것도 렌더링하지 않습니다 (사라짐)
  if (!show) return null;

  return (
    <div className="top-notice">
      <div className="notice-content">
        <span>신규회원 가입 시 <strong>1,000P</strong></span>
        <span className="divider">|</span>
        <span>앱 다운 시 <strong>적립금 1,000P + 10% 할인쿠폰</strong></span>
      </div>
      
      {/* 4. 버튼을 누르면 setShow를 false로 바꿉니다. */}
      <button 
        className="top-close-btn" 
        onClick={() => { setShow(false); }}
      >
        ✕
      </button>
    </div>
  );
}

export default TopNotice;