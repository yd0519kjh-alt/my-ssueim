import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// 1. 공통 부품(Components) 수입
import TopNotice from './components/TopNotice';
import Header from './components/Header';
import Footer from './components/Footer';

// 2. 메인 페이지용 섹션들 수입
import MainBanner from './components/MainBanner';
import CategoryMenu from './components/CategoryMenu';
import BestSellers from './components/BestSellers';
import BenefitBanner from './components/BenefitBanner';
import PromoSection from './components/PromoSection';
import KeywordSection from './components/KeywordSection'; 
import MdPick from './components/MdPick';
import AppDownloadBanner from './components/AppDownloadBanner';
import VideoSection from './components/VideoSection';
import SetSection from './components/SetSection'; 
import NewSection from './components/NewSection';

// 3. 독립 페이지(Pages) 수입
import ProductDetail from './pages/ProductDetail'; 
import Cart from './pages/Cart';
import SearchResult from './pages/SearchResult'; // 👈 검색 페이지 수입 완료!

function App() {
  return (
    <div className="App">
      {/* 🟢 고정 영역: 어떤 페이지에서도 항상 보임 */}
      <TopNotice />
      <Header />

      {/* 🟢 가변 영역: 주소창에 따라 바뀌는 화면 */}
      <Routes>
        {/* 🏠 1. 메인 페이지 (/) */}
        <Route path="/" element={
          <>
            <MainBanner />
            <CategoryMenu /> 
            <BestSellers />
            <BenefitBanner /> 
            <PromoSection />
            <KeywordSection />
            <MdPick /> 
            <AppDownloadBanner />
            <VideoSection /> 
            <SetSection /> 
            <NewSection />
          </>
        } />

        {/* 🔍 2. 검색 결과 페이지 (/search) */}
        <Route path="/search" element={<SearchResult />} />

        {/* 🛒 3. 장바구니 페이지 (/cart) */}
        <Route path="/cart" element={<Cart />} />

        {/* 🏺 4. 상세 페이지 (/detail/:id) */}
        <Route path="/detail/:id" element={<ProductDetail />} />

        {/* 404 에러 페이지 처리 (옵션) */}
        <Route path="*" element={<div style={{padding: '100px'}}>잘못된 경로입니다! 🪨💦</div>} />
      </Routes>

      {/* 🟢 고정 영역: 푸터 */}
      <Footer /> 
    </div>
  );
}

export default App;