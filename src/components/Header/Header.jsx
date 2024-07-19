import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useCallback, useEffect } from 'react';
import { transition } from '../../utils/transition';

const links = [
    { to: '/about', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/contact', text: 'Contact' },
]

const Header = ({
    mainColor,
}) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        console.log(pathname)
    }, [pathname])

    const handleTransition = useCallback((href, title) => {
        transition(href, 'is-transitioning', navigate, title);
    }, []);

    return (
        <header>
            <div className="logo" data-visible={pathname === '/' ? 'false' : 'true'}>
                <Link
                    to="/"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="logo-container">
                        <div className="linemask">
                            <p className="title">Clement,</p>
                        </div>
                        <div className="linemask">
                            <p className="subtitle">creative developer</p>
                        </div>
                    </div>
                </Link>
            </div>

            <nav className="header" data-visible={pathname === '/' ? 'false' : 'true'}>
                <ul className="list-nav">
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    onClick={() => handleTransition(link.to, link.text)}
                                    data-active={pathname === link.to}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
