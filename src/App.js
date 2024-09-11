import './styles/App.scss'

import { useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Lenis from 'lenis';

import { ThemeContext } from './contexts/Theme';
import { WindowContext } from './contexts/Window';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Cursor from './components/Cursor/Cursor';
import ProjectView from './components/Projects/ProjectView/ProjectView';
import Footer from './components/Footer/Footer';


function App() {
  const { width } = useContext(WindowContext);

  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);

  const [inProjectView, setInProjectView] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

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
    const path = location.pathname.split('/')[1];
  
    switch (path) {
      case 'contact':
        setTheme('basic');
        setInProjectView(false);
        break;
      case 'projects':
        setTheme('green');
        setInProjectView(false);
        break;
      case 'about':
        setTheme('blue');
        setInProjectView(false);
        break;
      case 'project':
        setTheme('basic');
        setInProjectView(true);
        break;
      default:
        setTheme('basic');
        setInProjectView(false);
        break;
    }
  }, [location.pathname]);  

  return (
    <>
      {/* <p style={{position: "fixed"}}>BUG DES CARDS A RESOUDRE lorsque l'animation est lancée et le type de présentation est cards</p> */}
      {width > 1024 && <Cursor />}
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
      {!inProjectView && <Footer />}
    </>
  );
}

export default App;
