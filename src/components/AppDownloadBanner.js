import React from 'react';

function AppDownloadBanner() {
  return (
    <div className="app-download-section">
      {/* 🚨 사진 전체를 링크(a 태그)로 감싸서 클릭 가능하게 만듭니다. */}
      <a href="#download-link" className="app-banner-link">
        <div className="app-banner-box">
          <div className="app-banner-img">
            {/* 주인님의 소중한 사진 app.jpg */}
            <img src="/img/app.jpg" alt="앱 다운로드 배너" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default AppDownloadBanner;