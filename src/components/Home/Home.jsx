import { useNavigate } from 'react-router-dom';
import './Home.scss';

import Loader from "./Loader/Loader";
import { transition } from '../../utils/transition';

const Home = () => {
    const navigate = useNavigate();

    const handleTransition = () => {
        transition('/about', 'is-transitioning', navigate, 'About');
    };

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
