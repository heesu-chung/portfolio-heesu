const bottomBlock = document.querySelector(".intro");
const progressBlock = document.querySelector(".progress-block");
const portfolioBlock = document.querySelector(".portfolio-0");
const progressBar = document.querySelector(".progress");

const progressRatio = 15 * 2 * Math.PI;
progressBar.style.strokeDasharray = progressRatio;

const firstScroll =
    portfolioBlock.getBoundingClientRect().top +
    scrollY -
    innerHeight / 2 +
    150;

portfolio.forEach((el, idx) => {
    let offsetData = el.getBoundingClientRect().top + scrollY;
    let heightData = offsetData + el.getBoundingClientRect().height;
    offset.push(offsetData);
    height.push(heightData);
    loc.push(el.getBoundingClientRect().top);
});

window.addEventListener(
    "load",
    () => {
        offset = [];
        height = [];
        loc = [];

        portfolio.forEach((el, idx) => {
            let offsetData = el.getBoundingClientRect().top + scrollY;
            let heightData = offsetData + el.getBoundingClientRect().height;
            loc.push(el.getBoundingClientRect().top);
            offset.push(offsetData);
            height.push(heightData);
        });
    },
    { passive: true }
);

window.addEventListener(
    "scroll",
    () => {
        let isInArea = false;

        portfolio.forEach((el, idx) => {
            if (scrollY >= offset[idx] && scrollY < height[idx]) {
                isInArea = true;
                progressBlock.style.opacity = "1";

                let scrollProgress =
                    ((scrollY - offset[idx]) / (height[idx] - offset[idx])) *
                    130;
                scrollProgress = scrollProgress >= 100 ? 100 : scrollProgress;
                setProgress(scrollProgress.toFixed(0));
            }
        });

        if (!isInArea) {
            setProgress(0);
        }

        if (scrollY > bottomBlock.getBoundingClientRect().top + scrollY) {
            progressBlock.style.opacity = "0";
        } else {
            progressBlock.style.opacity = "1";
        }
    },
    { passive: true }
);

const setProgress = (percent) => {
    progressBar.style.strokeDashoffset =
        progressRatio - (percent / 100) * progressRatio;
};

const onProgressClick = () => {
    portfolio.forEach((el, idx) => {
        if (scrollY >= offset[idx] && scrollY < height[idx] && idx !== 3) {
            window.scrollTo({
                top: offset[idx + 1] + 50,
                behavior: "smooth",
            });
        } else if (
            scrollY >= offset[idx] &&
            scrollY < height[idx] &&
            idx === 3
        ) {
            window.scrollTo({
                top: scrollY + bottomBlock.getBoundingClientRect().top + 50,
                behavior: "smooth",
            });
        }
    });
    if (scrollY < firstScroll) {
        window.scrollTo({
            top:
                portfolioBlock.getBoundingClientRect().top +
                scrollY -
                innerHeight / 2 +
                150,
            behavior: "smooth",
        });
    } else if (scrollY >= firstScroll && scrollY < offset[0]) {
        window.scrollTo({
            top: offset[0] + 50,
            behavior: "smooth",
        });
    }
};
