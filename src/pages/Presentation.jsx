import React, { useState, useEffect } from 'react';
import websiteHosting from '../images/websiteHosting.png';
import '../styles/sectionPages.css';

function Presentation() {
  const [isLoop, setIsLoop] = useState(false);

  function setLoop() {
    const ONE_SECOND = 1000;
    setTimeout(() => {
      setIsLoop(true);
    }, ONE_SECOND);
  }

  useEffect(() => {
    setLoop();
  }, [isLoop]);

  return (
    <section className="section-pages">
      <div className="presentation-container">
        <div className="logo">
          <h2>Antônio Gonçalves</h2>
          <span>FRONTEND WEB DEV</span>
        </div>
        <div className="skills-description">
          <h2>Desenvolvedor web frontend</h2>
          {/* eslint-disable-next-line max-len */}
          <p>Possuo experiência em tecnologias frontend como HTML, CSS, JavaScript, React, consumo de API e conhecimento em testes unitários e de integração.</p>
        </div>
      </div>
      { isLoop ? (
        <div className="presentation-img-container-loop">
          <img src={websiteHosting} alt="website hosting" className="website-hosting-png" />
        </div>
      )
        : (
          <div className="presentation-img-container">
            <img src={websiteHosting} alt="website hosting" className="website-hosting-png" />
          </div>
        )}
    </section>
  );
}

export default Presentation;
