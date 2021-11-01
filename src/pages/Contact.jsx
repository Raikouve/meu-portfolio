/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import Input from '../components/Input';
import { handleNameValidation, handleEmailValidation, handleMessageValidation } from '../helpers/handleValidation';
import hiringPeople from '../images/hiringPeople.png';
import '../styles/contact.css';

function Contact() {
  const [text, setText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [textArea, setTextArea] = useState('');

  function handleNameChange({ target: { value } }) {
    setText(value);
  }

  function handleEmailChange({ target: { value } }) {
    setEmailText(value);
  }

  function handleTextAreaChange({ target: { value } }) {
    setTextArea(value);
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <section className="contact-section">
      <div className="contact-left-container">
        <div className="contact-title-container">
          <h2>Precisando de um dev?</h2>
        </div>
        <div className="form-container">
          <form action="https://formsubmit.co/6714a332d4027e1d85fe840f879dd9b0" method="POST">
            <Input name="Nome" type="text" text={text} handleChange={handleNameChange} />
            <Input name="E-mail" type="email" text={emailText} handleChange={handleEmailChange} />
            <label htmlFor="Mensagem">
              Sua mensagem
              <textarea name="Mensagem" cols="30" rows="10" value={textArea} onChange={handleTextAreaChange} />
            </label>
            <button
              type="submit"
              disabled={
                !(!handleNameValidation(text)
                && handleEmailValidation(emailText)
                && !handleMessageValidation(textArea))
          }
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="contact-img-container">
        <img src={hiringPeople} alt="procurando-dev" className="hiring-people-png" />
      </div>
    </section>
  );
}

export default Contact;
