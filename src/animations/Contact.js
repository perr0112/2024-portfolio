import gsap from "gsap";

export const ANIMATION_CONTACT = () => {
    const tl = gsap.timeline({
        defaults: {
            duration: 1.2,
            ease: "power2.inOut"
        }
    });

    const paths = document.querySelectorAll('svg path');

    tl.fromTo('p.title span', {
        rotate: "0deg"
    }, {
        rotate: "240deg",
        duration: 1.6
    })
    // }, '-=1')

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
