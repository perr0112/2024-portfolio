import { useNavigate } from "react-router-dom";

import { projectView } from "../../../utils/projectView";

const PreviewProject = ({ data, children, stopAnimation }) => {
    const navigate = useNavigate();

    const handleProjectView = (e) => {
        stopAnimation();
        // const id = e.target.getAttribute('data-id');
        projectView(e, data.id, navigate, false);
    };

    return (
        <div className="content__project" onClick={handleProjectView} data-text-cursor="See project">
            <img
                src={process.env.PUBLIC_URL + `/assets/pictures/works/${data.banner}.png`}
            />
            {children}
        </div>
    )
}

export default PreviewProject;
