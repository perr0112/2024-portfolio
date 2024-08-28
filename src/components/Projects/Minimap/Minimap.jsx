import './Minimap.scss';

import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';

const ItemPreview = ({ data }) => {
    console.log('data', data);
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

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', headerHeight);
    }, [headerHeight]);

    useEffect(() => {

        const detectScroll = () => {
            const container = containerRef.current;
            const preview = previewRef.current;
            const projects = projectsRef.current;

            if (container) {
                const containerTop = container.getBoundingClientRect().top + window.scrollY;
                setHeaderHeight(containerTop);
            }

            if (!container || !preview || !projects) return;

            let currentScroll = window.scrollY;
            let currentPosTop = container.getBoundingClientRect().top;
            let currentPosBottom = container.getBoundingClientRect().bottom;

            const heightMinimap = preview.offsetHeight;
            const heightProjects = projects.offsetHeight;

            // let totalLength = 24 * projects.children.length;
            let totalLength = 0;
            // console.log('============', projects.children.length);

            // let headerHeight = 550;
            // console.log(container.offsetTop);

            [...projects.children].forEach((element) => {
                totalLength += element.offsetHeight;
                // console.log('el', element, element.offsetHeight)
            });

            // console.log('============', totalLength);

            if (0 > currentPosTop && currentPosBottom >= window.innerHeight) {
                // let scrollValue = -1 * ((currentScroll - headerHeight) * totalLength / (heightProjects - (window.innerHeight * 0.5)));
                // let scrollValue = -1 * ((currentScroll - headerHeight - 450) * totalLength / (heightProjects - (window.innerHeight * 0.2)));
                let scrollValue = -1 *
                    (
                        (currentScroll - headerHeight - 450) * totalLength
                        /
                        (heightProjects - (window.innerHeight * 0.5 - (250 - 50 - 7.5))
                        // (heightProjects - window.innerHeight / 100 + (250 + 50 + 7.5)
                        // (heightProjects + window.innerHeight * 10 + (250 + 50 + 7.5)
                        // (heightProjects + window.innerHeight * 5
                    )
                );
                // preview.style.transform = `translateY(${scrollValue > 0 ? 0 : scrollValue > heightMinimap ? heightMinimap : scrollValue}px)`;
                preview.style.transform = `translateY(${scrollValue > 0 ? 0 : scrollValue}px)`;
            }
        };

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
                    <div className="minimap">
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
