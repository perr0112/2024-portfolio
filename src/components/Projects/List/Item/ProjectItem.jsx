import { useEffect } from "react";

const ProjectItem = ({ data }) => {
    useEffect(() => {
        console.log(data);
    });

    return (
        <div
            className="project-item"
            data-text-cursor={data.name}
            onClick={() => {}}
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
