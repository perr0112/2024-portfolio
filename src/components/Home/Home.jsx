import { useNavigate } from 'react-router-dom';
import './Home.scss';

import Loader from "./Loader/Loader";
import { transition } from '../../utils/transition';
import { useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log('re-render');
    }, []);

    return (
        <>
            <Loader />
            <div className="home-container">
                
                <div className="container__title">
                    <h1>Bonjour, hello</h1>
                </div>

                <div className="container__infos">

                </div>

            </div>
        </>
    )
}

export default Home;
