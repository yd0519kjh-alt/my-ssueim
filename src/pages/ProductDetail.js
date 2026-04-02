import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { addItem } from '../store';      
import bestData from '../data'; 
import { keywordData } from '../keywordData'; 
import { mdData } from '../mdData'; 
import { setData } from '../setData'; 
import { newData } from '../newData'; // 👈 [1. 신상품 데이터 수입 추가!]
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams(); 
  const dispatch = useDispatch(); 

  // 🚨 [2. 모든 데이터를 하나로 합치는 마스터 명단 - newData 추가!]
  const allProducts = [
    ...bestData, 
    ...Object.values(keywordData).flat(),
    ...mdData,
    ...setData,
    ...newData // 👈 이제 신상품 녀석들도 여기서 찾을 수 있습니다!
  ];

  // 해당 ID의 상품 찾기
  const product = allProducts.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  // 상품이 없을 경우 예외 처리
  if (!product) return <div className="error-box">상품을 찾을 수 없습니다! 🪨💦</div>

  // 상세 이미지 개수 설정 (기본값 5개)
  const detailImages = Array.from({ length: product.detailCount || 5 }, (_, i) => i + 1);

  return (
    <div className="detail-container">
      {/* 🟢 상단: 상품 기본 정보 */}
      <div className="detail-main">
        <div className="detail-left">
          <img src={product.img} alt={product.title} className="main-detail-img" />
        </div>
        <div className="detail-right">
          <span className="brand">쓰임 (SSUEIM)</span>
          <h2 className="p-title">{product.title}</h2>
          <div className="p-price-box">
            <span className="p-price">{product.price}원</span>
            {product.oldPrice && <span className="p-old">{product.oldPrice}원</span>}
          </div>
          
          <div className="order-options">
            <p>옵션: 기본 세트</p>
            <div className="qty-box">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="action-btns">
            <button 
              className="cart-btn"
              onClick={() => {
                dispatch(addItem({
                  id: product.id,
                  title: product.title,
                  count: quantity,
                  price: product.price,
                  img: product.img
                }));
                alert('장바구니에 상품을 담았습니다! 🛒');
              }}
            >
              장바구니
            </button>
            <button className="buy-btn">바로 구매하기</button>
          </div>
        </div>
      </div>

      {/* 🟢 하단: 상세 정보 & 리뷰 & 관련상품 */}
      <div className="detail-description">
        <div className="detail-tabs">
          <button className="active">상세정보</button>
          <button>리뷰 ({product.reviews?.length || 0})</button>
          <button>Q&A</button>
        </div>

        <div className="detail-img-list">
          {detailImages.map((num) => {
            const isGif = product.gifIndex === num;
            const extension = isGif ? 'gif' : 'jpg';

            return (
              <img 
                key={num}
                src={`/img/detail${id}_${num}.${extension}`} 
                alt={`${product.title} 상세설명 ${num}`} 
                className="full-detail-img" 
              />
            );
          })}
        </div>

        {/* 리뷰 섹션 생략 (기존 코드와 동일) */}
        {/* 관련상품 섹션 생략 (기존 코드와 동일) */}
      </div>
    </div>
  );
}

export default ProductDetail;