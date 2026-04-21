# 🛒 React & Redux Toolkit 기반 쇼핑몰 클론 프로젝트 (쓰임)

React와 Redux Toolkit을 활용하여 사용자 중심의 쇼핑 경험과 효율적인 데이터 흐름을 구현한 이커머스 웹 애플리케이션입니다.

# 🔍INDEX
• 개요

• 제작도구

• 핵심 기술 구현 및 로직

• 화면 설계 및 기능 시연

• 기술적 성장 및 해결 과정

## 📅개요
•프로젝트 목표 : Html, Css, Java script 기반 웹 애플리케이션

•개발 기간 : 26/03/18 ~ 26/03/25

## 🛠제작도구 
### Programming Languages & Frameworks
### Libraries & Tools
• State Management: Redux Toolkit

• Data Fetching: Axios

• Routing: React Router DOM

• IDE: Visual Studio Code

• Version Control: Git, GitHub

# 핵심구현 및 로직
## 1. 전역 상태 기반의 데이터 아키텍처 (Redux Flow)
단순한 데이터 전달을 넘어, 프로젝트 전체의 데이터 일관성을 위해 Redux Toolkit을 도입했습니다.

중앙 상태 관리: 게시판, 장바구니, 사용자 정보를 스토어(Store)에서 통합 관리하여 'Props Drilling' 문제를 해결했습니다.

예측 가능한 상태 변경: 액션(Action)과 리듀서(Reducer)를 분리하여 데이터가 어떻게 변화하는지 명확히 추적할 수 있도록 설계했습니다.

## 2. 정밀한 장바구니 관리 로직
사용자가 상품을 추가할 때 데이터의 중복을 방지하고 실시간으로 연산하는 기능을 구현했습니다.

중복 검사: findIndex 메서드를 활용해 장바구니 내 동일 상품 존재 여부를 확인합니다. 기존 상품이 있다면 수량만 증가시키고, 없을 경우에만 배열에 추가하여 효율적인 메모리 관리를 수행합니다.

실시간 합계 연산: reduce 고차 함수를 사용하여 장바구니에 담긴 모든 상품의 [가격 × 수량]을 실시간으로 합산, 최종 결제 금액을 산출합니다.

## 3. 동적 라우팅을 활용한 상세 페이지 매칭
useParams 훅을 사용하여 URL 파라미터에서 상품 고유 ID를 식별합니다.

수많은 상품 페이지를 개별적으로 만들지 않고, 하나의 공통 상세 컴포넌트에서 find 로직을 통해 해당 ID와 일치하는 데이터만 동적으로 바인딩하도록 설계하여 유지보수성을 극대화했습니다.

## 4. 실시간 검색 및 데이터 필터링 시스템
useSearchParams를 사용하여 브라우저 주소창과 검색 상태를 동기화했습니다. 이를 통해 사용자가 검색 결과 페이지를 새로고침하거나 공유해도 검색어가 유지되는 경험을 제공합니다.

분산된 JSON 상품 데이터들을 스프레드 연산자(...)로 통합한 뒤, filter와 includes를 사용해 대소문자 구분 없는 정교한 검색 기능을 구현했습니다.

## 5. 게시판 데이터 CRUD 흐름
유효성 검사: 게시글 등록 시 trim() 함수를 사용하여 공백 입력을 차단하는 방어적 코딩을 적용했습니다.

데이터 흐름 제어: 게시글 객체 생성 → Dispatch를 통한 전역 상태 업데이트 → useNavigate를 활용한 페이지 이동으로 이어지는 매끄러운 사용자 경험을 설계했습니다.
# PPT 기능구현
<img width="2560" height="1440" alt="슬라이드1" src="https://github.com/user-attachments/assets/52699b6f-6772-477f-99ff-a404ccf82fb8" />
<img width="2560" height="1440" alt="슬라이드2" src="https://github.com/user-attachments/assets/ebf70095-10c3-4278-9090-f3c2845b3cc1" />
<img width="2560" height="1440" alt="슬라이드3" src="https://github.com/user-attachments/assets/3a8cf7c1-3b3e-4c65-b6c0-8d3fa6a8e1a2" />
<img width="2560" height="1440" alt="슬라이드4" src="https://github.com/user-attachments/assets/34a2e8f3-879a-43f2-b01f-ea97dffb2d5b" />
<img width="2560" height="1440" alt="슬라이드5" src="https://github.com/user-attachments/assets/517b1115-e702-4f46-bba4-88fce25b45c6" />
<img width="2560" height="1440" alt="슬라이드6" src="https://github.com/user-attachments/assets/2891c38b-59ab-4a95-8009-3cbbe310271a" />
<img width="2560" height="1440" alt="슬라이드7" src="https://github.com/user-attachments/assets/aa5a8c4d-b2e4-4709-85a8-6d2d677b74d5" />
<img width="2560" height="1440" alt="슬라이드8" src="https://github.com/user-attachments/assets/adda2fc4-a1d4-4bac-9de3-8a93ffd2e325" />
<img width="2560" height="1440" alt="슬라이드9" src="https://github.com/user-attachments/assets/bc61d999-c678-4168-8224-69d6a268e5ae" />
<img width="2560" height="1440" alt="슬라이드10" src="https://github.com/user-attachments/assets/230eda4e-04fa-4318-b973-8d821d69a65d" />
<img width="2560" height="1440" alt="슬라이드11" src="https://github.com/user-attachments/assets/f61888d9-b52c-49ab-9e97-e36a31468e28" />
<img width="2560" height="1440" alt="슬라이드12" src="https://github.com/user-attachments/assets/a1d3bb59-662c-4dab-a3ed-d8ce566b931d" />
<img width="2560" height="1440" alt="슬라이드13" src="https://github.com/user-attachments/assets/925eaa9f-9a0a-4b85-a717-2a73e20aaa7e" />
<img width="2560" height="1440" alt="슬라이드14" src="https://github.com/user-attachments/assets/1127060d-7f88-48a6-ab65-af8b167ff89d" />
<img width="2560" height="1440" alt="슬라이드15" src="https://github.com/user-attachments/assets/8bdc4a23-b9d7-48a7-986b-9ddd68a45258" />
<img width="2560" height="1440" alt="슬라이드16" src="https://github.com/user-attachments/assets/59680753-d6b1-4a39-b0d8-4fd71655a5fa" />
<img width="2560" height="1440" alt="슬라이드17" src="https://github.com/user-attachments/assets/bb974b29-37b1-43bd-b3f8-03c94df103ba" />
<img width="2560" height="1440" alt="슬라이드18" src="https://github.com/user-attachments/assets/6b0b2997-0984-46d7-99fc-2c7913a4bc77" />
<img width="2560" height="1440" alt="슬라이드19" src="https://github.com/user-attachments/assets/d5b8ffb9-dd8c-41f0-9eaa-7482688022ea" />



로그인

<img width="800" height="458" alt="로그인" src="https://github.com/user-attachments/assets/cb7dc8e0-852f-445a-ac58-6105e745b4e9" />

검색

<img width="800" height="450" alt="검색" src="https://github.com/user-attachments/assets/26035d85-912e-486f-9806-26bb293002e0" />

게시판

<img width="800" height="458" alt="게시판" src="https://github.com/user-attachments/assets/b59677c5-e6bd-4a45-b41e-4fa2626bc43b" />

장바구니

<img width="800" height="458" alt="장바구니" src="https://github.com/user-attachments/assets/7c5f4b0b-7ab0-4e07-80ca-dd2759aa3dd2" />

상세페이지

<img width="800" height="458" alt="상세페이지" src="https://github.com/user-attachments/assets/cd3f56f9-3a8a-40f8-aa91-934cdd5229a9" />

유튜브

<img width="800" height="458" alt="유튜부" src="https://github.com/user-attachments/assets/d2fb698a-a11d-4bb8-bb56-c4528a0ead26" />
<img width="2560" height="1440" alt="슬라이드26" src="https://github.com/user-attachments/assets/e4439f8a-1943-45c3-a0d8-255807682db1" />


# 기술적 성장 및 해결 과정 (Technical Challenges)
### 상태 관리의 필요성 학습: 컴포넌트 구조가 복잡해짐에 따라 발생하는 데이터 전달 문제를 Redux Toolkit으로 해결하며, 효율적인 아키텍처 설계의 중요성을 체감했습니다.

### 데이터 불변성(Immutability) 유지: 상태를 직접 변경하지 않고 새로운 객체를 생성하여 반환하는 원칙을 지키며, 안정적인 웹 애플리케이션 개발 방법을 익혔습니다.

### 사용자 경험(UX) 최적화: 상세 페이지 진입 시 스크롤 위치를 최상단으로 강제 이동시키거나, 검색 결과가 없을 때의 예외 처리 화면을 구성하는 등 실제 서비스 관점에서 고민하고 보완했습니다.














