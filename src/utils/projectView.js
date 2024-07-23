import gsap from "gsap";

let DURATION_TRANSITION = 1.2;
let scroll;

export function projectView(
    event,
    href = '/',
    navigate,
) {

    const tl = gsap.timeline({
        defaults: {
            ease: 'Expo.easeInOut',
            duration: DURATION_TRANSITION
        }
    })

    const currentProject = event.target.offsetParent;
    const imgCurrentProject = currentProject.querySelector('img');
    const imgRect = imgCurrentProject.getBoundingClientRect();

    currentProject.setAttribute('data-target', 'true'); 
    const dataTargets = document.querySelectorAll('[data-target="false"]');

    if (dataTargets) {
        dataTargets.forEach((data) => {
            gsap.to(data, {
                opacity: 0,
                pointerEvents: 'none',
                duration: DURATION_TRANSITION,
                ease: 'Expo.easeInOut',
            })
        })
    }

    tl.set(currentProject, {
        pointerEvents: 'none'
    })

    tl.set(imgCurrentProject, {
        scale: 1.2 / 1.8,
        borderRadius: '10px;',
        position: 'fixed',
        top: imgRect.top,
        left: imgRect.left,
        width: imgRect.width,
        height: imgRect.height,
        zIndex: 9,
        // onComplete: () => {
        //     window.scrollTo({ top: 0 })
        // }
    // }).set(imgCurrentProject, {
    //     // scale: 2,
    // }).
    }).to(imgCurrentProject, {
        scale: 1,
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '0px;',
        // duration: DURATION_TRANSITION + 0.5,
        duration: DURATION_TRANSITION + 1,
        ease: 'Expo.easeInOut',
        onComplete: () => {
            window.scrollTo({ top: 0 });
            console.log('ended');
            navigate(href);
        }
    }, '+=0.05');
}
