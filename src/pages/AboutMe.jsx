import React, { useContext } from 'react';
import portfolioContext from '../context/portfolioContext';
import '../styles/aboutMe.css';
import toni from '../images/toni.png';

function AboutMe() {
  const { aboutMeData } = useContext(portfolioContext);

  return (
    <section className="about-me-section-pages">
      <div className="about-me-title-container">
        <h2>Sobre mim</h2>
      </div>
      <div className="about-me-container">
        <div className="about-me-description">
          { aboutMeData.map(({ id, item }) => <p key={id}>{item}</p>) }
        </div>
        <div className="about-me-img-container">
          <img src={toni} alt="Antônio Gonçalves" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
