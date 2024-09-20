import gsap from "gsap";

export const ANIMATION_ABOUT = () => {
    const tl = gsap.timeline({
        defaults: {
            duration: 1.2,
            ease: "power2.inOut",
        }
    });

    const paths = document.querySelectorAll('svg > path');
    // const rects = document.querySelectorAll('svg > rect');

    paths.forEach(path => {
        const length = path.getTotalLength();
        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            opacity: 0,
        });

        tl.to(path, {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 1.6
        }, 0.25);
    });
};
