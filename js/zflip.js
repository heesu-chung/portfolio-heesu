import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";

let scene, camera, renderer, ambientLight, spotLight;

gsap.registerPlugin(ScrollTrigger);

/* scene, renderer */
scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

/* camera */
camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 3000);
camera.lookAt(300, 0, 0);

let cameraSecondPosition = 600;

/* camera position */
if (innerWidth < 768) {
    cameraSecondPosition = 800;
    camera.position.set(0, 0, 450);
} else if (innerWidth >= 768 && innerWidth < 1024) {
    cameraSecondPosition = 700;
    camera.position.set(0, 0, 400);
} else if (innerWidth >= 1024 && innerWidth < 1441) {
    camera.position.set(0, 0, 300);
} else {
    camera.position.set(0, 0, 300);
}

/* controller */
const controls = new OrbitControls(camera, renderer.domElement);

/* queryselector */
const container = document.querySelector(".img-container-1");
container.appendChild(renderer.domElement);

/* resize */
window.addEventListener(
    "resize",
    () => {
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
        if (innerWidth < 768) {
            cameraSecondPosition = 700;
            camera.position.set(0, 0, 450);
        } else if (innerWidth >= 768 && innerWidth < 1024) {
            cameraSecondPosition = 700;
            camera.position.set(0, 0, 400);
        } else if (innerWidth >= 1024 && innerWidth < 1441) {
            camera.position.set(0, 0, 300);
        } else {
            camera.position.set(0, 0, 300);
        }
    },
    { passive: true }
);

/* tone mapping */
renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 1;

renderer.setSize(innerWidth, innerHeight);

/* light options */
spotLight = new THREE.SpotLight(0xffffff, 0.9, 10000);
spotLight.position.set(-600, 600, 350);
scene.add(spotLight);

ambientLight = new THREE.AmbientLight(0xffffff, 0.7, 1000);
scene.add(ambientLight);

/* object */
let bgColor = 0xffffff;
let objColor = 0xeeeeee;

let bgGeo = new THREE.PlaneGeometry(3000, 3000);
let bgMat = new THREE.MeshStandardMaterial({
    color: bgColor,
    emissive: 0xffffff,
    emissiveIntensity: 0.1,
    toneMapped: false,
    roughness: 1,
    metalness: 0,
});
let bg = new THREE.Mesh(bgGeo, bgMat);
scene.add(bg);

/* mobile-tablet-desktop object mp4 */
const mobileVideo = document.getElementById("mobile-scroll-video");
const tabletVideo = document.getElementById("tablet-scroll-video");
const desktopVideo = document.getElementById("desktop-scroll-video");
let mobileTexture, tabletTexture, desktopTexture;

if (mobileVideo) {
    mobileTexture = new THREE.VideoTexture(mobileVideo);
    mobileVideo.load();
}
if (tabletVideo) {
    tabletTexture = new THREE.VideoTexture(tabletVideo);
    tabletVideo.load();
}
if (desktopVideo) {
    desktopTexture = new THREE.VideoTexture(desktopVideo);
    desktopVideo.load();
}

/* plane object for mp4 video */
const mobileScreenRes = 57;
const mobileScreenGeo = new THREE.PlaneGeometry(
    mobileScreenRes,
    mobileScreenRes * 2 + 3
);
const mobileScreenMat = new THREE.MeshStandardMaterial({
    map: mobileTexture,
    toneMapped: false,
    color: 0xffffff,
    transparent: true,
    opacity: 0,
});
const mobileScreen = new THREE.Mesh(mobileScreenGeo, mobileScreenMat);
mobileScreen.receiveShadow = true;

const tabletScreenRes = 127;
const tabletScreenGeo = new THREE.PlaneGeometry(
    tabletScreenRes,
    tabletScreenRes * 1.35
);
const tabletScreenMat = new THREE.MeshStandardMaterial({
    map: tabletTexture,
    color: 0xffffff,
    toneMapped: false,
    transparent: true,
    opacity: 0,
});
const tabletScreen = new THREE.Mesh(tabletScreenGeo, tabletScreenMat);
tabletScreen.receiveShadow = true;

const desktopScreenRes = 185;
const desktopScreenGeo = new THREE.PlaneGeometry(
    desktopScreenRes * 1.45,
    desktopScreenRes
);
const desktopScreenMat = new THREE.MeshStandardMaterial({
    map: desktopTexture,
    color: 0xffffff,
    toneMapped: false,
    transparent: true,
    opacity: 0,
});
const desktopScreen = new THREE.Mesh(desktopScreenGeo, desktopScreenMat);
desktopScreen.receiveShadow = true;

/* mobile-tablet-desktop scene add */

scene.add(mobileScreen);
scene.add(tabletScreen);
scene.add(desktopScreen);

/* mobile-tablet-desktop position set */
mobileScreen.position.set(0, 1, 40);
tabletScreen.position.set(-79, 0, 28.5);
desktopScreen.position.set(50, 20, 21.5);

/* mobile-tablet-desktop gltf object */
let mobile = new GLTFLoader();
let mobileModel;
let tablet = new GLTFLoader();
let tabletModel;
let screen = new GLTFLoader();
let screenModel;

mobile.load("../assets/gltf/mobile.gltf", (gltf) => {
    mobileModel = gltf.scene;
    mobileModel.traverse((node) => {
        if (node.isMesh) {
            node.castShadow = true;
            node.material = new THREE.MeshStandardMaterial({
                color: objColor,
                toneMapped: false,
                transparent: true,
                opacity: 1,
            });
        }
    });
    if (mobileModel) {
        mobileModel.scale.set(10, 10, 10);
        mobileModel.position.set(0, 0, -20);
        scene.add(mobileModel);
    }
});

tablet.load("../assets/gltf/tablet.gltf", (gltf) => {
    tabletModel = gltf.scene;
    tabletModel.traverse((node) => {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            node.material = new THREE.MeshStandardMaterial({
                color: objColor,
                toneMapped: false,
                transparent: true,
                opacity: 1,
            });
        }
    });

    tabletModel.scale.set(10, 10, 10);
    tabletModel.position.set(-80, 0, -20);
    scene.add(tabletModel);
});

screen.load("../assets/gltf/screen.gltf", (gltf) => {
    screenModel = gltf.scene;
    screenModel.traverse((node) => {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            node.material = new THREE.MeshStandardMaterial({
                color: objColor,
                toneMapped: false,
                transparent: true,
                opacity: 1,
            });
        }
    });

    screenModel.scale.set(10, 10, 10);
    screenModel.position.set(50, 20, -20);
    scene.add(screenModel);
});

/* interaction texture */
const interactionTextureArr = [];
const interactionVideo = document.querySelectorAll(".interaction");
const interactionVideoLarge = document.querySelector(".interaction-video");
const interactionTexture = new THREE.VideoTexture(interactionVideoLarge);
interactionVideoLarge.load();

interactionVideo.forEach((el, idx) => {
    if (el) {
        const interactionTexture = new THREE.VideoTexture(el);
        el.load();
        interactionTextureArr.push(interactionTexture);
    }
});

/* decoration object */
const circleGeo = new THREE.CircleGeometry(150, 100);
const circleMat = new THREE.MeshBasicMaterial({
    color: 0x111111,
});
const circle = new THREE.Mesh(circleGeo, circleMat);
scene.add(circle);
circle.position.set(-100, 100, 2);
circle.scale.set(0, 0, 0);

const cubeGeo = new THREE.BoxGeometry(30, 30, 30);
const cubeMat = new THREE.MeshBasicMaterial({
    color: 0x111111,
});
const cube = new THREE.Mesh(cubeGeo, cubeMat);
scene.add(cube);
cube.position.set(-50, 70, 50);
cube.scale.set(0, 0, 0);
cube.receiveShadow = true;

/* 4x4 Box */
const boxes = [];
const texes = [];
const boxSize = 35;
for (let i = 0; i < 4; i++) {
    const box_line = [];
    const tex_line = [];
    for (let j = 0; j < 4; j++) {
        const boxGeo = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
        const boxMat = new THREE.MeshStandardMaterial({
            color: bgColor,
            emissive: 0xffffff,
            emissiveIntensity: 1,
            transparent: true,
        });
        const box = new THREE.Mesh(boxGeo, boxMat);

        const texGeo = new THREE.PlaneGeometry(boxSize, boxSize, boxSize);
        const texMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            toneMapped: false,
            map: interactionTextureArr[i * 4 + j],
            transparent: true,
        });
        const tex = new THREE.Mesh(texGeo, texMat);

        scene.add(tex);
        scene.add(box);
        box.castShadow = true;
        box.receiveShadow = true;
        tex.receiveShadow = true;

        box.position.set(
            boxSize * -1.5 + boxSize * j,
            boxSize * 1.5 - boxSize * i,
            -25
        );
        tex.position.set(
            boxSize * -1.5 + boxSize * j,
            boxSize * 1.5 - boxSize * i,
            box.position.z + boxSize / 2 + 1
        );
        box_line.push(box);
        tex_line.push(tex);
    }
    boxes.push(box_line);
    texes.push(tex_line);
}

const interactionLargePlaneGeo = new THREE.PlaneGeometry(
    boxSize * 4,
    boxSize * 4,
    boxSize * 4
);
const interactionLargePlaneMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    toneMapped: false,
    map: interactionTexture,
    transparent: true,
});
const interactionLarge = new THREE.Mesh(
    interactionLargePlaneGeo,
    interactionLargePlaneMat
);
scene.add(interactionLarge);
interactionLarge.position.set(0, 0, -25);

/* shadow */
renderer.shadowMap.enabled = true;
spotLight.castShadow = true;
bg.receiveShadow = true;

spotLight.shadow.mapSize.width = spotLight.shadow.mapSize.height = 4096;
spotLight.shadow.radius = 2;

/* mobile-tablet-desktop animation*/
let screenOn = false;

const onAnimate = () => {
    camera.lookAt(0, 0, 0);
    gsap.timeline({
        scrollTrigger: {
            trigger: ".portfolio-1",
            start: "top center",
            end: "center top",
            toggleActions: "restart reset restart complete",
            markers: false,
        },
    })
        .to(camera.position, {
            x: 0,
            y: 0,
            duration: 0.0,
            delay: 0,
            ease: "power3.out",
            onUpdate: function () {
                camera.lookAt(0, 0, 0);
                mobileVideo.load();
                tabletVideo.load();
                desktopVideo.load();
                interactionVideoLarge.pause();
            },
        })
        .to(mobileModel.position, {
            z: 35,
            duration: 0.8,
            delay: 0,
            ease: "power3.out",
        })
        .to(
            mobileScreen.position,
            {
                z: 40,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out",
            },
            "<"
        )
        .to(mobileScreen.material, {
            opacity: 1,
            duration: 0.2,
            delay: 0,
            ease: "power3.out",
            onUpdate: function () {
                mobileVideo.play();
            },
        })
        .to(camera.position, {
            z: cameraSecondPosition,
            duration: 1.0,
            delay: 1.0,
            ease: "power3.out",
            onUpdate: function () {},
        })
        .to(
            tabletModel.position,
            {
                z: 25,
                duration: 1.0,
                delay: 0.3,
                ease: "power3.out",
            },
            "<"
        )
        .to(
            screenModel.position,
            {
                z: 15,
                duration: 1.0,
                delay: 0.4,
                ease: "power3.out",
            },
            "<"
        )
        .to(tabletScreen.material, {
            opacity: 1,
            duration: 0.3,
            delay: 0.2,
            ease: "power3.out",
            onUpdate: function () {
                tabletVideo.play();
            },
        })
        .to(
            desktopScreen.material,
            {
                opacity: 1,
                duration: 0.5,
                delay: 0.2,
                ease: "power3.out",
                onUpdate: function () {
                    desktopVideo.play();
                },
            },
            "<"
        )
        .to(
            camera.position,
            {
                x: 150,
                y: -30,
                duration: 0.5,
                delay: 0,
                ease: "power3.out",
                onUpdate: function () {
                    camera.lookAt(30, 0, 0);
                },
            },
            "<"
        )
        .to(
            circle.scale,
            {
                x: 0.7,
                y: 0.7,
                z: 0.7,
                duration: 0.8,
                delay: 0.1,
                eae: "back.out(1)",
            },
            "<"
        );

    gsap.timeline({
        scrollTrigger: {
            trigger: ".portfolio-1",
            start: "center top",
            end: "bottom bottom",
            toggleActions: "restart complete restart reset",
            markers: false,
        },
    })
        .to(camera.position, {
            x: 0,
            y: 0,
            duration: 0.0,
            delay: 0,
            ease: "power3.out",
            onUpdate: function () {
                camera.lookAt(0, 0, 0);
                mobileVideo.pause();
                tabletVideo.pause();
                desktopVideo.pause();
                interactionVideoLarge.load();
            },
        })
        // first wave
        .to(boxes[0][0].position, {
            z: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "back.out(1)",
            onUpdate: function () {},
        })
        .to(
            texes[0][0].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        // second wave
        .to(
            boxes[0][1].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[0][1].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(
            boxes[1][0].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[1][0].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        // third wave
        .to(
            boxes[0][2].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[0][2].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(
            boxes[1][1].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[1][1].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(
            boxes[2][0].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[2][0].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        // fourth wave
        .to(
            boxes[0][3].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[0][3].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(
            boxes[1][2].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[1][2].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(
            boxes[2][1].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[2][1].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(
            boxes[3][0].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[3][0].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        // fifth wave
        .to(
            boxes[1][3].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[1][3].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(
            boxes[2][2].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[2][2].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(
            boxes[3][1].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[3][1].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        // sixth wave
        .to(
            boxes[2][3].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[2][3].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(
            boxes[3][2].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[3][2].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        // last wave
        .to(
            boxes[3][3].position,
            {
                z: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "back.out(1)",
                onUpdate: function () {},
            },
            "<"
        )
        .to(
            texes[3][3].position,
            {
                z: boxSize / 2 + 1,
                duration: 0.8,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(
            cube.scale,
            {
                x: 0.5,
                y: 0.5,
                z: 0.5,
                delay: 0,
                ease: "back.out(1)",
            },
            "<"
        )
        .to(interactionLarge.position, {
            z: boxSize / 2 + 1.2,
            duration: 0.3,
            delay: 0,
            ease: "power3.out",
            onUpdate: function () {
                interactionVideoLarge.play();
            },
        });
};

const animate = () => {
    renderer.render(scene, camera);

    if (mobileModel && tabletModel && screenModel && !screenOn) {
        onAnimate();
        screenOn = true;
    }
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
};

animate();
