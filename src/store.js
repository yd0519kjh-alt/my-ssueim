import { configureStore, createSlice } from '@reduxjs/toolkit'

// 🛒 1. 장바구니 구역 (기존 유지)
let cart = createSlice({
  name : 'cart',
  initialState : [], 
  reducers : {
    addItem(state, action){
      let index = state.findIndex((a) => a.id === action.payload.id);
      if (index >= 0) {
        state[index].count += action.payload.count;
      } else {
        state.push(action.payload);
      }
    },
    addCount(state, action){
      let index = state.findIndex((a) => a.id === action.payload);
      state[index].count++;
    },
    minusCount(state, action){
      let index = state.findIndex((a) => a.id === action.payload);
      if (state[index].count > 1) state[index].count--;
    },
    deleteItem(state, action){
      return state.filter((a) => a.id !== action.payload);
    }
  }
})

// 📝 2. 게시판 구역 (기존 유지)
let board = createSlice({
  name: 'board',
  initialState: [
    { id: 1, title: '첫 번째 공지사항입니다', content: '반갑습니다! 쓰임 쇼핑몰입니다. 🪨', date: '2026.04.02', author: '관리자' },
    { id: 2, title: '배송 관련 안내 말씀', content: '폭설로 인해 배송이 1~2일 지연될 수 있습니다.', date: '2026.04.02', author: '관리자' }
  ],
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    deletePost(state, action) {
      return state.filter((post) => post.id !== action.payload);
    }
  }
})

// 👤 3. 유저 구역 (로그인용 신규 추가! 🚨)
let user = createSlice({
  name: 'user',
  initialState: { 
    isLogin: false,  // 로그인 여부
    userName: ''     // 로그인한 유저 이름
  },
  reducers: {
    // 로그인 처리: 유저 이름을 받아서 저장합니다.
    login(state, action) {
      state.isLogin = true;
      state.userName = action.payload; 
    },
    // 로그아웃 처리: 상태를 초기화합니다.
    logout(state) {
      state.isLogin = false;
      state.userName = '';
    }
  }
})

// 💡 함수들 내보내기 (user 액션 추가!)
export let { addItem, addCount, minusCount, deleteItem } = cart.actions;
export let { addPost, deletePost } = board.actions; 
export let { login, logout } = user.actions; // 👈 로그인을 위해 꼭 필요함!

// 🏆 4. 스토어 결합 (user 리듀서 등록!)
export default configureStore({
  reducer: {
    cart : cart.reducer,
    board : board.reducer,
    user : user.reducer // 👈 여기에 유저 정보가 들어갑니다!
  }
})