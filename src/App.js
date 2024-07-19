import './styles/App.scss'

import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Cursor from './components/Cursor/Cursor';

function App() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (document.body.classList.contains('transitioning')) {
      setIsTransitioning(true);
    } else {
      setIsTransitioning(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Cursor isTransitioning={isTransitioning} />
      <div className="transition" data-text-cursor="loading">
        <div className="linemask">
          <div className="title-transition"></div>
        </div>
      </div>
      <Header />
      <div className="main-content body-content" data-home={location.pathname === '/' ? 'true' : 'false'}>
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
