import ListProjects from './List/ListProjects';
import { Linemask } from '../commons/';

import './Projects.scss';

const phrases = [
    "Discover this selection of work, i have done in my spare time, as a freelancer or during my studies.",
    "This list may not be up to date, but i will do my best not to forget any <i>(beautiful)</i> projects."
];

const Projects = () => {

    return (
        <div className="projects-container">
            <p>
                s'inspirer/refaire la transition projects - project
                <a href="https://www.accordion.net.au/work">ici</a>
            </p>

            <div className="container__top" data-target="false">
                <h1 className="title_page">
                    Projects
                </h1>
                <div className="paragraphs">
                    <Linemask className="basic-size" phrases={phrases} />
                </div>
            </div>

            <ListProjects />

        </div>
    )
}

export default Projects;
