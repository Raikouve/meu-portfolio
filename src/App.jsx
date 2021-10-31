import React from 'react';
import './App.css';
import PortfolioContextProvider from './context/PortfolioContextProvider';
import AboutMe from './pages/AboutMe';
import Presentation from './pages/Presentation';
import Projects from './pages/Projects';

function App() {
  return (
    <main>
      <PortfolioContextProvider>
        <Presentation />
        <AboutMe />
        <Projects />
      </PortfolioContextProvider>
    </main>
  );
}

export default App;
