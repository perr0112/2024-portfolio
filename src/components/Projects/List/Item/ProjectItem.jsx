import { projectView } from "../../../../utils/projectView";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ data }) => {
    const navigate = useNavigate();

    const handleProjectView = (e) => {
        projectView(e, `/project/${data.id + 1}`, navigate);
    };

    return (
        <div
            className="project-item"
            data-text-cursor={data.name}
            onClick={handleProjectView}
            data-target="false"
        >
            <img src={process.env.PUBLIC_URL + `/assets/pictures/works/${data.banner}.png`} alt={`${data.name} banner`} />

            {/* <div className="item__tags">
                {data.tags.map((tag, index) =>
                    <span key={index} className="item__tags-tag">{tag}</span>
                )}
            </div> */}
        </div>
    )
}

export default ProjectItem;
