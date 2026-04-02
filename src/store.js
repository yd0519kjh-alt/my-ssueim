import { configureStore, createSlice } from '@reduxjs/toolkit'

// 장바구니 구역 설정
let cart = createSlice({
  name : 'cart',
  initialState : [], // 처음엔 비어있음
  reducers : {
    // 1. 상품 추가 (상세페이지에서 던진 데이터 받기)
    addItem(state, action){
      let index = state.findIndex((a) => a.id === action.payload.id);
      if (index >= 0) {
        state[index].count += action.payload.count;
      } else {
        state.push(action.payload);
      }
    },
    // 2. 수량 증가 (+)
    addCount(state, action){
      let index = state.findIndex((a) => a.id === action.payload);
      state[index].count++;
    },
    // 3. 수량 감소 (-)
    minusCount(state, action){
      let index = state.findIndex((a) => a.id === action.payload);
      if (state[index].count > 1) state[index].count--;
    },
    // 4. 삭제 (X)
    deleteItem(state, action){
      return state.filter((a) => a.id !== action.payload);
    }
  }
})

export let { addItem, addCount, minusCount, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    cart : cart.reducer
  }
})