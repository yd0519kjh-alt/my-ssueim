import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { addItem } from '../store';      
import bestData from '../data'; 
import { keywordData } from '../keywordData'; 
import { mdData } from '../mdData'; 
import { setData } from '../setData'; 
import { newData } from '../newData'; 
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams(); 
  const dispatch = useDispatch(); 

  // 모든 데이터를 하나로 통합
  const allProducts = [
    ...bestData, 
    ...Object.values(keywordData).flat(),
    ...mdData,
    ...setData,
    ...newData 
  ];

  const product = allProducts.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  // 페이지 이동 시 항상 맨 위로 스크롤
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!product) return <div className="error-box" style={{padding:'100px', textAlign:'center'}}>상품을 찾을 수 없습니다! 🪨💦</div>

  // 가격 계산 로직 (콤마 제거 후 숫자 변환)
  const priceNum = parseInt(product.price.replace(/,/g, ''));
  const totalPrice = (priceNum * quantity).toLocaleString();

  // 상세 이미지 리스트 생성 (기본값 6장)
  const detailImages = Array.from({ length: product.detailCount || 6 }, (_, i) => i + 1);

  return (
    <div className="detail-container">
      {/* 🟢 상단: 상품 정보 섹션 */}
      <div className="detail-main">
        <div className="detail-left">
          <img src={product.img} alt={product.title} className="main-detail-img" />
        </div>

        <div className="detail-right">
          <span className="brand-tag">SSUEIM (쓰임)</span>
          <h2 className="p-title">{product.title}</h2>
          <div className="p-price-box">
            <span className="p-price">{product.price}원</span>
            {product.oldPrice && <span className="p-old">{product.oldPrice}원</span>}
          </div>

          <div className="option-section">
            <p className="opt-title">옵션 선택</p>
            <select className="option-select">
              <option>--- [필수] 옵션을 선택해 주세요 ---</option>
              <option>기본 구성 세트</option>
            </select>

            <div className="selected-item-box">
              <div className="item-info">
                <span className="sel-name">{product.title}</span>
                <div className="qty-control">
                  <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>
          </div>

          <div className="final-total">
            총 상품금액 <strong>{totalPrice}원</strong>
          </div>

          <div className="detail-btns">
            <button className="btn-cart" onClick={() => {
              dispatch(addItem({ id: product.id, title: product.title, count: quantity, price: product.price, img: product.img }));
              alert('장바구니에 담겼습니다! 🛒');
            }}>장바구니</button>
            <button className="btn-buy">바로 구매하기</button>
          </div>
        </div>
      </div>

      {/* 🟢 하단: 상세 이미지 및 리뷰/관련상품 */}
      <div className="detail-description">
        <div className="detail-tabs">
          <button className="active">상세정보</button>
          <button>리뷰 ({product.reviews?.length || 0})</button>
          <button>Q&A</button>
        </div>

        {/* 상세 이미지 리스트 */}
        <div className="detail-img-list">
          {detailImages.map((num) => (
            <img 
              key={num} 
              src={`/img/detail${id}_${num}.jpg`} 
              alt="상세" 
              className="full-detail-img" 
              onError={(e) => e.target.style.display = 'none'} 
            />
          ))}
        </div>

        {/* 리뷰 섹션 */}
        <div className="review-section">
          <div className="section-title">
            <h3>REVIEW</h3>
            <p>직접 구매하신 고객님들의 소중한 후기입니다.</p>
          </div>
          <div className="review-list">
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((rev) => (
                <div key={rev.id} className="review-card">
                  <div className="rev-header">
                    <span className="rev-stars">{"★".repeat(rev.rating)}</span>
                    <span className="rev-user">{rev.user}</span>
                    <span className="rev-date">{rev.date}</span>
                  </div>
                  <div className="rev-body">
                    <p>{rev.content}</p>
                    {rev.img && <img src={rev.img} alt="리뷰" className="rev-img" />}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-review">아직 작성된 리뷰가 없습니다. 🪨💦</div>
            )}
          </div>
        </div>

        {/* 🚨 관련상품 섹션 (6단 그리드 레이아웃 적용) */}
        {product.related && (
          <div className="related-section">
            <h4 className="related-title">관련상품</h4>
            <div className="related-grid">
              {product.related.map((rel) => (
                <div key={rel.id} className="related-item">
                  <Link to={`/detail/${rel.id}`} onClick={() => window.scrollTo(0, 0)}>
                    <div className="related-img-box">
                      <img src={rel.img} alt={rel.title} />
                    </div>
                    <div className="related-info">
                      <p className="rel-name">{rel.title}</p>
                      <p className="rel-price">{rel.price}원</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;