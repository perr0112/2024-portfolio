import './Home.scss';

import gsap from 'gsap';
import { Face } from '../commons';
import Loader from "./Loader/Loader";
import { useEffect } from 'react';

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
                        <h1>Bonjour, hello</h1>
                    </div>

                    <div className="container__infos">
                        <Face />

                        <div className="infos__main">
                            <p className="infos large">I’m a young creative developer,</p>
                            <p className="infos light">who likes to make beautiful things on the web,
                                <br />
                            for the web</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;
