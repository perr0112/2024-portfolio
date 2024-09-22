import './About.scss';

import { Linemask } from '../commons';

import Solidity from '../commons/Icons/Solidity';
import Ball from '../commons/Icons/Ball';

import experiences from '../../data/experiences';
import { useEffect, useRef, useState } from 'react';
import { ANIMATION_ABOUT } from '../../animations/About';
import Star from '../commons/Icons/Star';
import PreviewProject from './PreviewProject/PreviewProject';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const phrases_desc = [
    "My name is Clement P.",
    "I like to bring rigour and solidity to a",
    "project as a whole."
];

const phrases_hobbies = [
    "Inquisitive student, fan of design and",
    "above all, a football fan."
];

const selected_projects = [
    {
        id: 6,
        name: "FreshZea",
        banner: "freshzea",
    },
    {
        id: 5,
        name: "Qualitum",
        banner: "qualitum",
    },
    {
        id: 2,
        name: "Flexin",
        banner: "flexin",
    }
];

const About = () => {

    const container = useRef();
    const [currentIndicator, setCurrentIndicator] = useState(0);

    const tl = useRef();

    const stopAnimation = () => {
        if (tl.current) {
            tl.current.pause();
        }
    };

    useEffect(() => {
        ANIMATION_ABOUT();
    }, []);

    useGSAP(() => {
        tl.current = gsap.timeline({
            repeat: -1,
            onRepeat: function() {
                // if (isAnimating) {
                    gsap.utils.toArray('.indicator').forEach(el => {
                        el.setAttribute('data-progress', 0);
                        gsap.set(el, { '--progress-scale': 0 });
                    });
                // }
            }
        });

        const indicators = gsap.utils.toArray('.indicator');
        indicators.forEach((el, index) => {
            tl.current.to(el, {
                duration: 5,
                // duration: 1,
                onUpdate: function() {
                    const progressValue = Math.min(this.progress() * 100, 100);
                    // if (isAnimating) {
                        el.setAttribute('data-progress', Math.round(progressValue));
                        el.style.setProperty('--progress-scale', progressValue / 100);
                        let previous = indicators[index - 1];
    
                        if ((!previous || previous.getAttribute('data-progress') === '100') && progressValue > 0 && progressValue < 100) {
                            setCurrentIndicator(index);
                        }
                    // }
                },
                ease: "power2.out",
            });
        });
    }, { scope: container });

    useEffect(() => {
        if (currentIndicator) {
            console.log("L'élément actuel est:", currentIndicator);
        }
    }, [currentIndicator]);

    return (
        <div className="about-container" ref={container}>
            <div data-target="false" className="container__infos">
                <div className="infos__title">
                    <Linemask phrases={["(About)"]} className="title-page" />
                </div>
                <div className="infos__desc">
                    <div className="desc">
                        <Linemask phrases={phrases_desc} />
                        <Solidity />
                    </div>
                    <div className="hobbies">
                        <Linemask phrases={phrases_hobbies} />
                        <Ball />
                    </div>
                </div>
            </div>

            <div data-target="false" className="container__shape">
                <div className="shapes__group">
                    <Star />
                    <div className="circle c--1">
                        Creativity
                    </div>
                    <div className="circle c--2">
                        Design
                    </div>
                    <div className="circle c--3">
                        Development
                    </div>
                </div>
            </div>

            <div className="container__projects">
                <Linemask phrases={["(Random projects)"]} data-target="false" className="title-page" />

                <div className="projects__preview">

                    <div data-target="false" className="preview__lines-indicator">
                        {Array(selected_projects.length).fill().map((_, index) =>
                            <div key={index} className="indicator" data-progress="0"></div>
                        )}
                    </div>

                    <div className="preview__content">
                        {/* {selected_projects.map((data, i) =>
                            <PreviewProject data={data} key={i} />
                        )} */}
                        <PreviewProject
                            data={selected_projects[currentIndicator]}
                            stopAnimation={stopAnimation}
                        >
                            <div data-target="false" className="content__tags">

                            </div>
                        </PreviewProject>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
