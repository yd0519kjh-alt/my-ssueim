import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../store'; // 우리가 아까 store에 만든 함수!
import './BoardWrite.css';

function BoardWrite() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  
  // 현재 게시글 개수를 알아내서 다음 ID를 정하기 위해 가져옵니다.
  let boardData = useSelector((state) => state.board);

  // 사용자가 입력한 글자를 담아둘 임시 창고(State)
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');

  // 오늘 날짜 생성 (2026.04.02)
  const today = new Date().toLocaleDateString();

  return (
    <div className="write-container">
      <div className="write-header">
        <h2 className="write-title">WRITE POST</h2>
        <p>새로운 소중한 의견을 남겨주세요. 🪨</p>
      </div>

      <div className="write-form">
        <div className="input-group">
          <label>제목</label>
          <input 
            type="text" 
            placeholder="제목을 입력하세요" 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <label>내용</label>
          <textarea 
            placeholder="내용을 입력하세요" 
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="write-footer">
        <button className="btn-cancel" onClick={() => navigate('/board')}>취소</button>
        <button className="btn-submit" onClick={() => {
          if (!title.trim() || !content.trim()) {
            return alert('제목과 내용을 모두 입력해 주세요! 🪨💦');
          }

          // 🚀 Redux store에 새 글 배달!
          dispatch(addPost({
            id: boardData.length + 1, // 번호 자동 부여
            title: title,
            content: content,
            date: today,
            author: '주인님' // 나중에 로그인 기능 넣으면 유동적으로!
          }));

          alert('성공적으로 등록되었습니다! ✨');
          navigate('/board'); // 목록으로 돌아가기
        }}>
          등록하기
        </button>
      </div>
    </div>
  );
}

export default BoardWrite;