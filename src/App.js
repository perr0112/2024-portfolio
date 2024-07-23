import './styles/App.scss'

import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Cursor from './components/Cursor/Cursor';
import Lenis from 'lenis';
import ProjectView from './components/Projects/ProjectView/ProjectView';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('basic');

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      // console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
      case '/contact':
        setTheme('basic');
        break;
      case '/projects':
        setTheme('green');
        break;
      case '/about':
        setTheme('blue');
        break;
      default:
        setTheme('basic');
    }
  }, [location.pathname]);

  return (
    <>
      <Cursor />
      <div className="transition" data-text-cursor="Loading">
        <div className="linemask">
          <div className="title-transition"></div>
        </div>
      </div>
      <Header />
      <div
        className="main-content body-content"
        data-home={location.pathname === '/' ? 'true' : 'false'}
        data-theme={theme}
      >
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
