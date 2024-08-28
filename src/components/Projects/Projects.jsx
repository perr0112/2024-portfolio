import ListProjects from './List/ListProjects';
import { Linemask } from '../commons/';

import './Projects.scss';
import { LENGTHPROJECTS } from '../../data/projects';

const phrases = [
    "Discover this selection of work, i have done in my spare time, as a freelancer or during my studies.",
    "This list may not be up to date, but i will do my best not to forget any <i>(beautiful)</i> projects."
];

const Projects = () => {

    return (
        <div className="projects-container">

            <div className="container__top" data-target="false">
                <h1 className="title_page">
                    Selected Works
                    <span className="length-projects">({LENGTHPROJECTS})</span>
                </h1>
                <div className="paragraphs">
                    <Linemask className="basic-size" phrases={phrases} />
                </div>

                <div className="line container__bottom" />
            </div>

            <ListProjects />
        </div>
    )
}

export default Projects;
