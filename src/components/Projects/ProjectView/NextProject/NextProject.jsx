import './NextProject.scss';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { projectView } from '../../../../utils/projectView';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const NextProject = ({
    current,
    next
}) => {
    const navigate = useNavigate();
    const nextProject = useRef(null);

    useEffect(() => {
        if (current && next) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: nextProject.current,
                    // start: "-25px top",
                    end: "bottom bottom",
                    scrub: true,
                    // markers: true,
                    onComplete: () => {
                        console.log('completed');
                        // if (nextProject.current.getBoundingClientRect().bottom <= window.innerHeight) {
                        //     console.log('ended');
                        //     projectView(nextProject.current, `/project/${next.id}`, navigate, true);
                        // }
                    }
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
                filter: 'blur(5px)'
            }, {
                scale: 1,
                filter: 'blur(0px)',
                onComplete: () => {
                    console.log('completed');
                }
            }, '<')
        }
    }, [current, next, navigate]);

    if (!current || !next) {
        return null;
    }

    return (
        <div className="next-project-container" ref={nextProject}>
            
            <div className="sticky-section">

                <div className="sticky__content">
                    <span className="light-info">(Scroll for next project)</span>

                    <div className="content__next">

                        <div className="cases">
                            <p>{current.name}</p>
                            <p>{next.name} - next case</p>
                        </div>

                        <div className="progress-bar">
                            <span>0{current.id}</span>

                            <div className="lines">
                                <div className="line scale"></div>
                                <div className="line mask"></div>
                            </div>
                            
                            <span>0{next.id}</span>
                        </div>

                    </div>

                    <img
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
