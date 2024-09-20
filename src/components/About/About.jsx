import './About.scss';

import { Linemask } from '../commons';

import Solidity from '../commons/Icons/Solidity';
import Ball from '../commons/Icons/Ball';

import experiences from '../../data/experiences';
import { useEffect } from 'react';
import { ANIMATION_ABOUT } from '../../animations/About';
import Star from '../commons/Icons/Star';

const phrases_desc = [
    "My name is Clement P.",
    "I like to bring rigour and solidity to a",
    "project as a whole."
];

const phrases_hobbies = [
    "Inquisitive student, fan of design and",
    "above all, a football fan."
]

const Experience = ({ data }) => {
    return (
        <div className="experience-group">
            <div className="group__main-infos">
                <div className="infos__title">
                    <p><a className="link-right-line" target="_blank" href={data.linkCompany}>{data.company}</a>, {data.location}</p>
                </div>
                <div className="infos__date">
                    <p>{data.begin + '—' + data.end}</p>
                </div>
            </div>
            <div className="group__description">
                <div className="description__exp">
                    {data.description.map((p, i) => <p className="exp-desc" key={i}>{p}</p>)}
                </div>
            </div>
            <div className="group__tags">
                {data.tags.map((tag, i) => <span key={i} className="exp-tag">{tag}</span>)}
            </div>
        </div>
    );
}

const About = () => {

    useEffect(() => {
        ANIMATION_ABOUT();
    }, []);

    return (
        <div className="about-container">
            <div className="container__infos">
                <div className="infos__title">
                    <Linemask phrases={["(About)"]} />
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

            <div className="container__shape">
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

            <div className="container__experiences">
                <Linemask phrases={["(Experiences)"]} className="experiences-title" />

                <div className="experiences__items">
                    {experiences.map((exp, i) => <Experience data={exp} index={i} />)}
                </div>
            </div>
        </div>
    )
}

export default About;
