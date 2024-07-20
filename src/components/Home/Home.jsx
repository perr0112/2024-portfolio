import './Home.scss';

import Loader from "./Loader/Loader";

const Home = () => {

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
