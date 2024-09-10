import './Loader.scss'

import gsap from 'gsap';

import bymax from './assets/pictures/pre_loader/bymax.png';
import flexin from './assets/pictures/pre_loader/flexin.png';
import freshzea from './assets/pictures/pre_loader/fresh-zea.png';
import { useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/Theme';

const Loader = () => {

    const { pathname } = useLocation();
    const { setTheme } = useContext(ThemeContext);

    useGSAP(() => {
        if (pathname !== '/') { return; }
        const durationDefault = 1.2;
        const tl = gsap.timeline();

        if (pathname === '/') {
            tl.set('nav.header', {
                pointerEvents: 'none'
            })
        }

        tl.to('.identity-container .linemask p', {
            transform: 'translateY(0%)',
            ease: 'Expo.easeInOut',
            duration: durationDefault + .5,
            stagger: .15,
            onStart: () => {
                setTheme('basic-noscroll');
            }
        })

        tl.to('.img', {
            scale: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'Expo.easeInOut',
            duration: 3,
            stagger: 1.25,
        }, '-=1')

        tl.to('.identity-container .linemask p', {
            transform: 'translateY(-100%)',
            ease: 'Expo.easeInOut',
            duration: durationDefault,
            stagger: .1
        }, '+=0.5')

        tl.to('.img', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ease: 'Expo.easeInOut',
            duration: durationDefault + 0.5,
        }, '<')

        tl.set('.loader', {
            display: 'none'
        }, '>')

        tl.set('.home-container', {
            display: 'block'
        }, '<')

        // tl.fromTo('.logo p', {
        //     opacity: 0,
        //     transform: 'translateY(25%)',
        // }, {
        //     duration: durationDefault,
        //     ease: 'Expo.easeInOut',
        //     opacity: 1,
        //     stagger: .2,
        //     transform: 'translateY(0)',
        // }, `+=${durationDefault}`)

        tl.to('.logo p', {
            duration: durationDefault,
            ease: 'Expo.easeInOut',
            opacity: 1,
            stagger: .2,
            transform: 'translateY(0%)'
        }, `+=${durationDefault}`)

        tl.to('nav.header', {
            transform: 'translateY(0px)',
            duration: durationDefault,
            // duration: durationDefault - 0.5,
            opacity: 1,
            ease: 'Expo.easeInOut',
        }, '>')

        tl.set('nav.header', {
            pointerEvents: 'auto'
        })

        tl.fromTo('.home-container', {
            opacity: 0,
            pointerEvents: 'none'
        }, {
            opacity: 1,
            duration: durationDefault,
            ease: 'Expo.easeInOut',
            onComplete: () => {
                setTheme('basic');
            }
        })
        // }, `-=${durationDefault - (0.5 + 0.15)}`)
    });

    return (
        <div>

            <div className="loader">
                
                <div className="identity-container">
                    <div className="identity">
                        <div className="linemask">
                            <p>Clement,</p>
                        </div>
                        <div className="linemask">
                            <p>creative developer</p>
                        </div>
                    </div>
                </div>

                <div className="preview-works">

                    <div className="wrapper">
                        
                        <div className="cover">
                            <img className="img img-1" src={flexin} alt="cover" />

                            <img className="img img-2" src={freshzea} alt="cover" />

                            <img className="img img-3" src={bymax} alt="cover" />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Loader;
