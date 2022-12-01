# Portfolio | Hee Su 

## Demo Link

## 제작기간  
11월 21일 ~ 11월 29일  
1인 개발  
  
  
## 프로젝트 개요  
  
### 포트폴리오 인터랙션 사이트 구현   
Vanilla JS 와 WebGL(Three.js)로 구현한 반응형 웹 사이트입니다.  
WebGL과 자바스크립트 이벤트리스너와 DOM 속성값 조작을 통한 동적 화면 구현에 초점을 맞췄습니다.  
  
  
기존에 사용하던 React 프레임워크 대신 Javascript 만을 사용하였으며, SCSS 적용 및 Three.js / gsap 라이브러리를 사용하여 스크롤 기반 3D 애니메이션을 구현하였습니다.    
  
  
세부적인 기능 구현들은 다음과 같습니다.  

## 기능 구현  
  
### Global  
  
- 스크롤 시 SVG 요소를 활용한 콘텐츠 별 진행도 원형 시각화 구현  
- 스크롤 버튼 클릭 시 다음 콘텐츠로 스크롤 이동 구현  
- 반응형 스타일링(767px 이하 mobile / 768px - 1023px tablet / 1024px - 1440px laptop / 1441px 이상 desktop) 및 resize addEventListener  
  
  
### 영상 콘텐츠  
  
- 버튼 클릭 이벤트 발생시 video 태그 muted 속성 변경 구현  
- 마우스 위치 이동시 커서 트래킹 인터랙션   
- 스크롤 이벤트 발생시 영상 소리 무음  
  
  
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
  
- Vertex, Fragment 셰이더 매핑 및 웨이브 시각 효과 구현  
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
