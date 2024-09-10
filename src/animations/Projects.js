import gsap from "gsap";

export const ANIMATION_PROJECTS = () => {
    const tl = gsap.timeline({
        defaults: {
            duration: 1.2,
            ease: "Expo.easeInOut"
        }
    });

    tl.fromTo('.line-projects', {
        width: '0%',
    }, {
        width: 'calc(100% - 2rem)',
    });

    tl.fromTo('.type', {
        y: '20px',
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
    }, '<')

    tl.fromTo('.showcase__img img', {
        scale: 1.3,
        opacity: 0,
    }, {
        scale: 1,
        opacity: 1,
        duration: 2.6
    }, '<')

    tl.fromTo('.item-preview img', {
        scale: 1.3,
        opacity: 0,
    }, {
        scale: 1,
        opacity: 1,
        duration: 2.6
    }, '<')

    tl.fromTo('.current-indicator', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2.6
    }, '<')
};
