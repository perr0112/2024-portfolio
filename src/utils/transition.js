import gsap from "gsap";

let DURATION_TRANSITION = 1.2;

export function transition(
    href = '/',
    bodyClass = 'is-transitioning',
    navigate,
    title
) {

    const tl = gsap.timeline({
        defaults: {
            ease: 'Expo.easeInOut',
            duration: DURATION_TRANSITION
        }
    })

    const body = document.body
    const transition = body.querySelector('.transition')

    if (!transition) return;

    const titleTransition = transition.querySelector('.title-transition')

    if (!titleTransition) return;

    titleTransition.innerHTML = title

    tl.to(transition, {
        y: 0,
        onStart: () => body.classList.add('transitioning'),
        onComplete: () => navigate(href)
    })

    tl.to(titleTransition, {
        y: 0,
    }, `-=0.5`)

    tl.to(titleTransition, {
        y: '-100%',
        onStart: () => window.scrollTo({ top: 0 })
    }, `+=${DURATION_TRANSITION}`)

    tl.to(transition, {
        y: '-100dvh',
        onComplete: () => {
            body.classList.remove('transitioning');
        }
    }, '-=1')

    tl.set(transition, {
        y: '105dvh'
    }, '>')

    tl.set(titleTransition, {
        y: '100%'
    }, '<')
}
