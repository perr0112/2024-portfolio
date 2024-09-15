import './NextProject.scss';

import gsap from 'gsap';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useBottomScroll from '../../../../hooks/useBottomScroll';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectView } from '../../../../utils/projectView';

import { WindowContext } from '../../../../contexts/Window';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const NextProject = ({
    current,
    next
}) => {
    const { width } = useContext(WindowContext);
    const isScrollBottom = useBottomScroll();

    const navigate = useNavigate();
    const nextProject = useRef();
    const imgNextProject = useRef();
    const lineScaleRef = useRef(null);

    const container = useRef(null);

    const [nextId, setNextId] = useState(null);

    useEffect(() => {
        console.log(next.id)
        setNextId(next.id);
    }, [next]);

    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);
    }, [nextId, current, next]);

    useGSAP(() => {
        if (!current || !next || !nextId) return;

        const bottom = window.innerHeight;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
                end: "bottom bottom",
                scrub: true,
                invalidateOnRefresh: true,
            }
        });

        tl.fromTo(lineScaleRef.current, {
            transform: 'scaleX(0)'
        }, {
            transform: 'scaleX(1)',
            onComplete: () => {
                console.log('completed');
                // projectView(nextProject.current, nextId, navigate, true);
                // if (isScrollBottom) {
                    console.log('completed');
                    projectView(nextProject.current, nextId, navigate, true);
                // } else {
                //     console.log('/============ /============ problem to fix');
                //     console.log('???????????????',
                //         nextProject, nextProject.current,
                //         window.innerHeight + window.scrollY >= document.body.offsetHeight,
                //         window.innerHeight, window.scrollY, document.body.offsetHeight
                //     );
                // }
            }
        });
    }, {
        dependencies:
        [nextId, nextProject],
        scope: nextProject
    });

    if (!current || !next || !nextProject) {
        return null;
    }

    const handleProjectView = () => {
        projectView(nextProject.current, nextId, navigate, true);
    };

    return (
        <div data-nextid={next.id} ref={container} className="next-project-container">

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

                    <img
                        ref={imgNextProject}
                        className="banner next-project"
                        data-text-cursor="Next project"
                        src={process.env.PUBLIC_URL + `/assets/pictures/works/${next.banner}.png`}
                        alt={`${next.name} banner`}
                        onClick={handleProjectView}
                    />
                </div>

            </div>

        </div>
    )
}

export default NextProject;
