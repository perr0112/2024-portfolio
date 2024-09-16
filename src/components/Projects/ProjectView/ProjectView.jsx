import './ProjectView.scss';

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NextProject from './NextProject/NextProject';

import { WindowContext } from '../../../contexts/Window';

import { AnimatedImg, ButtonLink, Linemask } from '../../commons';
import { getCurrentProject, getNextProject } from "../../../utils/projects";

const ProjectView = () => {
    const params = useParams();

    const { width } = useContext(WindowContext);

    const [currentProject, setCurrentProject] = useState({});
    const [nextProject, setNextProject] = useState({});
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const project = getCurrentProject(params.id);
        setCurrentProject(project);
        setTags(project?.tags);
        const nextProject = getNextProject(project.id);
        setNextProject(nextProject);
    }, [params]);

    return (
        <>
            <div className="project-view" data-target="false">
                <img
                    className="banner"
                    data-text-cursor="Scroll down"
                    src={process.env.PUBLIC_URL + `/assets/pictures/works/${currentProject.banner}.png`}
                    alt={`${currentProject.name} banner`}
                />

                {width < 1024 && <div className="scroll-down-mobile">Scroll down</div>}
            </div>

            <div className="project-content" data-target="false">
                
                <div className="title">
                    {currentProject.name}, {currentProject.date}
                </div>

                <div className="content__description">
                    <div className="project__desc">
                        {/* <Linemask phrases={phrases} className="project-font" /> */}
                        <Linemask phrases={currentProject.description || ['']} className="project-font" />
                    </div>

                    {tags &&
                        <div className="project__tags">
                            {/* {currentProject.tags?.map((tag) => (
                                <p>{tag}</p>
                            ))} */}
                            <Linemask phrases={["Roles"]} className="project-roles" />
                            <Linemask phrases={tags || []} className="project-font-tags" />
                            
                            {currentProject.available &&
                                <ButtonLink
                                    classNames="mbc-m"
                                    href={currentProject.url}
                                >
                                    View project
                                </ButtonLink>
                            }
                        </div>
                    }
                </div>

                <div className="content__images">
                    {Array(currentProject.images).fill().map((index, i) =>
                        // <p>img {i}</p>
                        <AnimatedImg
                        // <img
                            key={index}
                            background={currentProject.color}
                        // <img
                            src={process.env.PUBLIC_URL + `/assets/pictures/workview/${currentProject.banner}/preview-${i + 1}.png`}
                            alt={`${i+1}'s preview`}
                        />
                    )}
                </div>

            </div>

            <NextProject
                current={currentProject}
                next={nextProject}
            />
        </>
    )
};

export default ProjectView;
