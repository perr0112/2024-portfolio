import './Footer.scss';

import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import LinkTransition from '../Transition/LinkTransition';

import { links_portfolio, networks } from '../../data/footer';

import CurrentTime from '../commons/CurrentTime/CurrentTime';
import { WindowContext } from '../../contexts/Window';

const Footer = () => {
    const [backgroundFooter, setBackgroundFooter] = useState('white');
    const { pathname } = useLocation();
    const { width } = useContext(WindowContext);

    useEffect(() => {
        pathname === "/" ? setBackgroundFooter('white') : setBackgroundFooter('black');
    }, [pathname]);

    return (
        <div className="footer-container" data-background={backgroundFooter} data-target="false">
            <div className="footer__content">
                <div className="content__infos">
                    <div className="infos__networks">
                        {networks.map((network, i) => <a key={i} target="_blank" href={network.href}>{network.target}</a>)}
                    </div>
                    <div className="infos__portfolio">
                        {links_portfolio.map((link, i) =>
                            <div className="portfolio__link" key={i}>
                                <div className="link__circle" style={{ backgroundColor: link.color }} />
                                <LinkTransition href={link.href} title={link.target} callback={link.callback} />
                            </div>
                        )}
                    </div>
                    {/* {width > 1024 && */}
                        <div className="infos__location">
                            <span>Reims</span>
                            <p>
                                France, <CurrentTime />
                            </p>
                        </div>
                    {/* } */}
                </div>
                <div className="content__title">
                    <span>
                        CLEMENT
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Footer;
