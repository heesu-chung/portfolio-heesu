import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";

let scene, camera, renderer, ambientLight;

gsap.registerPlugin(ScrollTrigger);

/* scene, renderer */
scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

/* camera */
camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 3000);
scene.add(camera);
camera.position.set(0, 0, 450);
camera.lookAt(0, 0, -50);

/* container */
const container = document.querySelector(".img-container-2");
container.appendChild(renderer.domElement);

/* resize */
window.addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
});

/* tone mapping */
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 1;

renderer.setSize(innerWidth, innerHeight);

ambientLight = new THREE.AmbientLight(0xffffff, 0.7, 1000);
scene.add(ambientLight);

const planeWidth = 250,
    planeHeight = 150;
const planeGeo = new THREE.PlaneGeometry(planeWidth, planeHeight);

let time = 0;
const uniform = {
    time: { type: "f", value: 0 },
    resolution: {
        type: "v2",
        value: new THREE.Vector2(innerWidth, innerHeight),
    },
    mouse: { type: "v2", value: new THREE.Vector2(0, 0) },
    waveLength: { type: "f", value: 1.5 },
};

const uniforms1 = {
    ...uniform,
    texture1: {
        value: new THREE.TextureLoader().load(
            "../assets/archive/archivePage1.jpg"
        ),
    },
};
const uniforms2 = {
    ...uniform,
    texture1: {
        value: new THREE.TextureLoader().load(
            "../assets/archive/archivePage2.jpg"
        ),
    },
};
const uniforms3 = {
    ...uniform,
    texture1: {
        value: new THREE.TextureLoader().load(
            "../assets/archive/archivePage3.jpg"
        ),
    },
};

const vertexShader = `
varying vec2 vUv;

void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float time;
uniform vec2 resolution;
uniform sampler2D texture1;

varying vec2 vUv;

void main() {
  vec2 uv1 = vUv;
  vec2 uv = gl_FragCoord.xy/resolution.xy;

  float frequency = 10.;
  float amplitude = 0.015;

  float x = uv1.x * frequency + time * .5;
  float y = uv1.y * frequency + time * .5;

  uv1.xy += cos(x) * amplitude ;

  gl_FragColor = texture2D(texture1, uv1);
}
`;

const planeMat1 = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: uniforms1,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    wireframe: false,
});
const planeMat2 = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: uniforms2,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    wireframe: false,
});
const planeMat3 = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: uniforms3,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    wireframe: false,
});
const plane1 = new THREE.Mesh(planeGeo, planeMat1);
const plane2 = new THREE.Mesh(planeGeo, planeMat2);
const plane3 = new THREE.Mesh(planeGeo, planeMat3);

let margin = 400;
plane1.position.set(0, 0, 0);
plane2.position.set(margin, 0, 0);
plane3.position.set(margin * 2, 0, 0);
scene.add(plane1);
scene.add(plane2);
scene.add(plane3);

let timeDiff = 0.1;
let duration = 0.7;

const containerBlock = document.querySelector(".portfolio-2");
const containerOffset =
    containerBlock.getBoundingClientRect().top + window.scrollY;
const containerHeight = containerBlock.getBoundingClientRect().height;

const onScroll = () => {
    if (
        scrollY <= containerOffset + containerHeight &&
        scrollY > containerOffset
    )
        if (
            scrollY > containerOffset + containerHeight / 3 &&
            scrollY <= containerOffset + (containerHeight / 5) * 3
        ) {
            gsap.timeline({})
                .to(plane1.position, {
                    x: margin * -1,
                    duration: duration,
                    delay: 0,
                    ease: "power3.out",
                })
                .to(
                    plane2.position,
                    {
                        x: 0,
                        duration: duration,
                        delay: 0.1,
                        ease: "power3.out",
                    },
                    "<"
                )
                .to(
                    plane3.position,
                    {
                        x: margin,
                        duration: duration,
                        delay: 0.2,
                        ease: "power3.out",
                    },
                    "<"
                );
        } else if (scrollY > containerOffset + (containerHeight / 5) * 3) {
            gsap.timeline({})
                .to(plane1.position, {
                    x: margin * -2,
                    duration: duration,
                    delay: 0,
                    ease: "power3.out",
                })
                .to(
                    plane2.position,
                    {
                        x: margin * -1,
                        duration: duration,
                        delay: 0.1,
                        ease: "power3.out",
                    },
                    "<"
                )
                .to(
                    plane3.position,
                    {
                        x: 0,
                        duration: duration,
                        delay: 0.2,
                        ease: "power3.out",
                    },
                    "<"
                );
        } else {
            gsap.timeline({})
                .to(plane1.position, {
                    x: 0,
                    duration: duration,
                    delay: 0,
                    ease: "power3.out",
                })
                .to(
                    plane2.position,
                    {
                        x: margin,
                        duration: duration,
                        delay: 0.1,
                        ease: "power3.out",
                    },
                    "<"
                )
                .to(
                    plane3.position,
                    {
                        x: margin * 2,
                        duration: duration,
                        delay: 0.2,
                        ease: "power3.out",
                    },
                    "<"
                );
        }
};

window.addEventListener(
    "wheel",
    () => {
        time += 0.6;
    },
    { passive: true }
);

window.addEventListener("scroll", onScroll, { passive: true });

const animate = () => {
    renderer.render(scene, camera);
    time += timeDiff;
    plane1.material.uniforms.time.value = time;

    requestAnimationFrame(animate);
};

animate();
