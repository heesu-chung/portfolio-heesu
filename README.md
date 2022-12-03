# Portfolio | Hee Su 

## Demo Link  
[https://heesu-portfolio.web.app/](https://heesu-portfolio.web.app/)
  
  
## 제작기간  
11월 21일 ~ 11월 29일  
1인 개발  
  
## 기술 스택  
  
Javascript, SCSS, Three.js, GSAP  
  
  
  
## 프로젝트 개요  
  
### Javascript / WebGL 포트폴리오 페이지
Vanilla JS 와 WebGL(Three.js)로 구현한 반응형 인터랙티브 웹 페이지입니다.  
Three.js 라이브러리로 3D 애니메이션 및 인터랙션 구현, 자바스크립트 DOM 속성값 접근을 통해 동적 화면을 구현하는 것에 초점을 맞춘 프로젝트입니다.
  
  
Vanilla Javascript, SCSS 적용 및 Three.js / GSAP 라이브러리를 사용하여 스크롤, 마우스 이동 및 클릭이벤트 기반 인터랙션을 구현하였습니다. SEO와 cross-browsing을 고려한 벤더-프리픽스를 코드에 작성했습니다.     
  
개발자도구 Lighthouse 보고서 
  
![LightHouseResult](https://user-images.githubusercontent.com/68191058/205141311-2148ec99-5c3d-45b0-ab5c-358af984244b.JPG)
  
세부적인 기능 구현들은 아래와 같습니다.  

## 주요 구현사항  
  
### Global  
![08](https://user-images.githubusercontent.com/68191058/205038623-a2268873-f9a3-47c2-9cbe-e9a1154474f7.gif)  
![01](https://user-images.githubusercontent.com/68191058/205035241-caa300c0-c1d2-4e30-a4f1-baf1e208051e.gif)  
  
- 스크롤 시 SVG 요소를 활용한 콘텐츠 별 진행도 원형 시각화 구현  
- 스크롤 버튼 클릭 시 다음 콘텐츠로 스크롤 이동 구현  
- 반응형 마크업 작성(767px 이하 mobile / 768px - 1023px tablet / 1024px - 1440px laptop / 1441px 이상 desktop) 및 resize addEventListener  
- SVG Blend 구현  
  
### 최상단 영상 파트
![02](https://user-images.githubusercontent.com/68191058/205035374-99bde023-ba6c-4bef-ae00-39c8026baf19.gif)  
  
- 버튼 클릭 이벤트 발생시 video 태그 muted 속성 변경 구현  
- 마우스 이동시 커서 위치 트래킹 인터랙션   
- 스크롤 이벤트 발생시 영상 소리 무음 전환  
  
  
### Menu 파트
![03](https://user-images.githubusercontent.com/68191058/205035420-0320764f-cde2-4138-941a-156832158131.gif)  
![04](https://user-images.githubusercontent.com/68191058/205035485-8b5662b3-10f8-4ae0-9cb1-d7823ae6d4ae.gif)  
  
- 메뉴 바 Hover / Click 이벤트 발생시 애니메이션  
- 메뉴 페이지 전환 구현 
- 페이지 활성화 시 스크롤 비활성화
- 리스트 Hover 시 이미지 전환 및 마우스 위치 트래킹 인터랙션 구현
- 리스트 클릭시 스크롤 이동 및 페이지 전환
  
  
### Project 01 파트
![05](https://user-images.githubusercontent.com/68191058/205035602-e37842ab-9bf0-4f02-89e4-e92a11a50360.gif)  
  
- Flex box를 이용한 레이아웃 구성
- WebGL(Three.js) Scene 구성  
- gsap 라이브러리 scrollTrigger 및 timeline을 활용한 3D 애니메이션 구현  
- blender 3D model 제작 및 로드   
- Geometry 비디오 텍스쳐 매핑   
- 스크롤 기반 텍스트 전환 구현  
- 마우스 위치에 따른 버튼 트래킹 모션 구현  
  
  
### Project 02 파트
![06](https://user-images.githubusercontent.com/68191058/205035645-b853f3b8-abb2-4669-a206-d1419dc892ec.gif)  
- Geometry 이미지 텍스쳐 매핑
- Vertex, Fragment 셰이더 웨이브 시각 효과 구현  
- 스크롤 기반 Parallax 이미지 구현(cuvic-bezier 트랜지션 타이밍 구현)  
  
  
### Project 03 파트
![07](https://user-images.githubusercontent.com/68191058/205035722-6cd3e808-2ca5-42c3-8143-44783b1b374c.gif)  
  
- gltf 모델 자동 상하이동 구현  
- Ray casting을 통한 3D 모델 인터랙션(마우스 클릭 이벤트 발생시)  
  
  
### Project 04 
  
- 스크롤 기반 이미지 위치 변경  
  
  
  
## 회고  
### Native Javascript의 사용 및 프레임워크 사용 유무의 차이점과 Three.js 학습 내용 및 3D, Shader 인터랙션 구현사항, Frame Rate 속도, 렌더링 최적화를 중심으로 서술

### Vanilla Javascript
  
이전 프로젝트들의 React 프레임워크 사용 대신 네이티브 자바스크립트를 사용한 프로젝트입니다. 기존 프로젝트들에서 컴포넌트 단위의 구현을 하면서 유지보수, 가독성에 유리한 프레임워크를 사용했었습니다. Vue와 React로 각각 블로그 개발 및 프로젝트들을 구현하면서 컴포넌트 단위 코딩에서의 프레임워크의 강력함을 체험했으나, WebGL과 리소스가 많은 프로젝트에서는 성능이 크게 하락하는 경험을 했습니다.

프레임워크 성능은 자바스크립트만을 사용했을 때보다 떨어질 수 밖에 없음을 인지하고 경험했습니다. 기본적으로 컴파일 및 빌드 과정에서 프레임워크 내 코드들이 자바스크립트 언어로 옮겨지는 데 필연적으로 시간이 추가로 걸릴 수 밖에 없고, 특히나 스타일링 컴파일 과정에서 styled-components의 사용은 브라우저에서 리렌더링시 css 파일 형태로 옮겨지는 데 오버로드가 계속해서 발생합니다. 인터랙션이 많이 발생하는 페이지에서는 이러한 스타일링 컴파일 및 Frame rate 속도를 사용자들이 불편함을 느끼지 않을 수준까지 맞춰줄 필요가 있었고, 때문에 Vanilla JS와 SCSS 환경에서의 코딩이 유리합니다.

기존 React 환경에서 리렌더링 될때 새로 읽혀지는 값들을 관리하기 위한 useState, useRef, useEffect 등의 Hook 및 전역변수 관리과정(redux, recoil 등)이 별도로 필요했으나, Vanilla JS 환경에서는 값이 바뀌는 별도의 변수 선언, 등록과정이 필요 없었고, 이벤트 리스터 콜백 함수 내에서 값을 관리하면 되었으며 이것이 프레임워크 사용 유무에 따른 차이였습니다. 완성시킨 프로젝트에서 프레임 레이트가 크게 깨지지 않고 렌더링 되는 것도 첫째로 컴파일 과정에서 Vanilla JS 사용의 성능 이점을 가져갈 수 있다는 점과 SCSS의 스타일링도 컴파일 이전 단계에서 CSS로 로드하는 과정을 거쳤기 때문입니다.

인터랙션 요소가 많고 성능에 부하를 가하는 three.js 라이브러리를 사용하는 페이지의 경우 더욱 네이티브 JS를 사용하는 것이 유리함을 경험했습니다.

다만 유지보수, 가시성 측면에서는 역시 index.html 파일이 꽤 길어지고, 인터랙션이 거의 발생하지 않은 부분까지 함께 네이티브 코드로 작성해야 하면서 불편함을 느꼈습니다. 클래스 지정과정에서도 서로 겹쳐지지 않는 클래스명을 사용할 때, 안정성을 얻을 수 있었습니다.

#### - 이벤트 리스터 및 윈도우 객체
  
해당 프로젝트에서는 인터랙션 구현시 scrollY 값과 pageX/Y, clientX/Y, getBoundingClientRect() 등 변수, 메서드들을 활용했습니다. 또한 scroll / wheel / mouse 이벤트 리스너들을 적극 활용했습니다. 이전까지 스크롤 값을 임의로 변경할 때는 직접 변경이후의 수치값을 입력하는 형식을 사용했으나, 이는 잘못된 사용이란 것을 깨달았습니다. 관련된 요소의 DOM에 직접 접근하여 얻어낸 수치값을 활용하여 스크롤 이벤트를 발생시키는 방식의 구현을 경험했고, 이후에는 잘못된 방법을 사용하지 않을 예정입니다.

이전까지 window.scrollY 변수 관련해서 새로운 변수에 저장하고 해당 값을 다른 컴포넌트에 뿌려주는 형식으로 값을 관리했었는데, 이것이 오버로드를 발생시킴을 깨달았습니다. 또한 window 전역 변수로 이미 선언되어 있는 값이기에, window. 을 굳이 붙이지 않아도 window 객체 내에서 해당 값을 추적하고 사용할 수 있었습니다.  
  
#### - cubic-bezier  
  
css transition-timing-function의 cubic-bezier이 애니메이션의 움직임을 효과적으로 구현하는 데 매우 강력함을 경험하였습니다. 기존에 ease, ease-in / ease-out / ease-in-out만 사용하던 것에서 cubic-bezier를 사용하면서 움직임의 디테일을 직접 제어할 수 있었다는 점과 애니메이션에 관성을 부여하여 움직임이 풍부해질 수 있었습니다. cubic-bezier를 사용하면서 이전에 작업했었던 영상, 셀 애니메이션 작업에서의 관성 표현을 할 때와 비슷한 경험을 했고, Parallax 이미지 구현에 있어서도 단조롭지 않은 모션을 구현할 수 있었습니다.  

### Three.js  
  
해당 프로젝트에서는 이전의 React 환경에서 WebGL을 간편하게 사용할 수 있었던 @react-three/fiber 라이브러리 대신 직접 Three.js 라이브러리를 import해서 사용하였습니다. scene과 renderer, animate 함수를 직접 선언하고 카메라, 광원 및 톤 매핑과 그림자, geometry와 재질을 다루면서 3D 프로그래밍 학습의 폭을 넓힐 수 있었습니다.

Blender로 gltf 모델들을 작업하여 로드하였고, 애니메이션을 구현하면서 GSAP 라이브러리 기능 일부를 사용하였습니다. 해당 과정에서 gltf 파일이 너무 커지지 않도록 particle의 수를 조정하면서 동시에 모델이 시각적으로 불완전해보이지 않는 균형을 맞춰야 했고, 비디오 텍스쳐 로드 방식을 학습하고 구현하였습니다.  
  
흰색 배경의 다른 텍스트 요소들과 3D의 연출이 위화감 없이 어우러질 수 있게 고려한 3D 라이팅 환경 세팅 및 viewport 세팅에 구현 초점을 맞췄고, 이 과정에서 light 옵션들과 PCF 로드, 톤 매핑, RGB 인코딩 등의 방식에 대해 학습할 수 있었습니다. 그림자 또한 부드럽게 보일 수 있게 맵사이즈 확대 및 반지름 조정 과정을 거쳤습니다.  

3D 애니메이션을 구현하면서 GSAP 라이브러리 이용시 보다 쉽게 타임라인을 구성하여 애니메이션을 구현할 수 있었으며, 추가로 GSAP 하위 scrollTrigger 기능을 이용하여, 세부적인 조정(애니메이션 작동 스크롤 위치, 작동 이후 상태)을 할 수 있었습니다. 
  
#### - requestAnimationFrame()  
  
렌더링 속도를 사용자의 시각적 안정감을 위한 60fps에 맞춰주기 위한 메서드입니다. 렌더링이 자주 발생하는 경우나 느린 인터랙션, 모션등을 어느정도 동기화시켜서 효율적으로 렌더링하는 유용한 메서드이며, 3D 렌더링 및 이벤트 리스너 콜백 함수 호출 시 반복적인 렌더링 작업이 진행되는 경우에 사용하였습니다. 결과적으로 리렌더링 과정에서 끊김현상이 덜해지고 60fps에 가까운 Frame Rate가 보다 안정적으로 유지되는 것을 확인하였습니다.  
  
#### - Shader  
  
해당 프로젝트 Project 02 파트에서 중심 이미지에 Shader가 적용되어 있습니다. 해당 파트 에서 많은 렌더링 연산을 요하는 Parallax 이미지, 비디오 리소스들이 있고, 텍스트 transition, WebGL이 함께 작동하게 되어 결과적으로 렌더링에 부하가 걸립니다. WebGL 이미지에 슬라이딩 트랜지션 발생시 최대 28 fps ~ 33 fps 까지 Frame Rate가 떨어집니다. 하지만 GPU 자원을 이용한 셰이더 모션 부분은 시각적 불편함을 느끼지 않을 정도로 부드럽게 작동합니다.  
  
glsl에 uniform으로 time(f), resolution(v2), 마우스 포지션 및 텍스쳐를 전달하며, 1차적으로 vertex 셰이더에선 uv mapping을 맞춰주고, fragment 셰이더에서는 gl_FragCoord / uv 동기화 및 텍스쳐 적용, 시간에 따른 cos 그래프 변화로 텍스쳐 모션의 움직임을 구현하였습니다.  

### 이외  
  
해당 프로젝트에선 자바스크립트로 스타일링 변환 진행시 웹표준을 위해 벤더 프리픽스를 고려한 transform / transition 코드가 추가된 점, 기존에 여러번 사용하였던 gif 대신 Video를 적극 사용한 점, SVG Blend 효과와 소개 파트 별 진행도에 따른 원형 SVG 인터랙션을 구현했습니다.  
  
또한 기존 React / Vue 프로젝트에선 하지 못했던 SEO 작업을 진행할 수 있었습니다. robots.txt를 별개로 작성하여, 대부분의 콘텐츠를 크롤링 봇이 읽을 수 있도록 하였으며, 개인 정보가 들어있는 resume.pdf로의 접근은 금지시켰습니다.   
