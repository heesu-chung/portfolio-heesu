import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import { GLTFLoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";

let scene, camera, renderer, controls, ambientLight;

gsap.registerPlugin(ScrollTrigger);

/* scene, renderer */
scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

/* camera */
camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 3000);
scene.add(camera);
camera.position.set(150, 150, 350);
camera.lookAt(0, 0, -50);

if (innerWidth < 768) {
    camera.position.set(100, 150, 400);
} else if (innerWidth >= 768 && innerWidth < 1024) {
    camera.position.set(100, 150, 300);
} else if (innerWidth >= 1024 && innerWidth < 1441) {
    camera.position.set(100, 150, 300);
} else {
    camera.position.set(100, 150, 300);
}

/* container */
const container = document.querySelector(".img-container-3");
container.appendChild(renderer.domElement);

/* resize */
window.addEventListener(
    "resize",
    () => {
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
        if (innerWidth < 768) {
            camera.position.set(50, 100, 300);
        } else if (innerWidth >= 768 && innerWidth < 1024) {
            camera.position.set(100, 150, 300);
        } else if (innerWidth >= 1024 && innerWidth < 1441) {
            camera.position.set(100, 150, 300);
        } else {
            camera.position.set(100, 150, 300);
        }
    },
    { passive: true }
);

/* tone mapping */
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 1;

renderer.setSize(innerWidth, innerHeight);

/* light options */

ambientLight = new THREE.AmbientLight(0xffffff, 1.0, 1000);
scene.add(ambientLight);

/* gltf object */
let cone = new GLTFLoader();
let model;
cone.load("../assets/gltf/cone.gltf", (gltf) => {
    model = gltf.scene;
    model.traverse((node) => {
        if (node.isMesh) {
            node.material = new THREE.MeshStandardMaterial({
                color: 0x111111,
                toneMapped: false,
                transparent: true,
                opacity: 1,
            });
        }
    });
    if (model) {
        model.scale.set(10, 10, 10);
        model.position.set(0, 117, 0);
        model.rotation.x = Math.PI / 10;
        scene.add(model);
    }
});
let time = 0;
const movementRadius = 5;
const movementPositionArr = [];
for (let i = 0; i < 360; i += 2) {
    movementPositionArr.push(Math.sin(i * (Math.PI / 180)) * movementRadius);
}

/* cssda web texture */
const cssdaTextureArr = [];
const cssdaVideo = document.querySelectorAll(".cssda");

cssdaVideo.forEach((el, idx) => {
    if (el) {
        const cssdaTexture = new THREE.VideoTexture(el);
        el.load();
        if (idx === 3 || idx === 8) el.play();
        cssdaTextureArr.push(cssdaTexture);
    }
});

/* 3x3 */
const planeArr = [];
const planeWidth = 150;
const planeHeight = 75;
const planeMargin = 10;
const planeDiff = 15;
for (let i = -1; i < 2; i++) {
    const planeLineArr = [];
    for (let j = -1; j < 2; j++) {
        const planeGeo = new THREE.PlaneGeometry(planeWidth, planeHeight);
        const planeMat = new THREE.MeshStandardMaterial({
            map: cssdaTextureArr[(i + 1) * 3 + (j + 1)],
            toneMapped: false,
            roughness: 1,
            transparent: true,
            opacity: 1,
        });
        const plane = new THREE.Mesh(planeGeo, planeMat);
        scene.add(plane);
        plane.position.set(0, 0, planeDiff * ((i + 1) * 3 + (j + 1)) - 50);

        planeLineArr.push(plane);
    }
    planeArr.push(planeLineArr);
}

/* shadow */
renderer.shadowMap.enabled = true;

/* raycasting */
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const onPointerMove = (e) => {
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / innerHeight) * 2 + 1;
};

const onMouseClick = (e) => {
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / innerHeight) * 2 + 1;
};

window.addEventListener("pointermove", onPointerMove, false);
window.addEventListener("click", onMouseClick, { passive: true });

const meshPositionArr = [];

for (let i = 0; i < scene.children.length; i++) {
    if (scene.children[i].isMesh) {
        meshPositionArr.push([
            scene.children[i].position.x,
            scene.children[i].position.y,
            scene.children[i].position.z,
        ]);
    }
}

const resetImages = () => {
    let cnt = 0;

    for (let i = 0; i < scene.children.length; i++) {
        if (scene.children[i].isMesh) {
            scene.children[i].position.x = meshPositionArr[cnt][0];
            scene.children[i].position.y = meshPositionArr[cnt][1];
            scene.children[i].position.z = meshPositionArr[cnt][2];
            cnt++;
        }
    }
};

const hoverImages = () => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    for (let i = 0; i < intersects.length; i++) {
        gsap.to(intersects[i].object.position, {
            y: 60,
            duration: 0.8,
            delay: 0,
            ease: "back.out(1)",
            onUpdate: function () {},
        });
    }
};

const coneRoundTrip = (inputTime) => {
    if (model) {
        model.position.y = 117 + movementPositionArr[inputTime % 90];
        time++;
    }
};
const animate = () => {
    renderer.render(scene, camera);
    resetImages();

    coneRoundTrip(time);
    requestAnimationFrame(animate);
};

animate();

window.addEventListener(
    "click",
    () => {
        if (innerWidth >= 768) {
            hoverImages();
        }
    },
    { passive: true }
);
