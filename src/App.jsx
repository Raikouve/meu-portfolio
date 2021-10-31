import React from 'react';
import './App.css';
import Meta from './components/Meta';
import PortfolioContextProvider from './context/PortfolioContextProvider';
import Contact from './pages/Contact';
// import AboutMe from './pages/AboutMe';
import Presentation from './pages/Presentation';
import Projects from './pages/Projects';

function App() {
  return (
    <main>
      <Meta />
      <PortfolioContextProvider>
        <Presentation />
        {/* <AboutMe /> */}
        <Projects />
        <Contact />
      </PortfolioContextProvider>
    </main>
  );
}

export default App;
