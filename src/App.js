import './styles/App.scss'

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  const location = useLocation();

  

  return (
    <>
      <div className="cursor">
        <div className="cursor-icon"></div>
        <div className="cursor-text"></div>
      </div>
      <div className="transition">
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
