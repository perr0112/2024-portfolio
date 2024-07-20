import ListProjects from './List/ListProjects';
import './Projects.scss';

const Projects = () => {

    return (
        <div className="projects-container">

            <div className="container__top">
                <h1 className="title_page">
                    Projects
                </h1>
                <div className="paragraphs">
                    <p className="basic-size">
                        Discover this selection of work i have done in my spare time, as a freelancer or during my studies.
                    </p>
                    <p className="basic-size">This list may not be up to date, but i will do my best not to forget any <i>(beautiful)</i> projects.</p>
                </div>
            </div>

            <ListProjects />

        </div>
    )
}

export default Projects;
