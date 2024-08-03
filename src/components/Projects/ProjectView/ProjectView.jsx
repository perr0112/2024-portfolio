import './ProjectView.scss';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NextProject from './NextProject/NextProject';
import { AnimatedImg, ButtonLink, Linemask } from '../../commons';

import { getCurrentProject, getNextProject } from "../../../utils/projects";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const phrases = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum a ducimus.',
    'Fugiat laborum a ducimus voluptatem dolores modi rerum nihil omnis recusandae corporis.',
    'Nihil assumenda culpa itaque, dolor voluptas, impedit.',
];

const ProjectView = () => {
    const params = useParams();

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
                <LazyLoadImage
                    className="banner"
                    data-text-cursor="Scroll"
                    src={process.env.PUBLIC_URL + `/assets/pictures/works/${currentProject.banner}.png`}
                    alt={`${currentProject.name} banner`}
                />

                <div className="scroll-down-mobile">Scroll down</div>
            </div>

            <div className="project-content" data-target="false">
                
                <div className="title">
                    {currentProject.name}, {currentProject.date}
                </div>

                <div className="content__description">
                    <div className="project__desc">
                        <Linemask phrases={phrases} className="project-font" />
                    </div>

                    {tags &&
                        <div className="project__tags">
                            {/* {currentProject.tags?.map((tag) => (
                                <p>{tag}</p>
                            ))} */}
                            <Linemask phrases={["Roles"]} className="project-roles" />
                            <Linemask phrases={tags || []} className="project-font-tags" />

                            <ButtonLink
                                classNames="mbc-m"
                            >
                                View project
                            </ButtonLink>
                        </div>
                    }
                </div>

                <div className="content__images mbc-xl">
                    {Array(currentProject.images).fill().map((index, i) =>
                        // <p>img {i}</p>
                        <AnimatedImg
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
