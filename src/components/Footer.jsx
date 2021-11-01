/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../styles/footer.css';

function Footer() {
  function handleGoUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer>
      <div className="footer-contacts">
        <h4>Contato</h4>
        <p>dev.tonigoncalves@outlook.com</p>
        <p>+55 47 99234-8010</p>
      </div>
      <div className="footer-social-media">
        <h4>Minhas redes</h4>
        <a href="https://github.com/Raikouve" rel="noreferrer" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/tonigoncalves/" rel="noreferrer" target="_blank">LinkedIn</a>
        <a href="https://www.instagram.com/tonissx/?hl=pt-br" rel="noreferrer" target="_blank">Instagram</a>
      </div>
      <div className="footer-button-container" onClick={handleGoUp}>
        ↑
      </div>
    </footer>
  );
}

export default Footer;
