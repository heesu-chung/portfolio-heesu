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
  
- 스크롤 시 SVG 요소를 활용한 콘텐츠 별 진행도 원형 시각화 구현  
- 스크롤 버튼 클릭 시 다음 콘텐츠로 스크롤 이동 구현  
- 반응형 마크업 작성(767px 이하 mobile / 768px - 1023px tablet / 1024px - 1440px laptop / 1441px 이상 desktop) 및 resize addEventListener  
  
  
### 영상 콘텐츠  
  
- 버튼 클릭 이벤트 발생시 video 태그 muted 속성 변경 구현  
- 마우스 이동시 커서 위치 트래킹 인터랙션   
- 스크롤 이벤트 발생시 영상 소리 무음 전환  
  
  
### Menu  
  
- 메뉴 바 Hover / Click 이벤트 발생시 애니메이션  
- 메뉴 페이지 전환 구현 
- 리스트 Hover 시 
  
  
### SVG 파트  
  
- SVG Blend 구현  
  
  
### Project 01  
  
- WebGL(Three.js) Scene 구성  
- gsap 라이브러리 scrollTrigger 및 timeline을 활용한 3D 애니메이션 구현  
- blender 3D model 제작 및 로드   
- Geometry 비디오 텍스쳐 매핑   
- 스크롤 기반 텍스트 전환 구현  
- 마우스 위치에 따른 버튼 트래킹 모션 구현  
  
  
### Project 02  
  
- Vertex, Fragment 셰이더 웨이브 시각 효과 구현  
- 스크롤 기반 Parallax 이미지 구현(cuvier-bezier 트랜지션 타이밍 구현)  
  
  
### Project 03  
  
- gltf 모델 자동 상하이동 구현  
- Ray casting을 통한 3D 모델 인터랙션(마우스 클릭 이벤트 발생시)  
  
  
### Project 04  
  
- 스크롤 기반 이미지 위치 변경  
  
  
## 기술 스택  
  
- Javascript, SCSS, Three.js, GSAP  
  
  
## 회고  
  
### 
