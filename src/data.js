const bestData = [
  { 
    id: 1, 
    title: "레트로 라인 6인 홈세트 그릇세트 40P", 
    price: "159,000", 
    oldPrice: "200,000", 
    img: "/img/best1.jpg", 
    tags: ["BEST", "인기상품"],
    detailCount: 9,
    gifIndex: 2,
    reviews: [
      { id: 1, user: "민**", rating: 5, date: "2026.03.30", content: "세트 구성이 너무 알차요! 레트로한 감성이 딱 제 스타일입니다.", img: "" },
      { id: 2, user: "장**", rating: 5, date: "2026.04.01", content: "6인 세트라 손님 올 때 쓰기 너무 좋네요. 포장도 꼼꼼해요!", img: "" }
    ],
    related: [
      { id: 101, title: "레트로 라인 면기 (4color)", price: "10,900", img: "/img/related1.jpg" },
      { id: 102, title: "레트로 라인 찬기 중 (4color)", price: "7,900", img: "/img/related2.jpg" },
      { id: 103, title: "레트로 라인 찬기 소 (4color)", price: "5,500", img: "/img/related3.jpg" },
      { id: 104, title: "레트로 라인 원형접시 대 (4color)", price: "12,900", img: "/img/related4.jpg" },
      { id: 105, title: "레트로 라인 원형접시 중 (4color)", price: "8,900", img: "/img/related5.jpg" },
      { id: 106, title: "레트로 라인 원형접시 소 (4color)", price: "7,500", img: "/img/related6.jpg" },
    ]


  },
  { 
    id: 2, 
    title: "[국가유산진흥원 굿즈] 선비의 멋 주안상 세트(4P)", 
    price: "50,000", 
    oldPrice: "", 
    img: "/img/best2.jpg", 
    tags: [],
    detailCount: 8,
    reviews: [
      { id: 1, user: "K-굿즈", rating: 5, date: "2026.03.15", content: "선물용으로 샀는데 받는 분이 너무 좋아하셨어요. 고급스럽네요.", img: "" }
    ]
  },
  { 
    id: 3, 
    title: "보담 6인 그릇세트 식기세트 42P", 
    price: "159,000", 
    oldPrice: "245,000", 
    img: "/img/best3.jpg", 
    tags: ["BEST", "인기상품"],
    detailCount: 5,
    reviews: [
      { id: 1, user: "이**", rating: 4, date: "2026.03.22", content: "깔끔하고 무게감도 적당해요. 매일 사용 중입니다.", img: "" }
    ]
  },
  { 
    id: 4, 
    title: "[국가유산진흥원 굿즈] 국가유산진흥원 고궁 소스볼 세트", 
    price: "27,000", 
    oldPrice: "", 
    img: "/img/best4.jpg", 
    tags: [],
    detailCount: 7,
    reviews: [
      { id: 1, user: "나**", rating: 5, date: "2026.04.02", content: "디자인이 독특해서 소스 담아두면 식탁이 확 살아요!", img: "" }
    ]
  },
  { 
    id: 5, 
    title: "[국가유산진흥원 굿즈] 오얏꽃 막걸리잔 세트(2P)", 
    price: "36,000", 
    oldPrice: "", 
    img: "/img/best5.jpg", 
    tags: [],
    detailCount: 5,
    reviews: [
      { id: 1, user: "전**", rating: 5, date: "2026.02.28", content: "막걸리 마실 맛 납니다. 잔이 정말 예뻐요.", img: "" }
    ]
  },
  { 
    id: 6, 
    title: "신라의미소 소스볼 3P세트", 
    price: "25,000", 
    oldPrice: "", 
    img: "/img/best6.jpg", 
    tags: ["BEST", "인기상품"],
    detailCount: 8,
    reviews: [
      { id: 1, user: "신**", rating: 5, date: "2026.03.10", content: "미소가 너무 귀여워요. 아이들이 좋아하네요.", img: "" }
    ]
  },
  { 
    id: 7, 
    title: "블랑 4인 그릇세트 홈세트 27P", 
    price: "199,000", 
    oldPrice: "", 
    img: "/img/best7.jpg", 
    tags: ["BEST", "인기상품"],
    detailCount: 9,
    reviews: [
      { id: 1, user: "윤**", rating: 4, date: "2026.03.05", content: "심플하고 고급진 화이트예요. 질리지 않을 것 같아요.", img: "" }
    ]
  },
  { 
    id: 8, 
    title: "블랑 접시세트 4P 접시선물 선물패키지", 
    price: "45,000", 
    oldPrice: "", 
    img: "/img/best8.jpg", 
    tags: ["BEST", "인기상품"],
    detailCount: 10,
    reviews: [
      { id: 1, user: "하**", rating: 5, date: "2026.04.01", content: "집들이 선물로 샀는데 패키지가 예뻐서 따로 포장 안 해도 되네요.", img: "" }
    ]
  },
  { 
    id: 9, 
    title: "윈터 스몰디쉬 4P 세트", 
    price: "25,900", 
    oldPrice: "", 
    img: "/img/best9.jpg", 
    tags: [],
    detailCount: 10,
    gifIndex: 3,
    reviews: [
      { id: 1, user: "겨울이", rating: 5, date: "2026.03.20", content: "겨울 느낌 물씬 나고 디저트 접시로 딱입니다.", img: "" }
    ]
  },
  { 
    id: 10, 
    title: "윈터 홀리데이세트 10p (스노우맨2인 6p+스몰디쉬4p)", 
    price: "50,000", 
    oldPrice: "", 
    img: "/img/best10.jpg", 
    tags: [],
    detailCount: 15,
    gifIndex: 3,
    reviews: [
      { id: 1, user: "눈사람", rating: 5, date: "2026.04.01", content: "스노우맨 볼이 너무 귀여워서 밥 먹을 때마다 기분 좋아요.", img: "" }
    ]
  },
  { 
    id: 11, 
    title: "비바 4인 그릇세트 홈세트 (21P) (4color)", 
    price: "129,000", 
    oldPrice: "220,000", 
    img: "/img/best11.jpg", 
    tags: ["BEST", "인기상품"],
    detailCount: 9,
    reviews: [
      { id: 1, user: "컬러풀", rating: 4, date: "2026.03.12", content: "색감이 사진이랑 똑같아요. 식탁이 화사해졌습니다.", img: "" }
    ]
  },
  { 
    id: 12, 
    title: "국립박물관 굿즈 신라의 미소 소스볼 3P + 수막새 수저받침 3P 세트", 
    price: "43,000", 
    oldPrice: "", 
    img: "/img/best12.jpg", 
    tags: [],
    detailCount: 12,
    reviews: [
      { id: 1, user: "박물관덕후", rating: 5, date: "2026.03.25", content: "수막새 수저받침 진짜 유니크해요. 소장가치 충분합니다.", img: "" }
    ]
  },
  { 
    id: 13, 
    title: "오딧세이 투고 텀블러 420ml (5color)", 
    price: "21,900", 
    oldPrice: "", 
    img: "/img/best13.jpg", 
    tags: [],
    detailCount: 16,
    gifIndex: 2,
    reviews: [
      { id: 1, user: "텀블러광", rating: 5, date: "2026.03.18", content: "보온 보냉 잘 되고 색상이 정말 세련됐어요.", img: "" }
    ]
  },
  { 
    id: 14, 
    title: "마일드 화이트 계란찜기 계란찜 그릇 (중) 500ml", 
    price: "12,900", 
    oldPrice: "", 
    img: "/img/best14.jpg", 
    tags: [],
    detailCount: 6,
    reviews: [
      { id: 1, user: "계란러버", rating: 5, date: "2026.04.01", content: "전자레인지로 계란찜 하기 너무 편해요. 디자인도 깔끔!", img: "" }
    ]
  },
];

export default bestData;