import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // 👈 useDispatch 추가
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../store'; // 👈 store에서 삭제 함수 가져오기
import './Board.css';

function Board() {
  // 1. 저장소(Store)에서 데이터와 도구 가져오기
  let boardData = useSelector((state) => state.board);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className="board-container">
      <div className="board-header">
        <h2 className="board-title">COMMUNITY</h2>
        <p className="board-subtitle">쓰임의 새로운 소식과 이야기를 만나보세요.</p>
      </div>

      <table className="board-table">
        <thead>
          <tr>
            <th style={{ width: '80px' }}>번호</th>
            <th>제목</th>
            <th style={{ width: '120px' }}>작성자</th>
            <th style={{ width: '150px' }}>날짜</th>
            <th style={{ width: '100px' }}>관리</th> {/* 👈 관리 컬럼 추가 */}
          </tr>
        </thead>
        <tbody>
          {/* 게시글 목록을 역순으로 보여주고 싶다면 [...boardData].reverse().map(...)을 쓰셔도 좋습니다! */}
          {boardData.map((post) => (
            <tr key={post.id} onClick={() => navigate(`/board/detail/${post.id}`)}>
              <td>{post.id}</td>
              <td className="post-title-cell">{post.title}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>
                {/* 🚨 삭제 버튼: 클릭 시 상세페이지 이동을 막기 위해 e.stopPropagation() 사용 */}
                <button 
                  className="btn-delete" 
                  onClick={(e) => {
                    e.stopPropagation(); // 👈 부모 tr의 클릭 이벤트를 차단!
                    if (window.confirm('정말 이 게시글을 삭제하시겠습니까? 🪨')) {
                      dispatch(deletePost(post.id));
                    }
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 게시판 하단: 글쓰기 버튼 */}
      <div className="board-footer">
        <button className="btn-write" onClick={() => navigate('/board/write')}>
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default Board;