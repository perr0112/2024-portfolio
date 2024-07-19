import { useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { transition } from "../../utils/transition";
import useMouse from "../../hooks/useMouse";

const LinkTransition = ({ href, title }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    // const { setMouseText } = useMouse();

    const handleTransition = useCallback((href, title) => {
        transition(href, 'is-transitioning', navigate, title);
        // setMouseText('');
    }, []);

    return (
        <Link
            onClick={() => handleTransition(href, title)}
            data-active={pathname === href}
            data-text-cursor={href === '/about' ? 'about' : 'link'}
        >
            {title}
        </Link>
    )
};

export default LinkTransition;
