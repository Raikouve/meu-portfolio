import React from 'react';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import PortfolioContextProvider from './context/PortfolioContextProvider';
import Contact from './pages/Contact';
import Presentation from './pages/Presentation';
import Projects from './pages/Projects';
// import MoreProjects from './pages/MoreProjects';

function App() {
  return (
    <main>
      <PortfolioContextProvider>
        <Presentation />
        <Projects />
        {/* <Routes>
          <Route path="/portfolio/moreprojects" component={MoreProjects} />
        </Routes> */}
        <Contact />
        <Footer />
      </PortfolioContextProvider>
    </main>
  );
}

export default App;
