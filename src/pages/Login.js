import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store'; // 우리가 방금 store에 만든 로그인 함수!
import './Login.css';

function Login() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  
  // 사용자가 입력할 아이디와 비밀번호 저장 창고
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">LOGIN</h2>
        <p className="login-subtitle">쓰임의 가족이 되어주세요.</p>
        
        <div className="login-form">
          <input 
            type="text" 
            placeholder="아이디를 입력하세요" 
            onChange={(e) => setId(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="비밀번호를 입력하세요" 
            onChange={(e) => setPw(e.target.value)} 
          />
          
          <button className="btn-login" onClick={() => {
            if (id.trim() === '' || pw.trim() === '') {
              return alert('아이디와 비밀번호를 모두 입력해 주세요! 🪨');
            }
            
            // 🔓 Redux store에 유저 이름을 던져서 로그인 상태로 변경!
            dispatch(login(id)); 
            alert(`${id}님, 환영합니다! ✨`);
            navigate('/'); // 로그인이 성공하면 메인 페이지로 보냅니다.
          }}>
            로그인
          </button>
        </div>

        <div className="login-footer">
          <span>아이디 찾기</span>
          <span className="divider">|</span>
          <span>비밀번호 찾기</span>
          <span className="divider">|</span>
          <span className="join-text">회원가입</span>
        </div>
      </div>
    </div>
  );
}

export default Login;