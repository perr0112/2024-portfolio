import './Minimap.scss';

import { useEffect, useRef } from "react";

import { projectView } from "../../../utils/projectView";
import { useNavigate } from "react-router-dom";
import { useGSAP } from '@gsap/react';

const ItemPreview = ({ data }) => {
    return (
        <div className="item-preview">
            <img
                src={process.env.PUBLIC_URL + `/assets/pictures/works/${data.banner}.png`}
                alt={`${data.name} banner`}
            />
        </div>
    )
}

const ItemShowcase = ({ data }) => {
    const navigate = useNavigate();

    const handleProjectView = (e) => {
        projectView(e, data.id, navigate, false);
    };

    return (
        <div className="item-showcase" data-target="false">
            <div className="mask-showcase" onClick={handleProjectView} data-text-cursor={data.name} />
            <div className="showcase__img">
                <img
                    src={process.env.PUBLIC_URL + `/assets/pictures/works/${data.banner}.png`}
                    alt={`${data.name} banner`}
                />
            </div>
            <div className="showcase__infos" data-target="false">
                <p data-after="See project">{data.name}</p>
                <p data-after={data.date}>{data.date}</p>
            </div>
        </div>
    )
}

const Minimap = ({ projects }) => {
    const containerRef = useRef(null);
    const previewRef = useRef(null);
    const projectsRef = useRef(null);
    const minimapRef = useRef(null);

    // const headerHeightRef = useRef(0);

    // useEffect(() => {
    //     const container = containerRef.current;
    //     const onePreview = document.querySelectorAll('.item-showcase')[0];

    //     if (container && onePreview) {
    //         const parentTop = container.getBoundingClientRect().top + window.scrollY;
    //         const childTop = onePreview.getBoundingClientRect().top;
    //         let res = Math.abs(parentTop - childTop);
    //         headerHeightRef.current = res;
    //     }
    // }, [projects]);

    const detectScroll = () => {
        const container = containerRef.current;
        const preview = previewRef.current;
        const projects = projectsRef.current;

        const oneCard = document.querySelectorAll('.item-preview')[0];
        const onePreview = document.querySelectorAll('.item-showcase')[0];

        if (!container || !preview || !projects) return;

        let currentPosTop = container.getBoundingClientRect().top;
        let currentPosBottom = container.getBoundingClientRect().bottom;

        const heightMinimap = oneCard.offsetHeight * 6 + (5 * 16);
        const heightProjects = onePreview.offsetHeight * 6 + (5 * 16 * 4);
        const heightMinimapToCompare = oneCard.offsetHeight * 5 + (5 * 16);

        let currentScroll = window.scrollY;

        if (0 > currentPosTop && currentPosBottom >= window.innerHeight) {
            let ratio = heightMinimap / heightProjects;
            let res = -1 * ((currentScroll) * ratio);

            preview.style.transform = `translateY(${
                res + 113 > 0
                    ? 0
                : res + 113 < -heightMinimapToCompare ? -heightMinimapToCompare : res + 113
            }px)`;
            document.documentElement.style.setProperty('--degree-rotate', res / 5);

            /*

            tl.fromTo(mimeGroup.find('.mime-scroll-cards'), {
                y: (mimeScrollWrapperHeight / 2) - (mimeScrollCardSingleHeight / 2),  
            }, {
                y: ((mimeScrollCardsHeight - (mimeScrollWrapperHeight / 2) - (mimeScrollCardSingleHeight / 2)) * -1),
                ease: "none"
            });

            mimeScrollCardsHeight = miniMap
            mimeScrollWrapperHeight = hauteur de 2 cards + gap
            mimeScrollCardSingleHeight = current indicator

            */
        } else {
            document.documentElement.style.setProperty('--degree-rotate', 0);
        }
    };

    useGSAP(() => {
        if (window.innerWidth >= 1024) {
            window.addEventListener("scroll", detectScroll);
            window.addEventListener("resize", detectScroll);

            return () => {
                window.removeEventListener("scroll", detectScroll);
                window.removeEventListener("resize", detectScroll);
            };
        }
    }, [containerRef]);

    return (
        <div className="minimap-container">
            <div className="sticky-top" ref={containerRef}>
                <div className="sticky-content">
                    <div className="minimap" data-target="false" ref={minimapRef}>
                        <div className="preview" ref={previewRef}>
                            {projects.map((project, i) => (
                                <ItemPreview key={i} data={project} />
                            ))}
                        </div>
                        <div className="current-indicator"></div>
                    </div>
                    <div className="projects__showcase" ref={projectsRef}>
                        {projects.map((project, i) => (
                            <ItemShowcase key={i} data={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Minimap;
