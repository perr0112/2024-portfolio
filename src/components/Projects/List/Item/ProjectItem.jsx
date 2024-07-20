import { useEffect } from "react";

const ProjectItem = ({ data }) => {
    useEffect(() => {
        console.log(data);
    });

    return (
        <div className="project-item" data-text-cursor={data.name}>
            <img src={process.env.PUBLIC_URL + `/assets/pictures/works/${data.banner}.png`} alt={`${data.name} banner`} />
        </div>
    )
}

export default ProjectItem;
