import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Cursor } from './components/Cursor';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import Home from './pages/Home';
import RocketReachCase from './pages/RocketReachCase';
import UnqorkCase from './pages/UnqorkCase';

function App() {
  const location = useLocation();

  // Scroll to top smoothly when route changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <Cursor />
      <BackgroundAnimation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/rocketreach" element={<RocketReachCase />} />
        <Route path="/case-study/unqork" element={<UnqorkCase />} />
      </Routes>
    </>
  );
}

export default App;