import { useEffect, useRef, useState } from 'react';
import LinkTransition from '../Transition/LinkTransition';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectView } from '../../utils/projectView';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const HomePreview = () => {
    const navigate = useNavigate();
    const [secondProject, setSecondProject] = useState(false);
    const refProgress = useRef(null);

    useEffect(() => {
        const el = document.querySelector('.main-content.body-content');
        ScrollTrigger.create({
            trigger: '.preview-container',
            start: "-5% center",
            end: "100% top",
            toggleActions: 'play reverse play reset',
            duration: 1,
            ease: "Expo.easeInOut",
            onEnter: () => {
                el.setAttribute('data-theme', 'black')
            },
            onEnterBack: () => {
                el.setAttribute('data-theme', 'black')
            },
            onLeave: () => {
                el.setAttribute('data-theme', 'basic')
            },
            onLeaveBack: () => {
                el.setAttribute('data-theme', 'basic')
            },
        });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-preview__content',
                start: 'top -200px',
                end: 'bottom 10%',
                // markers: true,
                scrub: true,
                onUpdate: (self) => {
                    let progress = self.progress;
                    refProgress.current.setAttribute('data-scroll-progress', progress);
                    // console.log("progress:", self.progress)
                    // if (progress >= 0.5) {
                    //     setSecondProject(true);
                    // } else {
                    //     setSecondProject(false);
                    // }
                },
            }
        })
    
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
    });

    const handleProjectView = (e) => {
        projectView(e, 5, navigate, false);
    };

    return (
        <div className="home-preview__content" ref={refProgress} data-scroll-progress="0">
            <div className="content__text">
                <p>
                    <span className="title">Preview</span>
                    Although some projects are fictitious, I put <span className="primary-keyword">everything</span> in order so that I can come up with something I'm proud of. My inspiration comes naturally,
                    from Awwwards-winning sites, Behance mock-ups and my own <span className="primary-keyword">imagination</span>.
                </p>
            </div>
            <div className="content__projects">
                <div className="top__projects">
                    <h1>Random projects</h1>
                    <LinkTransition className="link-right-line" href="/projects" title="Projects">
                        See all projects
                    </LinkTransition>
                </div>
                <div className="projects__selected">
                    <div className="projects__current">
                        <p data-after="Flexin">
                            FreshZea
                        </p>
                    </div>
                    <div className="works__image" onClick={handleProjectView}>
                        <div className="mask" data-text-cursor="See project" />
                        <div className="project">
                            <img
                                className="--1"
                                src={process.env.PUBLIC_URL + `/assets/pictures/works/freshzea.png`}
                                alt="FreshZea's banner"
                            />
                            <img
                                className="--2"
                                src={process.env.PUBLIC_URL + `/assets/pictures/works/flexin.png`}
                                alt="Flexin's banner"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePreview;
