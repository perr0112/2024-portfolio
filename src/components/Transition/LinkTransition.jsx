import { useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { transition } from "../../utils/transition";

const LinkTransition = ({ href, title, className }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleTransition = useCallback((href, title) => {
        transition(href, 'is-transitioning', navigate, title);
    }, []);

    return (
        <Link
            className={className}
            onClick={() => handleTransition(href, title)}
            data-active={pathname === href}
        >
            {title}
        </Link>
    )
};

export default LinkTransition;
