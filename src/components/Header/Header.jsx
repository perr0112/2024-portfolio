import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useCallback, useEffect } from 'react';
import { transition } from '../../utils/transition';
import LinkTransition from '../Transition/LinkTransition';

const links = [
    { to: '/about', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/contact', text: 'Contact' },
]

const Header = ({
    mainColor,
}) => {

    const { pathname } = useLocation();

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
                                <LinkTransition href={link.to} title={link.text} />
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
