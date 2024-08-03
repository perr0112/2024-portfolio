import './NextProject.scss';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from 'react';
import { projectView } from '../../../../utils/projectView';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

gsap.registerPlugin(ScrollTrigger);

const NextProject = ({
    current,
    next
}) => {
    const navigate = useNavigate();
    const nextProject = useRef(null);

    const [nextId, setNextId] = useState(null);

    useEffect(() => {
        console.log(next.id)
        setNextId(next.id);
    })

    useEffect(() => {
        const bottom = window.innerHeight;
        console.log(bottom);
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

            tl.fromTo('.line.scale', {
                transform: 'scaleX(0)'
            }, {
                transform: 'scaleX(1)',
                // duration: 1.2,
                // ease: "Expo.easeInOut"
            });

            tl.fromTo('img.next-project', {
                scale: 0.5,
                // filter: 'blur(5px)'
            }, {
                scale: 1,
                // filter: 'blur(0px)',
                onComplete: () => {
                    // if () {
                    // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    // }
                    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                        console.log('completed');
                        // projectView(nextProject.current, `/project/${nextId}`, navigate, true);
                        projectView(nextProject.current, nextId, navigate, true);
                    }
                }
            }, '<')
        }
    }, [navigate, current, next, nextId]);

    if (!current || !next) {
        return null;
    }

    return (
        <div data-nextid={next.id} className="next-project-container" ref={nextProject}>

            <div className="sticky-section">

                <div className="sticky__content">
                    <span className="light-info" data-target="false">(Scroll for next project)</span>

                    <div className="content__next">

                        <div className="cases" data-target="false">
                            <p>{current.name}</p>
                            <p>{next.name} - next case</p>
                        </div>

                        <div className="progress-bar" data-target="false">
                            <span>0{current.id}</span>

                            <div className="lines">
                                <div className="line scale"></div>
                                <div className="line mask"></div>
                            </div>
                            
                            <span>0{next.id}</span>
                        </div>

                    </div>

                    <LazyLoadImage
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
