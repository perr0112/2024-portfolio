import { useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { transition } from "../../utils/transition";

const LinkTransition = ({ href, title, className, children, callback }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleTransition = useCallback((href, title) => {
        transition(href, 'is-transitioning', navigate, title, callback);
    }, []);

    return (
        <Link
            className={className}
            onClick={() => handleTransition(href, title)}
            data-active={pathname === href}
        >
            {!children ? title : children}
        </Link>
    )
};

export default LinkTransition;
