# Portfolio | Hee Su 

## Demo Link

## 제작기간  
11월 21일 ~ 11월 29일  
1인 개발  
  
  
## 프로젝트 개요  
  
### Vanilla Javascript / WebGL 포트폴리오 페이지
Vanilla JS 와 WebGL(Three.js)로 구현한 반응형 인터랙티브 웹 페이지입니다.  
Three.js 라이브러리로 3D 애니메이션 및 인터랙션 구현, 자바스크립트 DOM 속성값 접근을 통해 동적 화면을 구현하는 것에 초점을 맞춘 프로젝트입니다.
  
  
기존에 사용하던 React 프레임워크 대신 Javascript 만을 사용하였으며, SCSS 적용 및 Three.js / GSAP 라이브러리를 사용하여 스크롤, 마우스 이동 및 클릭 기반 인터랙션을 구현하였습니다.    
  
  
세부적인 기능 구현들은 아래과 같습니다.  

## 기능 구현  
  
### Global  
![08](https://user-images.githubusercontent.com/68191058/205038623-a2268873-f9a3-47c2-9cbe-e9a1154474f7.gif)  
![01](https://user-images.githubusercontent.com/68191058/205035241-caa300c0-c1d2-4e30-a4f1-baf1e208051e.gif)  
  
- 스크롤 시 SVG 요소를 활용한 콘텐츠 별 진행도 원형 시각화 구현  
- 스크롤 버튼 클릭 시 다음 콘텐츠로 스크롤 이동 구현  
- 반응형 마크업 작성(767px 이하 mobile / 768px - 1023px tablet / 1024px - 1440px laptop / 1441px 이상 desktop) 및 resize addEventListener  
- SVG Blend 구현  
  
### 영상 콘텐츠  
![02](https://user-images.githubusercontent.com/68191058/205035374-99bde023-ba6c-4bef-ae00-39c8026baf19.gif)  
  
- 버튼 클릭 이벤트 발생시 video 태그 muted 속성 변경 구현  
- 마우스 이동시 커서 위치 트래킹 인터랙션   
- 스크롤 이벤트 발생시 영상 소리 무음 전환  
  
  
### Menu  
![03](https://user-images.githubusercontent.com/68191058/205035420-0320764f-cde2-4138-941a-156832158131.gif)  
![04](https://user-images.githubusercontent.com/68191058/205035485-8b5662b3-10f8-4ae0-9cb1-d7823ae6d4ae.gif)  
  
- 메뉴 바 Hover / Click 이벤트 발생시 애니메이션  
- 메뉴 페이지 전환 구현 
- 페이지 활성화 시 스크롤 정지
- 리스트 Hover 시 이미지 전환 및 마우스 위치 트래킹 인터랙션 구현
- 리스트 클릭시 스크롤 이동 및 페이지 전환
  
  
### Project 01  
![05](https://user-images.githubusercontent.com/68191058/205035602-e37842ab-9bf0-4f02-89e4-e92a11a50360.gif)  
  
- Flex box를 이용한 레이아웃 구성
- WebGL(Three.js) Scene 구성  
- gsap 라이브러리 scrollTrigger 및 timeline을 활용한 3D 애니메이션 구현  
- blender 3D model 제작 및 로드   
- Geometry 비디오 텍스쳐 매핑   
- 스크롤 기반 텍스트 전환 구현  
- 마우스 위치에 따른 버튼 트래킹 모션 구현  
  
  
### Project 02  
![06](https://user-images.githubusercontent.com/68191058/205035645-b853f3b8-abb2-4669-a206-d1419dc892ec.gif)  
  
- Vertex, Fragment 셰이더 웨이브 시각 효과 구현  
- 스크롤 기반 Parallax 이미지 구현(cuvic-bezier 트랜지션 타이밍 구현)  
  
  
### Project 03  
![07](https://user-images.githubusercontent.com/68191058/205035722-6cd3e808-2ca5-42c3-8143-44783b1b374c.gif)  
  
- gltf 모델 자동 상하이동 구현  
- Ray casting을 통한 3D 모델 인터랙션(마우스 클릭 이벤트 발생시)  
  
  
### Project 04  
  
- 스크롤 기반 이미지 위치 변경  
  
  
## 기술 스택  
  
- Javascript, SCSS, Three.js, GSAP  
  
  
## 회고  
  
### 
