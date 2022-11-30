const blogContainer = document.querySelector(".img-container-4");
const videoTopContainer = document.querySelector(".video-top");
const videoBottomContainer = document.querySelector(".video-bottom");
let blogContainerOffset = blogContainer.getBoundingClientRect().top + scrollY;

window.addEventListener(
    "resize",
    () => {
        blogContainerOffset =
            blogContainer.getBoundingClientRect().top + scrollY;
    },
    { passive: true }
);

window.addEventListener(
    "scroll",
    () => {
        if (scrollY > blogContainerOffset + 50) {
            if (innerWidth > 768) {
                videoTopContainer.style.transform = `translateX(-2vw)`;
                videoBottomContainer.style.transform = `translateX(2vw)`;
                videoTopContainer.style.MozTransform = `translateX(-2vw)`;
                videoBottomContainer.style.MozTransform = `translateX(2vw)`;
                videoTopContainer.style.webkitTransform = `translateX(-2vw)`;
                videoBottomContainer.style.webkitTransform = `translateX(2vw)`;
                videoTopContainer.style.OTransform = `translateX(-2vw)`;
                videoBottomContainer.style.OTransform = `translateX(2vw)`;
            }
        } else {
            if (innerWidth > 768) {
                videoTopContainer.style.transform = `translateX(5vw)`;
                videoBottomContainer.style.transform = `translateX(-5vw)`;
                videoTopContainer.style.MozTransform = `translateX(5vw)`;
                videoBottomContainer.style.MozTransform = `translateX(-5vw)`;
                videoTopContainer.style.webkitTransform = `translateX(5vw)`;
                videoBottomContainer.style.webkitTransform = `translateX(-5vw)`;
                videoTopContainer.style.OTransform = `translateX(5vw)`;
                videoBottomContainer.style.OTransform = `translateX(-5vw)`;
            }
        }
    },
    { passive: true }
);
