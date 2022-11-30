const btn = document.querySelectorAll(".btn");
const link = document.querySelectorAll(".link");
let damping = 0.2;

let mousePosition = { x: 0, y: 0 };
let btnCenterPositionArr = [];

const btnPositionCheck = () => {
    link.forEach((el, idx) => {
        const { width, height, left } = el.getBoundingClientRect();
        const offsetTop = el.getBoundingClientRect().top + scrollY;

        btnCenterPositionArr.push([
            (left * 2 + width) / 2,
            offsetTop + height / 2,
        ]);
    });
};

btnPositionCheck();

window.addEventListener(
    "resize",
    () => {
        btnCenterPositionArr = [];
        btnPositionCheck();
    },
    { passive: true }
);

let target = -1;

const btnMouseOver = (e) => {
    target = e;
    btn[e].style.transform = `translate(${
        (mousePosition.x - btnCenterPositionArr[e][0]) * damping
    }px, ${-3}px)`;
    btn[e].style.MozTransform = `translate(${
        (mousePosition.x - btnCenterPositionArr[e][0]) * damping
    }px, ${-3}px)`;
    btn[e].style.webkitTransform = `translate(${
        (mousePosition.x - btnCenterPositionArr[e][0]) * damping
    }px, ${-3}px)`;
    btn[e].style.OTransform = `translate(${
        (mousePosition.x - btnCenterPositionArr[e][0]) * damping
    }px, ${-3}px)`;
};

const btnMouseLeave = (e) => {
    btn[e].style.transform = `translate(0, 0)`;
    btn[e].style.MozTransform = `translate(0, 0)`;
    btn[e].style.webkitTransform = `translate(0, 0)`;
    btn[e].style.OTransform = `translate(0, 0)`;
    target = -1;
};

window.addEventListener(
    "mousemove",
    (e) => {
        mousePosition = { x: e.pageX, y: e.pageY };
    },
    { passive: true }
);
