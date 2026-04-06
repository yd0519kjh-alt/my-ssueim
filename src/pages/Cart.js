import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, minusCount, deleteItem } from '../store';

function Cart() {
  let state = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return (
    <div className="cart-container" style={{padding: '50px', maxWidth: '1000px', margin: 'auto'}}>
      <h2 style={{fontWeight: 'bold', marginBottom: '30px'}}>SHOPPING CART</h2>
      <Table hover>
        <thead>
          <tr>
            <th>상품</th>
            <th>가격</th>
            <th>수량</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => (
            <tr key={item.id}>
              <td style={{textAlign: 'left'}}>
                {/* 🚨 가공 완료된 이미지 경로! */}
                <img 
                  src={process.env.PUBLIC_URL + item.img} 
                  width="50px" 
                  style={{marginRight: '15px'}} 
                  alt="상품"
                />
                {item.title}
              </td>
              <td>{item.price}원</td>
              <td>
                <button onClick={() => dispatch(minusCount(item.id))}>-</button>
                <span style={{margin: '0 10px'}}>{item.count}</span>
                <button onClick={() => dispatch(addCount(item.id))}>+</button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteItem(item.id))}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
