const introVideoContainer = document.querySelector(".front-video");

let videoMuted = true;

const onVideoClick = () => {
    if (videoMuted) {
        introVideoContainer.muted = false;
        videoMuted = false;
    } else {
        introVideoContainer.muted = true;
        videoMuted = true;
    }
};

window.addEventListener(
    "scroll",
    () => {
        if (scrollY > 100) {
            introVideoContainer.muted = true;
            videoMuted = true;
        }
    },
    { passive: true }
);
