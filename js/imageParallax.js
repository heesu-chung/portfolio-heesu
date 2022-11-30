const imgContainer = document.querySelector(".img-container-2");
const subImgContainer = document.querySelector(".img-parallax-container");
const container = document.querySelector(".portfolio-2");
const sqrImages = document.querySelectorAll(".sqr");
const videoImages = document.querySelectorAll(".thinker-video");
const wideImages = document.querySelectorAll(".wide");
const a4Images = document.querySelectorAll(".a4");
const longImages = document.querySelectorAll(".long");

let width = 10;
if (innerWidth < 768) {
    width *= 2;
}

const imagePositionInit = () => {
    sqrImages.forEach((el, idx) => {
        el.style.position = "absolute";
        el.style.zIndex = "2";
        el.style.width = el.style.height = `${width}vw`;
    });
    videoImages.forEach((el, idx) => {
        el.style.position = "absolute";
        el.style.zIndex = "2";
        el.style.width = `${width}vw`;
        el.style.height = `${width * 2}vw`;
    });
    wideImages.forEach((el, idx) => {
        el.style.position = "absolute";
        el.style.zIndex = "2";
        el.style.width = `${width * 1.7}vw`;
        el.style.height = `${width}vw`;
    });
    a4Images.forEach((el, idx) => {
        el.style.position = "absolute";
        el.style.zIndex = "2";
        el.style.width = `${width}vw`;
        el.style.height = `${width * 1.42}vw`;
    });
    longImages.forEach((el, idx) => {
        el.style.position = "absolute";
        el.style.zIndex = "2";
        el.style.width = `${width}vw`;
        el.style.height = `${width * 1.9}vw`;
    });
};

imagePositionInit();

window.addEventListener(
    "resize",
    () => {
        if (innerWidth >= 768) {
            width = 10;
        } else {
            width = 20;
        }

        imagePositionInit();
    },
    { passive: true }
);

const thinker = document.querySelectorAll(".thinker-img");
const kk = document.querySelectorAll(".kk-img");
const archive = document.querySelectorAll(".archive-img");

const thinkerTop = [0, 10, 15, 23, 32];
const thinkerLeft = [10, 60, 30, 50, 10];
const kkTop = [50, 8, 15, 23, 32, 42];
const kkLeft = [2, 40, 30, 50, 10, 20];
const archiveTop = [24, 43, 9, 22, 32, 37, 50, 61, 70, 40];
const archiveLeft = [2, 3, 60, 25, 50, 30, 20, 50, 5, 40];

thinker.forEach((el, idx) => {
    if (thinkerTop[idx] && thinkerLeft[idx]) {
        el.style.top = `${thinkerTop[idx] * 2}vh`;
        el.style.left = `${thinkerLeft[idx] * 1.3}%`;
    }
});
kk.forEach((el, idx) => {
    if (kkTop[idx] && kkLeft[idx]) {
        el.style.top = `${kkTop[idx] * 2 + 75}vh`;
        el.style.left = `${kkLeft[idx] * 1.3}%`;
    }
});
archive.forEach((el, idx) => {
    if (archiveTop[idx] && archiveLeft[idx]) {
        el.style.top = `${archiveTop[idx] * 2 + 150}vh`;
        el.style.left = `${archiveLeft[idx] * 1.3}%`;
    }
});

let containerOffset = container.getBoundingClientRect().top + window.scrollY;
let containerHeight = container.getBoundingClientRect().height;

// innerHeight
let distance =
    subImgContainer.getBoundingClientRect().height + innerHeight * 1.5;

const imgScroll = () => {
    if (
        scrollY > containerOffset &&
        scrollY <= containerOffset + containerHeight
    ) {
        subImgContainer.style.transition = `1s`;
        subImgContainer.style.transitionTimingFunction = `cubic-bezier(.5,.92,.65,1.08)`;

        subImgContainer.style.MozTransition = `1s`;
        subImgContainer.style.MozTransitionTimingFunction = `cubic-bezier(.5,.92,.65,1.08)`;

        subImgContainer.style.webkitTransition = `1s`;
        subImgContainer.style.webkitTransitionTimingFunction = `cubic-bezier(.5,.92,.65,1.08)`;

        subImgContainer.style.OTransition = `1s`;
        subImgContainer.style.OTransitionTimingFunction = `cubic-bezier(.5,.92,.65,1.08)`;

        subImgContainer.style.transform = `translateY(${
            (distance / containerHeight) * (scrollY - containerOffset) * -1
        }px)`;
        subImgContainer.style.MozTransform = `translateY(${
            (distance / containerHeight) * (scrollY - containerOffset) * -1
        }px)`;
        subImgContainer.style.webkitTransform = `translateY(${
            (distance / containerHeight) * (scrollY - containerOffset) * -1
        }px)`;
        subImgContainer.style.OTransform = `translateY(${
            (distance / containerHeight) * (scrollY - containerOffset) * -1
        }px)`;
    }
    requestAnimationFrame(imgScroll);
};

window.addEventListener("scroll", imgScroll, { passive: true });
