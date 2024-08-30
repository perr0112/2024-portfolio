import './About.scss';

import { Linemask } from '../commons';
import Star from '../commons/Icons/Star';

import experiences from '../../data/experiences';

const phrases = [
    "My name is Clement P., and I'm a young up-and-coming creative developer.",
    "I'm an inquisitive student, a fan of design and, above all, a football fan. I like to bring rigour and solidity to a project as a whole.",
    "I like to combine creativity, ingenuity and aesthetics in each of my projects, which you can find on this portfolio."
];

const Experience = ({ data }) => {
    return (
        <li className="experience">
            <div className="experience-group">
                <div className="group__main-infos">
                    <div className="infos__top">
                        <p>{data.location}, <a target="_blank" href={data.linkCompany}>{data.company}</a></p>
                    </div>
                    <div className="infos__bottom">
                        <p>{data.begin}</p>
                        <div className="line-date" />
                        <p>{data.end}</p>
                    </div>
                </div>
                <div className="group__description">
                    <div className="description__exp">
                        {data.description.map((p, i) => <p className="exp-desc" key={i}>{p}</p>)}
                    </div>
                    <div className="tags__exp">
                        {data.tags.map((tag, i) => <span key={i} className="exp-tag">{tag}</span>)}
                    </div>
                </div>
            </div>
        </li>
    );
}

const About = () => {

    return (
        <div className="about-container">
            
            <div className="about__description">
                {/* <div className="about-mask" data-text-cursor="Scroll for more" /> */}
                <div className="description__icon">
                    <Star />
                </div>
                <div className="description__text">
                    <Linemask phrases={phrases} />
                </div>
            </div>

            <div className="about__experiences">
                <h1>Experiences</h1>

                <div className="experiences__list">
                    <ul>
                        {experiences.map((experience, i) => <Experience key={i} data={experience} />)}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default About;
