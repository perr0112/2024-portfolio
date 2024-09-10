import { LazyLoadImage } from "react-lazy-load-image-component";
import { projectView } from "../../../../utils/projectView";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";

const ProjectItem = ({ data }) => {
    const navigate = useNavigate();

    const handleProjectView = (e) => {
        projectView(e, data.id, navigate, false);
    };

    /* TODO : ne pas prendre toute la taille de l'écran, mais comme ici :
                   https://lefruitstudio.fr/works/artcurial-campaign-2023
    */

    return (
        <div
            className="project-item"
            // data-text-cursor={data.name}
            onClick={handleProjectView}
            data-target="false"
        >
            <div
                className="mask-item"
                data-text-cursor={data.name}
            />
            <LazyLoadImage
                src={process.env.PUBLIC_URL + `/assets/pictures/works/${data.banner}.png`}
                alt={`${data.name} banner`}
            />

            {/* <div className="item__tags">
                {data.tags.map((tag, index) =>
                    <span key={index} className="item__tags-tag">{tag}</span>
                )}
            </div> */}

            <div data-target="false" className="item__infos">
                <p data-after="See project">{data.date}</p>
            </div>
        </div>
    )
}

export default ProjectItem;
