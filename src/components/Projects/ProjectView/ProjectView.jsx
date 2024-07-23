import './ProjectView.scss';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentProject } from "../../../utils/projects";
import { AnimatedImg, ButtonLink, Linemask } from '../../commons';

const phrases = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum a ducimus.',
    'Fugiat laborum a ducimus voluptatem dolores modi rerum nihil omnis recusandae corporis.',
    'Nihil assumenda culpa itaque, dolor voluptas, impedit.',
];

const ProjectView = () => {
    const params = useParams();

    const [currentProject, setCurrentProject] = useState({});
    const [tags, setTags] = useState([]);

    useEffect(() => {
        console.log(params);
        const project = getCurrentProject(params.id);
        setCurrentProject(project);
        setTags(project.tags);
    }, [params]);

    return (
        <>
            <div className="project-view">
                <img
                    className="banner"
                    data-text-cursor="Scroll"
                    src={process.env.PUBLIC_URL + `/assets/pictures/works/${currentProject.banner}.png`}
                    alt={`${currentProject.name} banner`}
                />
            </div>

            <div className="project-content">
                
                <div className="title">
                    {currentProject.name}, {currentProject.date}
                </div>

                <div className="content__description">
                    <div className="project__desc">
                        <Linemask phrases={phrases} className="project-font" />
                    </div>

                    {/* {tags && */}
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
                    {/* } */}
                </div>

                <div className="content__images mbc-xl">
                    {Array(currentProject.images).fill().map((index, i) =>
                        // <p>img {i}</p>
                        <AnimatedImg
                            src={process.env.PUBLIC_URL + `/assets/pictures/workview/${currentProject.banner}/preview-${i + 1}.png`}
                            alt={i+1}
                        />
                    )}
                </div>

                {currentProject.images}

                <p>TODO::: next project on scroll</p>

            </div>
        </>
    )
};

export default ProjectView;
