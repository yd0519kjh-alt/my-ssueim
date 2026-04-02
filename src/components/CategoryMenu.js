import React from 'react';

function CategoryMenu() {
  // 카테고리 데이터 목록
  const categories = [
    { id: 1, title: '그릇세트', img: '/img/cat1.png' },
    { id: 2, title: '면기/파스타', img: '/img/cat2.png' },
    { id: 3, title: '수저/커트러리', img: '/img/cat3.png' },
    { id: 4, title: '찜기', img: '/img/cat4.png' },
    { id: 5, title: '커피잔&머그', img: '/img/cat5.png' },
  ];

  return (
    <div className="category-container">
      {categories.map((item) => (
        <div className="category-item" key={item.id}>
          <div className="category-circle">
            <img src={item.img} alt={item.title} />
          </div>
          <p className="category-title">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryMenu;