import { useNavigate } from "react-router-dom";
import { transition } from "../../utils/transition";

const Projects = () => {
    const navigate = useNavigate();

    const handleTransition = () => {
        transition('/about', 'is-transitioning', navigate, 'About');
    };

    return (
        <div>
            <button onClick={handleTransition}>
                link
            </button>
            projects
        </div>
    )
}

export default Projects;
