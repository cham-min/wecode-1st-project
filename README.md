# 33기 1차 프로젝트 1팀 남바완
![namba1_logo](https://user-images.githubusercontent.com/72453080/171790066-206e9591-15f3-4ba0-97be-413f21d13694.png)

[🍽️시연영상 보러가기](https://youtu.be/KlmscbOsnMc)

<br/>

## 🌼 프로젝트 소개 🌼


* 밀키트를 판매하는 커머스 사이트를 선정했습니다.
* 짧은 기간동안 개발에 집중할 수 있도록 디자인과 기획 일부를 [쿡킷 사이트](https://www.cjcookit.com/pc/main)를 참조하여 학습목적으로 만들었습니다.
* 실무 수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
* 이 프로젝트에서 사용하고 있는 로고와 배너는 해당 프로젝트 팀원 소유이므로 해당 프로젝트 외부인이 사용할 수 없습니다.

<br/>

## 🌼 개발 인원 및 기간 🌼
**개발기간** : 2022/05/24~2022/06/02

<br/>

**개발인원 및 파트** : 
#### Frontend
- 김혜수 🐷 : Signup Page, Signin Page, Footer
- 박주영 🍋 : Review Page
- 천은별 🌟 : Menu Page
- 최현민 🐜 : Main Page, Nav

#### Backend
- 임한구 🎅🏻

<br/>

## 🌼 기술 🌼
**Front-End** : React.js 
<br/>
**Back-End** : Python, Django web framework, Bcrypt, MySQL, pyjwt
<br/>
**Common** : Git-Hub, slack, trello, AWS

<br/>

## 🌼 메인 페이지 구현 사항 🌼

#### Main, Review Carousel
![mainCarousel](https://user-images.githubusercontent.com/96946274/172137767-e1790198-d442-47ca-8f85-4fa7a079205b.gif)
![리뷰](https://user-images.githubusercontent.com/96946274/172137756-88064344-cc33-4df5-9b03-ea7c939a9c3f.gif)
- `useState`를 사용하여 현재 슬라이드 위치를 담는 변수 생성
- `prevSlide`, `nextSlide` 함수를 생성하여 버튼 클릭 시 슬라이드 위치 지정
- `useRef` hook을 사용하여 carousel을 구현할 DOM에 접근 및 `translateX(-${currentSlide}00%`를 통해서 사진이 넘어가는 스타일 지정

<br/>

#### Recommend
![드롭다운](https://user-images.githubusercontent.com/96946274/172137737-1799a261-f48b-4c10-bcf9-98d14ff7dd54.gif)
- `useState`로 맛을 담고 있는 변수 생성
- 버튼을 클릭하면 맛을 선택할 수 있는 리스트가 드롭다운 (`opacity`를 이용하여 활성화/비활성화 구현)
- 맛을 선택하면 `useState`을 통하여 맛 변경
- 맛 변경 시, 해당 맛 id를 전달하는 함수를 생성하여 query parameter에 사용하여 맛에 따른 사진 데이터를 서버에서 로드
- 메인, 리뷰 캐러셀과 같은 원리로 캐러셀 구현

<br/>

#### Menu List
![image](https://user-images.githubusercontent.com/96946274/172140182-b8e4ab6f-bed9-4872-a6f5-d7338e0385a3.png)
![image](https://user-images.githubusercontent.com/96946274/172140240-1ca2c23f-d925-4bcc-bb98-76ff62d9a4ec.png)
- `fetch`함수를 사용하여 상품 데이터를 서버에서 받아옴
- `grid`를 이용하여 상품 리스트 레이아웃 구성
- `useNavigate`를 사용하여 상품 클릭 시 상세페이지로 이동
- 삼항 연산자를 사용하여 전체 메뉴와 추천 메뉴를 똑같은 컴포넌트로 재사용


<br/>

## 🌼 프로젝트 진행 과정 🌼
||Trello|Daily Standup Meeting|
|------|---|---|
|협업 방식|칸반보드를 활용한 회의록 작성 및 진행상황 공유|매일 아침 30분동안 진행사항과 오늘 할 작업 내용 공유|
|IMG|![image](https://user-images.githubusercontent.com/72453080/172017656-5a83e3f5-34c4-44b8-b600-39ed7c6600d0.png)|![image](https://user-images.githubusercontent.com/72453080/172017691-c160d276-3004-4dbc-966b-d761d8c749b8.png)|

## 🌼 프로젝트 후기 🌼
- https://hymndev.tistory.com/70
