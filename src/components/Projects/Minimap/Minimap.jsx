import './Minimap.scss';

import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';

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
    return (
        <div className="item-showcase">
            <div className="showcase__img">
                <img
                    src={process.env.PUBLIC_URL + `/assets/pictures/works/${data.banner}.png`}
                    alt={`${data.name} banner`}
                />
            </div>
            <div className="showcase__infos">
                <p>{data.name}</p>
                <p>{data.date}</p>
            </div>
        </div>
    )
}

const Minimap = ({ projects }) => {
    const containerRef = useRef(null);
    const previewRef = useRef(null);
    const projectsRef = useRef(null);
    const minimapRef = useRef(null);

    const headerHeightRef = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        const onePreview = document.querySelectorAll('.item-showcase')[0];

        if (container && onePreview) {
            const parentTop = container.getBoundingClientRect().top + window.scrollY;
            const childTop = onePreview.getBoundingClientRect().top;
            let res = Math.abs(parentTop - childTop);
            headerHeightRef.current = res;
        }
    }, [projects]);

    const detectScroll = () => {
        const container = containerRef.current;
        const preview = previewRef.current;
        const projects = projectsRef.current;
        const minimap = minimapRef.current;

        const oneCard = document.querySelectorAll('.item-preview')[0];
        const onePreview = document.querySelectorAll('.item-showcase')[0];

        if (!container || !preview || !projects) return;

        let currentPosTop = container.getBoundingClientRect().top;
        let currentPosBottom = container.getBoundingClientRect().bottom;

        let minimapPosTop = preview.getBoundingClientRect().top;
        console.log('mt', minimapPosTop);

        // const heightMinimap = preview.offsetHeight - (2 * (window.innerHeight / 2 - 75)) - (oneCard.offsetHeight + 24 * 6);
        // const heightMinimap = preview.offsetHeight - (2 * (window.innerHeight / 2 - 75)) - (preview.offsetHeight / 6);
        const heightMinimap = minimap.offsetHeight;
        // const heightMinimap = oneCard.offsetHeight * 6;
        console.log('h', heightMinimap);
        // const heightMinimap = preview.offsetHeight - (2 * (window.innerHeight / 2 - 75) + 6 * 24);
        // const heightMinimap = preview.offsetHeight - (window.innerHeight / 2 - 150);

        const heightProjects = projects.offsetHeight - (window.innerHeight / 2 - 250);

        const widthMinimap = preview.offsetWidth;
        const widthProjects = projects.offsetWidth;
        
        let currentScroll = window.scrollY;

        // console.log('hs', heightMinimap, heightProjects, heightMinimap / heightProjects);
        // console.log('ws', widthMinimap, widthProjects, widthMinimap / widthProjects);

        if (0 > currentPosTop && currentPosBottom >= window.innerHeight) {
            // let ratio = heightMinimap / heightProjects;
            let ratio = heightMinimap / heightProjects;

            // console.log(headerHeightRef.current);

            // let res = -1 * ((currentScroll - headerHeightRef.current) * ratio);
            let res = -1 * ((currentScroll) * ratio);
            preview.style.transform = `translateY(${res}px)`;

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

            // let res = scrollValue > 0 ? 0 : scrollValue > heightMinimap ? heightMinimap : scrollValue;

            // let scrollValueR = -1 * ((currentScroll + headerHeight + totalLength) / heightProjects - (window.innerHeight / 2));
            // preview.style.transform = `translateY(${scrollValue > 0 ? 0 : scrollValue > heightMinimap ? heightMinimap : scrollValue}px)`;
            // preview.style.transform = `translateY(${scrollValue > 0 ? 0 : scrollValue}px)`;
            // let res = -1 * (headerHei);
            // console.log('h', headerHei);
            // console.log('=', res);

            // let ans = (-1 * (heightMinimap * res) / heightProjects - (onePreview.offsetHeight / 2) + oneCard.offsetHeight + 16);
            // let res = (-1 * (heightMinimap) / heightProjects - (onePreview.offsetHeight / 2));
        }
    };

    useEffect(() => {

        if (window.innerWidth >= 1024) {
            window.addEventListener("scroll", detectScroll);
            window.addEventListener("resize", detectScroll);

            return () => {
                window.removeEventListener("scroll", detectScroll);
                window.removeEventListener("resize", detectScroll);
            };
        }
    }, [projects]);

    return (
        <div className="minimap-container">
            <div className="sticky-top" ref={containerRef}>
                <div className="sticky-content">
                    <div className="minimap" ref={minimapRef}>
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
