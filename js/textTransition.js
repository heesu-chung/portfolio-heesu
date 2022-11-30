/* global variables */
let scroll = 0;
let diff = 5;

/* title variables */
const titleWrapper1 = document.querySelector(".desc-title-1");
const titleWrapper2 = document.querySelector(".desc-title-2");
const titleWrapper3 = document.querySelector(".desc-title-3");
const titleWrapper4 = document.querySelector(".desc-title-4");

/* zflip text variables */
const textWrapper1 = document.querySelector(".desc-content-wrapper-1");
const textContent1 = document.querySelector(".desc-1-1");
const textContent2 = document.querySelector(".desc-1-2");

textWrapper1.style.height =
    textContent1.getBoundingClientRect().height >=
    textContent2.getBoundingClientRect().height
        ? `${textContent1.getBoundingClientRect().height}px`
        : `${textContent2.getBoundingClientRect().height}px`;

const container1 = document.querySelector(".portfolio-1");
const container1Offset =
    container1.getBoundingClientRect().top + window.scrollY;
const container1Height = container1.getBoundingClientRect().height;

/* archive text variables */
const textWrapper2 = document.querySelector(".desc-content-wrapper-2");
const textContent3 = document.querySelector(".desc-2-1");
const textContent4 = document.querySelector(".desc-2-2");
const textContent5 = document.querySelector(".desc-2-3");

const container2 = document.querySelector(".portfolio-2");
const container2Offset =
    container2.getBoundingClientRect().top + window.scrollY;
const container2Height = container2.getBoundingClientRect().height;

let wrapper2Height = Math.max(
    textContent3.getBoundingClientRect().height,
    textContent4.getBoundingClientRect().height,
    textContent5.getBoundingClientRect().height
);

textWrapper2.style.height = `${wrapper2Height}px`;

/* cssda text variables */
const textWrapper3 = document.querySelector(".desc-content-wrapper-3");
const textContent6 = document.querySelector(".desc-3-1");
const container3 = document.querySelector(".portfolio-3");
const container3Offset =
    container3.getBoundingClientRect().top + window.scrollY;
const container3Height = container3.getBoundingClientRect().height;

textWrapper3.style.height = `${textContent6.getBoundingClientRect().height}px`;

/* blog text variables */
const textWrapper4 = document.querySelector(".desc-content-wrapper-4");
const textContent7 = document.querySelector(".desc-4-1");
const textContent8 = document.querySelector(".desc-4-2");
const container4 = document.querySelector(".portfolio-4");
const container4Offset =
    container4.getBoundingClientRect().top + window.scrollY;
const container4Height = container4.getBoundingClientRect().height;

textWrapper4.style.height =
    textContent7.getBoundingClientRect().height >=
    textContent8.getBoundingClientRect().height
        ? `${textContent7.getBoundingClientRect().height}px`
        : `${textContent8.getBoundingClientRect().height}px`;

/* scroll event */
const onScrollEvent = () => {
    scroll = window.scrollY;

    if (scrollY >= container1Offset) {
        titleWrapper1.style.transform = `translateX(0)`;
        titleWrapper1.style.MozTransform = `translateX(0)`;
        titleWrapper1.style.webkitTransform = `translateX(0)`;
        titleWrapper1.style.OTransform = `translateX(0)`;
        titleWrapper1.style.opacity = `1`;
    }
    if (scrollY >= container2Offset) {
        titleWrapper2.style.transform = `translateX(0)`;
        titleWrapper2.style.MozTransform = `translateX(0)`;
        titleWrapper2.style.webkitTransform = `translateX(0)`;
        titleWrapper2.style.OTransform = `translateX(0)`;
        titleWrapper2.style.opacity = `1`;
    }
    if (scrollY >= container3Offset) {
        titleWrapper3.style.transform = `translateX(0)`;
        titleWrapper3.style.MozTransform = `translateX(0)`;
        titleWrapper3.style.webkitTransform = `translateX(0)`;
        titleWrapper3.style.OTransform = `translateX(0)`;
        titleWrapper3.style.opacity = `1`;
    }
    if (scrollY >= container4Offset) {
        titleWrapper4.style.transform = `translateX(0)`;
        titleWrapper4.style.MozTransform = `translateX(0)`;
        titleWrapper4.style.webkitTransform = `translateX(0)`;
        titleWrapper4.style.OTransform = `translateX(0)`;
        titleWrapper4.style.opacity = `1`;
    }

    /* zflip4 text transition */
    if (
        scrollY >= container1Offset &&
        scrollY < container1Offset + container1Height / 2
    ) {
        textContent1.style.opacity = `1`;
        textContent1.style.transform = `translateX(${diff * -1}vw)`;
        textContent1.style.MozTransform = `translateX(${diff * -1}vw)`;
        textContent1.style.webkitTransform = `translateX(${diff * -1}vw)`;
        textContent1.style.OTransform = `translateX(${diff * -1}vw)`;
        textContent2.style.opacity = `0`;
        textContent2.style.transform = `translateX(0)`;
        textContent2.style.MozTransform = `translateX(0)`;
        textContent2.style.webkitTransform = `translateX(0)`;
        textContent2.style.OTransform = `translateX(0)`;
    } else if (scrollY >= container1Offset + container1Height / 2) {
        textContent1.style.opacity = `0`;
        textContent1.style.transform = `translateX(${diff * -2}vw)`;
        textContent1.style.MozTransform = `translateX(${diff * -2}vw)`;
        textContent1.style.webkitTransform = `translateX(${diff * -2}vw)`;
        textContent1.style.OTransform = `translateX(${diff * -2}vw)`;
        textContent2.style.opacity = `1`;
        textContent2.style.transform = `translateX(${diff * -1}vw)`;
        textContent2.style.MozTransform = `translateX(${diff * -1}vw)`;
        textContent2.style.webkitTransform = `translateX(${diff * -1}vw)`;
        textContent2.style.OTransform = `translateX(${diff * -1}vw)`;
    } else {
        textContent1.style.opacity = `0`;
        textContent1.style.transform = `translateX(0)`;
        textContent1.style.MozTransform = `translateX(0)`;
        textContent1.style.webkitTransform = `translateX(0)`;
        textContent1.style.OTransform = `translateX(0)`;
        textContent2.style.opacity = `0`;
        textContent2.style.transform = `translateX(0)`;
        textContent2.style.MozTransform = `translateX(0)`;
        textContent2.style.webkitTransform = `translateX(0)`;
        textContent2.style.OTransform = `translateX(0)`;
    }

    /* archive text transition */
    if (
        scrollY >= container2Offset &&
        scrollY <= container2Offset + container2Height / 3
    ) {
        textContent3.style.opacity = `1`;
        textContent3.style.transform = `translateX(${diff * -1}vw)`;
        textContent3.style.MozTransform = `translateX(${diff * -1}vw)`;
        textContent3.style.webkitTransform = `translateX(${diff * -1}vw)`;
        textContent3.style.OTransform = `translateX(${diff * -1}vw)`;
        textContent4.style.opacity = `0`;
        textContent4.style.transform = `translateX(${0}vw)`;
        textContent4.style.MozTransform = `translateX(${0}vw)`;
        textContent4.style.webkitTransform = `translateX(${0}vw)`;
        textContent4.style.OTransform = `translateX(${0}vw)`;
        textContent5.style.opacity = `0`;
        textContent5.style.transform = `translateX(${0}vw)`;
        textContent5.style.MozTransform = `translateX(${0}vw)`;
        textContent5.style.webkitTransform = `translateX(${0}vw)`;
        textContent5.style.OTransform = `translateX(${0}vw)`;
    } else if (
        scrollY > container2Offset + container2Height / 3 &&
        scrollY <= container2Offset + (container2Height / 5) * 3
    ) {
        textContent3.style.opacity = `0`;
        textContent3.style.transform = `translateX(${diff * -2}vw)`;
        textContent3.style.MozTransform = `translateX(${diff * -2}vw)`;
        textContent3.style.webkitTransform = `translateX(${diff * -2}vw)`;
        textContent3.style.OTransform = `translateX(${diff * -2}vw)`;
        textContent4.style.opacity = `1`;
        textContent4.style.transform = `translateX(${diff * -1}vw)`;
        textContent4.style.MozTransform = `translateX(${diff * -1}vw)`;
        textContent4.style.webkitTransform = `translateX(${diff * -1}vw)`;
        textContent4.style.OTransform = `translateX(${diff * -1}vw)`;
        textContent5.style.opacity = `0`;
        textContent5.style.transform = `translateX(${0}vw)`;
        textContent5.style.MozTransform = `translateX(${0}vw)`;
        textContent5.style.webkitTransform = `translateX(${0}vw)`;
        textContent5.style.OTransform = `translateX(${0}vw)`;
    } else if (scrollY > container2Offset + (container2Height / 5) * 3) {
        textContent3.style.opacity = `0`;
        textContent3.style.transform = `translateX(${diff * -2}vw)`;
        textContent3.style.MozTransform = `translateX(${diff * -2}vw)`;
        textContent3.style.webkitTransform = `translateX(${diff * -2}vw)`;
        textContent3.style.OTransform = `translateX(${diff * -2}vw)`;
        textContent4.style.opacity = `0`;
        textContent4.style.transform = `translateX(${diff * -2}vw)`;
        textContent4.style.MozTransform = `translateX(${diff * -2}vw)`;
        textContent4.style.webkitTransform = `translateX(${diff * -2}vw)`;
        textContent4.style.OTransform = `translateX(${diff * -2}vw)`;
        textContent5.style.opacity = `1`;
        textContent5.style.transform = `translateX(${diff * -1}vw)`;
        textContent5.style.MozTransform = `translateX(${diff * -1}vw)`;
        textContent5.style.webkitTransform = `translateX(${diff * -1}vw)`;
        textContent5.style.OTransform = `translateX(${diff * -1}vw)`;
    } else if (scrollY < container2Offset) {
        textContent3.style.opacity = `0`;
        textContent3.style.transform = `translateX(${0}vw)`;
        textContent3.style.MozTransform = `translateX(${0}vw)`;
        textContent3.style.webkitTransform = `translateX(${0}vw)`;
        textContent3.style.OTransform = `translateX(${0}vw)`;
        textContent4.style.opacity = `0`;
        textContent4.style.transform = `translateX(${0}vw)`;
        textContent4.style.MozTransform = `translateX(${0}vw)`;
        textContent4.style.webkitTransform = `translateX(${0}vw)`;
        textContent4.style.OTransform = `translateX(${0}vw)`;
        textContent5.style.opacity = `0`;
        textContent5.style.transform = `translateX(${0}vw)`;
        textContent5.style.MozTransform = `translateX(${0}vw)`;
        textContent5.style.webkitTransform = `translateX(${0}vw)`;
        textContent5.style.OTransform = `translateX(${0}vw)`;
    }
    /* cssda text transition */
    if (scrollY > container3Offset) {
        textContent6.style.opacity = `1`;
        textContent6.style.transform = `translateX(${diff * -1}vw)`;
        textContent6.style.MozTransform = `translateX(${diff * -1}vw)`;
        textContent6.style.webkitTransform = `translateX(${diff * -1}vw)`;
        textContent6.style.OTransform = `translateX(${diff * -1}vw)`;
    } else {
        textContent6.style.opacity = `0`;
        textContent6.style.transform = `translateX(${0}vw)`;
        textContent6.style.MozTransform = `translateX(${0}vw)`;
        textContent6.style.webkitTransform = `translateX(${0}vw)`;
        textContent6.style.OTransform = `translateX(${0}vw)`;
    }
    /* blog text transition */
    if (
        scrollY >= container4Offset &&
        scrollY < container4Offset + container4Height / 2
    ) {
        textContent7.style.opacity = `1`;
        textContent7.style.transform = `translateX(${diff * -1}vw)`;
        textContent7.style.MozTransform = `translateX(${diff * -1}vw)`;
        textContent7.style.webkitTransform = `translateX(${diff * -1}vw)`;
        textContent7.style.OTransform = `translateX(${diff * -1}vw)`;
        textContent8.style.opacity = `0`;
        textContent8.style.transform = `translateX(0)`;
        textContent8.style.MozTransform = `translateX(0)`;
        textContent8.style.webkitTransform = `translateX(0)`;
        textContent8.style.OTransform = `translateX(0)`;
    } else if (scrollY >= container4Offset + container4Height / 3) {
        textContent7.style.opacity = `0`;
        textContent7.style.transform = `translateX(${diff * -2}vw)`;
        textContent7.style.MozTransform = `translateX(${diff * -2}vw)`;
        textContent7.style.webkitTransform = `translateX(${diff * -2}vw)`;
        textContent7.style.OTransform = `translateX(${diff * -2}vw)`;
        textContent8.style.opacity = `1`;
        textContent8.style.transform = `translateX(${diff * -1}vw)`;
        textContent8.style.MozTransform = `translateX(${diff * -1}vw)`;
        textContent8.style.webkitTransform = `translateX(${diff * -1}vw)`;
        textContent8.style.OTransform = `translateX(${diff * -1}vw)`;
    } else {
        textContent7.style.opacity = `0`;
        textContent7.style.transform = `translateX(0)`;
        textContent7.style.MozTransform = `translateX(0)`;
        textContent7.style.webkitTransform = `translateX(0)`;
        textContent7.style.OTransform = `translateX(0)`;
        textContent8.style.opacity = `0`;
        textContent8.style.transform = `translateX(0)`;
        textContent8.style.MozTransform = `translateX(0)`;
        textContent8.style.webkitTransform = `translateX(0)`;
        textContent8.style.OTransform = `translateX(0)`;
    }
};

const onResize = () => {
    textWrapper1.style.height =
        textContent1.getBoundingClientRect().height >=
        textContent2.getBoundingClientRect().height
            ? `${textContent1.getBoundingClientRect().height}px`
            : `${textContent2.getBoundingClientRect().height}px`;

    let wrapper2Height = Math.max(
        textContent3.getBoundingClientRect().height,
        textContent4.getBoundingClientRect().height,
        textContent5.getBoundingClientRect().height
    );
    textWrapper2.style.height = `${wrapper2Height}px`;

    textWrapper3.style.height = `${
        textContent6.getBoundingClientRect().height
    }px`;

    textWrapper4.style.height =
        textContent7.getBoundingClientRect().height >=
        textContent8.getBoundingClientRect().height
            ? `${textContent7.getBoundingClientRect().height}px`
            : `${textContent8.getBoundingClientRect().height}px`;
};

window.addEventListener("scroll", onScrollEvent, { passive: true });
window.addEventListener("resize", onResize, { passive: true });
