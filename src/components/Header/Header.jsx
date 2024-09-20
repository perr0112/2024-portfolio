import { Link, useLocation } from 'react-router-dom';

import './Header.scss';

import LinkTransition from '../Transition/LinkTransition';

import { ANIMATION_PROJECTS } from '../../animations';
import { ANIMATION_CONTACT } from '../../animations/';
import { ANIMATION_ABOUT } from '../../animations/About';

const links = [
    { to: '/about', text: 'About', onComplete: ANIMATION_ABOUT },
    { to: '/projects', text: 'Projects', onComplete: ANIMATION_PROJECTS },
    { to: '/contact', text: 'Contact', onComplete: ANIMATION_CONTACT },
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
                                <LinkTransition className={"link-line header"} href={link.to} title={link.text} callback={link.onComplete} />
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
