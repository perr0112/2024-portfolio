import './Home.scss';

import { useEffect } from 'react';
import gsap from 'gsap';

import Loader from "./Loader/Loader";

import { Face } from '../commons';
import Star from '../commons/Icons/Star';
import Arrow from '../commons/Icons/Arrow';

const Home = () => {

    const mouseMove = (e) => {
        const eyes = document.querySelectorAll('.pupille');

        console.log(e.clientX, e.clientY);
        console.log(window.innerWidth, window.innerHeight);

        // const mouseX = (e.clientX / window.innerWidth) * 50;
        // const mouseY = (e.clientY / window.innerHeight) * 50;

        const mouseX = (e.clientX - window.innerWidth + 200) / 15;
        const mouseY = (e.clientY - window.innerHeight) / 15;

        console.log('mouse', mouseX, mouseY);
        gsap.to(eyes, {
            transform: `translate(${mouseX}%, ${mouseY}%)`,
            duration: 1.2,
            ease: 'Expo.easeOut',
        });
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    });

    return (
        <div className="home">
            {/* <Loader /> */}
            <div className="home-container">
                <div className="home__content">

                    <div className="container__title">
                        <h1>Bonjour, hello.</h1>
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
                            <Star />

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
        </div>
    )
}

export default Home;
