import { useNavigate } from "react-router-dom";
import { transition } from "../../utils/transition";

const About = () => {

    const navigate = useNavigate();

    const handleTransition = () => {
        transition('/projects', 'is-transitioning', navigate, 'Projects');
    };

    return (
        <div data-text-cursor="About">
            <button onClick={handleTransition}>
                link
            </button>
            About
        </div>
    )
}

export default About;
