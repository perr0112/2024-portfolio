import './ProjectView.scss';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentProject } from "../../../utils/projects";
import Linemask from '../../Linemask';

const phrases = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Fugiat laborum a ducimus voluptatem dolores modi rerum nihil omnis recusandae corporis',
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

    useEffect(() => {
        console.log('current project', currentProject);
    }, [currentProject]);

    return (
        <>
            <div className="project-view">
                <img
                    className="banner"
                    data-text-cursor="scroll"
                    src={process.env.PUBLIC_URL + `/assets/pictures/works/${currentProject.banner}.png`}
                    alt={`${currentProject.name} banner`}
                />
            </div>

            <div className="project-content">
                
                <div className="content__description">
                    <Linemask phrases={phrases} className="project-font" />

                    {/* {tags && */}
                        <div className="project__tags">
                            {/* {currentProject.tags?.map((tag) => (
                                <p>{tag}</p>
                            ))} */}
                            <Linemask phrases={["Roles"]} className="project-roles" />
                            <Linemask phrases={tags || []} className="project-font-tags" />
                        </div>
                    {/* } */}
                </div>

            </div>
        </>
    )
};

export default ProjectView;
