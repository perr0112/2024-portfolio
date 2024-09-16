import './Home.scss';

import { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

import { WindowContext } from '../../contexts/Window/index';

import Loader from "./Loader/Loader";

import { Face } from '../commons';
import Star from '../commons/Icons/Star';
import Arrow from '../commons/Icons/Arrow';
import HomePreview from './HomePreview';

const Home = () => {

    const homeContentRef = useRef(null);
    const { width } = useContext(WindowContext);

    const mouseMove = (e) => {
        const homeContentRect = homeContentRef.current.getBoundingClientRect();
        
        if (homeContentRect.bottom >= window.innerHeight / 2) {
            const eyes = document.querySelectorAll('.pupille-wrapper');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
        
            eyes.forEach((eye) => {
                const eyeRect = eye.getBoundingClientRect();
                const eyeX = eyeRect.left + eyeRect.width / 2;
                const eyeY = eyeRect.top + eyeRect.height / 2;
        
                const deltaX = mouseX - eyeX;
                const deltaY = mouseY - eyeY;
        
                const translateX = deltaX / 50 > 30 ? 30 : deltaX / 50;
                const translateY = deltaY / 50 > 30 ? 30 : deltaY / 50;
        
                gsap.to(eye, {
                    x: translateX,
                    y: translateY,
                    duration: 1.2,
                    ease: 'Expo.easeOut',
                });
            });
        }

    };    

    useEffect(() => {
        if (width > 1024) {
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('resize', mouseMove);
    
            return () => {
                window.removeEventListener('mousemove', mouseMove);
            }
        }
    });

    return (
        <div className="home">
            <Loader />
            <div className="home-container">
                <div className="home__content" ref={homeContentRef}>

                    <div className="container__title">
                        <h1>Bonjour, hell
                                <motion.span
                                    className="perspective-letter"
                                    animate={{
                                        transform: [
                                            'translate3d(0, 0, 0) rotateY(540deg)',
                                            'translate3d(0, 0, 0) rotateY(0deg)',
                                        ]
                                    }}
                                    transition={{
                                        duration: 2.4,
                                        ease: 'easeOut',
                                        repeat: Infinity,
                                        repeatDelay: 1.8,
                                    }}
                                >
                                    o
                                </motion.span>
                            .</h1>
                    </div>

                    <div className="container__infos">
                        <Face />

                        <div className="infos__main">
                            <p className="infos large">I’m a young <span className="primary-keyword">creative developer</span>,</p>
                            <p className="infos light">who likes to make beautiful things on the web,
                                <br />
                            for the web.</p>
                        </div>
                    </div>

                    <div className="bottom__container">
                        <div className="bottom__infos">
                            <motion.div
                                animate={{
                                    transform: [
                                        'rotate(0deg)',
                                        'rotate(360deg)',
                                    ]
                                }}
                                transition={{
                                    duration: 2.4,
                                    ease: 'anticipate',
                                    repeat: Infinity,
                                    repeatDelay: 1.2,
                                }}
                            >
                                <Star />
                            </motion.div>

                            <div className="bottom__text">
                                <p>Since 2022</p>
                                <p>and for a while</p>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-left__container">
                        <div className="bottom-left__text">
                            <p>Scroll to</p>
                            <p>discover</p>
                        </div>
                        <Arrow />
                    </div>

                </div>
            </div>

            <div className="preview-container">
                <HomePreview />
            </div>
        </div>
    )
}

export default Home;
