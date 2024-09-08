import './NextProject.scss';

import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectView } from '../../../../utils/projectView';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { WindowContext } from '../../../../contexts/Window';

gsap.registerPlugin(ScrollTrigger);

const NextProject = ({
    current,
    next
}) => {
    const { width } = useContext(WindowContext);

    const navigate = useNavigate();
    const nextProject = useRef();
    const imgNextProject = useRef();
    const lineScaleRef = useRef();

    const [nextId, setNextId] = useState(null);

    useEffect(() => {
        console.log(next.id)
        setNextId(next.id);
    }, [next]);

    useEffect(() => {
        if (!current || !next || !nextId) return;
            const bottom = window.innerHeight;
            if (current && next) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.next-project-container',
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                        // markers: true,
                    }
                });

                tl.fromTo(lineScaleRef.current, {
                    transform: 'scaleX(0)'
                }, {
                    transform: 'scaleX(1)',
                    // duration: 1.2,
                    // ease: "Expo.easeInOut",
                    onStart: () => {
                        console.log('started')
                    },
                    onCompleteParams: [],
                    onComplete: () => {
                        console.log('completed')
                        // if () {
                        // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                        // }
                        // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                        //     console.log('completed');
                        //     // projectView(nextProject.current, `/project/${nextId}`, navigate, true);
                        //     console.log('current: =============', nextProject.current);
                        //     projectView(nextProject.current, nextId, navigate, true);
                        // }
                        if ((nextProject.current) && (window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
                            console.log('completed');
                            projectView(nextProject.current, nextId, navigate, true);
                        } else {
                            console.log('/============ /============ problem to fix');
                            console.log('???????????????',
                                nextProject, nextProject.current,
                                window.innerHeight + window.scrollY >= document.body.offsetHeight,
                                window.innerHeight, window.scrollY, document.body.offsetHeight
                            );
                        }
                    }
                });

                /*tl.fromTo(imgNextProject, {
                    scale: 0.5,
                    // filter: 'blur(5px)'
                }, {
                    scale: 1,
                    // filter: 'blur(0px)',
                    onComplete: () => {
                        // if () {
                        // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                        // }
                        // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                        //     console.log('completed');
                        //     // projectView(nextProject.current, `/project/${nextId}`, navigate, true);
                        //     console.log('current: =============', nextProject.current);
                        //     projectView(nextProject.current, nextId, navigate, true);
                        // }
                        if ((nextProject.current) && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                            console.log('completed');
                            projectView(nextProject.current, nextId, navigate, true);
                        } else {
                            console.log('/============ /============ problem to fix');
                            // console.log('???????????????',
                            //     nextProject, nextProject.current,
                            //     window.innerHeight + window.scrollY >= document.body.offsetHeight,
                            //     window.innerHeight, window.scrollY, document.body.offsetHeight
                            // );
                        }
                    }
                }, '<')*/
        }
    })
    // }, [navigate, current, next, nextId]);

    if (!current || !next || !nextProject) {
        return null;
    }

    return (
        <div data-nextid={next.id} className="next-project-container">

            <div className="sticky-section" ref={nextProject}>

                <div className="sticky__content">
                    <span className="light-info" data-target="false">
                        {width > 1024 ? '(Scroll for next project)' : '(Click on the image to see the following project)'}
                    </span>

                    <div className="content__next">

                        <div className="cases" data-target="false">
                            <p>{current.name}</p>
                            <p>{next.name} - next case</p>
                        </div>

                        <div className="progress-bar" data-target="false">
                            <span>0{current.id}</span>

                            <div className="lines">
                                <div className="line scale" ref={lineScaleRef} />
                                <div className="line mask" />
                            </div>
                            
                            <span>0{next.id}</span>
                        </div>

                    </div>

                    <LazyLoadImage
                        ref={imgNextProject}
                        className="banner next-project"
                        data-text-cursor="Next project"
                        src={process.env.PUBLIC_URL + `/assets/pictures/works/${next.banner}.png`}
                        alt={`${next.name} banner`}
                    />
                </div>

            </div>

        </div>
    )
}

export default NextProject;
