import { useCallback, useContext, useEffect, useRef } from 'react';
import LinkTransition from '../Transition/LinkTransition';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectView } from '../../utils/projectView';
import { useLocation, useNavigate } from 'react-router-dom';

import { ThemeContext } from '../../contexts/Theme';
import { ANIMATION_PROJECTS } from '../../animations';

gsap.registerPlugin(ScrollTrigger);

const HomePreview = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const refProgress = useRef(null);

    const { setTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (!refProgress || location.pathname !== '/') return;
        const el = document.querySelector('.main-content.body-content');
        ScrollTrigger.create({
            trigger: '.preview-container',
            // start: "-5% center",
            start: "top center",
            end: "100% top",
            toggleActions: 'play reverse play reset',
            duration: 1,
            ease: "Expo.easeInOut",
            onEnter: () => {
                // el.setAttribute('data-theme', 'black')
                setTheme('black');
            },
            onEnterBack: () => {
                // el.setAttribute('data-theme', 'black')
                setTheme('black');
            },
            onLeave: () => {
                // el.setAttribute('data-theme', 'basic')
                setTheme('basic');
            },
            onLeaveBack: () => {
                // el.setAttribute('data-theme', 'basic')
                setTheme('basic');
            },
        });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-preview__content',
                start: 'top -200px',
                end: 'bottom 10%',
                scrub: true,
                onUpdate: (self) => {
                    let progress = self.progress;
                    if (progress >= 0.5 && location.pathname === "/") {
                        refProgress.current.setAttribute('data-scroll-progress', '50%');
                        gsap.to('.animated__progress', {
                            transform: "translateY(-100%)",
                            stagger: 0.075,
                            duration: 1.2 / 1.75,
                            ease: "Ease.expoInOut"
                            // duration: 0.6,
                            // ease: "expo.inOut"
                        })
                    } else {
                        refProgress.current.setAttribute('data-scroll-progress', '0%');
                        gsap.to('.animated__progress', {
                            transform: "translateY(0%)",
                            stagger: 0.075,
                            duration: 1.2 / 1.75,
                            ease: "Ease.expoInOut"
                        })
                    }
                },
            }
        }, { scope: refProgress.current });
    
        tl.fromTo('.--2',{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            scale: 1
         }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1.1,
            ease: "none",
         }, 0)

         tl.fromTo('.--1', {
            scale: 1.1
         }, {
            scale: 1
         }, 0)
    }, []);

    const handleProjectView = (e) => {
        const id = e.target.getAttribute('data-id');
        projectView(e, id, navigate, false);
    };

    // const projectAnimation = useCallback(() => {
    //     gsap.fromTo('.line-projects', {
    //         width: '0%',
    //         duration: 1.2,
    //         ease: "elastic.out",
    //     }, {
    //         width: 'calc(100% - 2rem)',
    //         duration: 1.2,
    //         ease: "elastic.out",
    //     });
    // }, []);

    return (
        <div className="home-preview__content" ref={refProgress} data-scroll-progress="0">
            <div className="content__text" data-target="false">
                <p>
                    <span className="title">Preview</span>
                    Although some projects are fictitious, I put <span className="primary-keyword">everything</span> in order so that I can come up with something I'm proud of. My inspiration comes naturally,
                    from Awwwards-winning sites, Behance mock-ups and my own <span className="primary-keyword">imagination</span>.
                </p>
            </div>
            <div className="content__projects">
                <div className="top__projects" data-target="false">
                    <h1>Random projects</h1>
                    <LinkTransition className="link-right-line" href="/projects" title="Projects" callback={ANIMATION_PROJECTS}>
                        See all projects
                    </LinkTransition>
                </div>
                <div className="projects__selected">
                    <div className="projects__current" data-target="false">
                        <div className="current__infos">
                            <div className="infos__index">
                                <p data-after="02" className="animated__progress">
                                    01
                                </p>
                            </div>
                            <div className="infos__title">
                                <p data-after="Flexin" className="animated__progress">
                                    Freshzea
                                </p>
                            </div>
                        </div>
                        <div className="current__theme">
                            <p data-after="Agency website" className="animated__progress">
                                Pizzeria website
                            </p>
                        </div>
                    </div>
                    <div className="works__image">
                        {/* <div className="mask" data-text-cursor="View project" /> */}
                        <div className="project">
                            <div className="project__img">
                                <img
                                    // onClick={handleProjectView}
                                    className="--1"
                                    src={process.env.PUBLIC_URL + `/assets/pictures/works/freshzea.png`}
                                    alt="FreshZea's banner"
                                    data-id="6"
                                    data-text-cursor="Freshzea"
                                />
                            </div>
                            <div className="project__img">
                                <img
                                    // onClick={handleProjectView}
                                    className="--2"
                                    src={process.env.PUBLIC_URL + `/assets/pictures/works/flexin.png`}
                                    alt="Flexin's banner"
                                    data-id="2"
                                    data-text-cursor="Flexin"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePreview;
