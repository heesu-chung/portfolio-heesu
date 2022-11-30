const cursorBlock = document.querySelector(".cursor-block");

const imageCursorBlock = document.querySelector(".cursor-image-block");
const imageArr = document.querySelectorAll(".cursor-image");

window.addEventListener(
    "mousemove",
    (e) => {
        if (window.scrollY <= 100 && videoMuted && !menuClicked) {
            cursorBlock.style.transform = `translate(${e.clientX + 3}px, ${
                e.clientY + 3
            }px) scale(1)`;
            cursorBlock.style.MozTransform = `translate(${e.clientX + 3}px, ${
                e.clientY + 3
            }px) scale(1)`;
            cursorBlock.style.webkitTransform = `translate(${
                e.clientX + 3
            }px, ${e.clientY + 3}px) scale(1)`;
            cursorBlock.style.OTransform = `translate(${e.clientX + 3}px, ${
                e.clientY + 3
            }px) scale(1)`;

            introVideoContainer.style.cursor = `none`;
        } else {
            cursorBlock.style.transform = `scale(0)`;
            cursorBlock.style.MozTransform = `scale(0)`;
            cursorBlock.style.webkitTransform = `scale(0)`;
            cursorBlock.style.OTransform = `scale(0)`;
            introVideoContainer.style.cursor = `pointer`;
        }

        if (menuClicked) {
            imageCursorBlock.style.transform = `translate(${e.clientX + 5}px, ${
                e.clientY - 125
            }px)`;
            imageCursorBlock.style.MozTransform = `translate(${
                e.clientX + 5
            }px, ${e.clientY - 125}px)`;
            imageCursorBlock.style.webkitTransform = `translate(${
                e.clientX + 5
            }px, ${e.clientY - 125}px)`;
            imageCursorBlock.style.OTransform = `translate(${
                e.clientX + 5
            }px, ${e.clientY - 125}px)`;
        }
    },
    { passive: true }
);

const onListOver = (e) => {
    imageArr[e].style.opacity = "0.8";
};

const onListLeave = (e) => {
    imageArr.forEach((el, idx) => {
        el.style.opacity = "0";
    });
};
