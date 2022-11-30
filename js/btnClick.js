let menuClicked = false;
let menuListClicked = false;

const bodyContainer = document.querySelector("body");
const bgContainer = document.querySelector(".trans-bg");
bgContainer.style.opacity = "0";
bgContainer.style.zIndex = "-50";

const onHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const menuLine = document.querySelectorAll(".menu-line");

const onMenuOver = () => {
    if (!menuClicked) {
        menuLine[0].style.transform = `translate(-10px, 0)`;
        menuLine[2].style.transform = `translate(10px, 0)`;
        menuLine[0].style.MozTransform = `translate(-10px, 0)`;
        menuLine[2].style.MozTransform = `translate(10px, 0)`;
        menuLine[0].style.webkitTransform = `translate(-10px, 0)`;
        menuLine[2].style.webkitTransform = `translate(10px, 0)`;
        menuLine[0].style.OTransform = `translate(-10px, 0)`;
        menuLine[2].style.OTransform = `translate(10px, 0)`;
    }
};

const onMenuLeave = () => {
    if (!menuClicked) {
        menuLine[0].style.transform = `translate(0, 0)`;
        menuLine[2].style.transform = `translate(0, 0)`;
        menuLine[0].style.MozTransform = `translate(0, 0)`;
        menuLine[2].style.MozTransform = `translate(0, 0)`;
        menuLine[0].style.webkitTransform = `translate(0, 0)`;
        menuLine[2].style.webkitTransform = `translate(0, 0)`;
        menuLine[0].style.OTransform = `translate(0, 0)`;
        menuLine[2].style.OTransform = `translate(0, 0)`;
    }
};

const menuContainerOpen = () => {
    bodyContainer.style.overflow = `hidden`;

    bgContainer.style.opacity = "1";
    bgContainer.style.zIndex = "50";
    menuLine[0].style.transform = `translate(0, 6px)`;
    menuLine[0].style.MozTransform = `translate(0, 6px)`;
    menuLine[0].style.webkitTransform = `translate(0, 6px)`;
    menuLine[0].style.OTransform = `translate(0, 6px)`;
    menuLine[1].style.opacity = `0`;
    menuLine[2].style.transform = `translate(0, -6px)`;
    menuLine[2].style.MozTransform = `translate(0, -6px)`;
    menuLine[2].style.webkitTransform = `translate(0, -6px)`;
    menuLine[2].style.OTransform = `translate(0, -6px)`;
    progressBlock.style.opacity = `0`;
    setTimeout(() => {
        menuLine[0].style.transform = `translate(0, 6px) rotate(45deg)`;
        menuLine[2].style.transform = `translate(0, -6px) rotate(-45deg)`;
        menuLine[0].style.MozTransform = `translate(0, 6px) rotate(45deg)`;
        menuLine[2].style.MozTransform = `translate(0, -6px) rotate(-45deg)`;
        menuLine[0].style.webkitTransform = `translate(0, 6px) rotate(45deg)`;
        menuLine[2].style.webkitTransform = `translate(0, -6px) rotate(-45deg)`;
        menuLine[0].style.OTransform = `translate(0, 6px) rotate(45deg)`;
        menuLine[2].style.OTransform = `translate(0, -6px) rotate(-45deg)`;
    }, 250);
};

const menuContainerClose = () => {
    bgContainer.style.opacity = "0";
    bgContainer.style.zIndex = "-50";
    menuLine[0].style.transform = `translate(0, 0px) rotate(0deg)`;
    menuLine[0].style.MozTransform = `translate(0, 0px) rotate(0deg)`;
    menuLine[0].style.webkitTransform = `translate(0, 0px) rotate(0deg)`;
    menuLine[0].style.OTransform = `translate(0, 0px) rotate(0deg)`;

    menuLine[1].style.opacity = `1`;
    menuLine[2].style.transform = `translate(0, 0px) rotate(0deg)`;
    menuLine[2].style.MozTransform = `translate(0, 0px) rotate(0deg)`;
    menuLine[2].style.webkitTransform = `translate(0, 0px) rotate(0deg)`;
    menuLine[2].style.OTransform = `translate(0, 0px) rotate(0deg)`;

    progressBlock.style.opacity = `0.8`;
    setTimeout(() => {
        bodyContainer.style.overflow = `visible`;

        menuLine[0].style.transform = `translate(0, 0) `;
        menuLine[2].style.transform = `translate(0, 0)`;
        menuLine[0].style.MozTransform = `translate(0, 0) `;
        menuLine[2].style.MozTransform = `translate(0, 0)`;
        menuLine[0].style.webkitTransform = `translate(0, 0) `;
        menuLine[2].style.webkitTransform = `translate(0, 0)`;
        menuLine[0].style.OTransform = `translate(0, 0) `;
        menuLine[2].style.OTransform = `translate(0, 0)`;
    }, 250);
};

const onMenuClick = () => {
    if (!menuClicked) {
        menuContainerOpen();
    } else {
        menuContainerClose();
    }
    menuClicked = !menuClicked;
};

let offset = [];
let height = [];
let loc = [];
let scrollArr = [];

const portfolio = document.querySelectorAll(".portfolio");
const introContainer = document.querySelector(".intro");
const contactContainer = document.querySelector(".contact");

const portfolioPositionLoad = () => {
    offset = [];
    height = [];
    loc = [];

    scrollArr.push(0);

    portfolio.forEach((el, idx) => {
        let offsetData = el.getBoundingClientRect().top + scrollY;
        let heightData = offsetData + el.getBoundingClientRect().height;
        offset.push(offsetData);
        height.push(heightData);
        loc.push(el.getBoundingClientRect().top);
        scrollArr.push(offsetData + 50);
    });

    scrollArr.push(introContainer.getBoundingClientRect().top + scrollY);
    scrollArr.push(contactContainer.getBoundingClientRect().top + scrollY);
};

const onListClick = (e) => {
    if (!menuListClicked) {
        menuListClicked = true;
        menuClicked = !menuClicked;

        window.scrollTo({ top: scrollArr[e] });

        setTimeout(() => {
            menuContainerClose();
            menuListClicked = false;
        }, 300);
    }
};

window.addEventListener(
    "load",
    () => {
        portfolioPositionLoad();
    },
    { passive: true }
);

window.addEventListener(
    "resize",
    () => {
        portfolioPositionLoad();
    },
    { passive: true }
);
