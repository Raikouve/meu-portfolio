/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import Input from '../components/Input';
import handleEmailValidation from '../helpers/handleEmailValidation';

function Contact() {
  const [text, setText] = useState('');
  const [emailText, setEmailText] = useState('');

  function handleNameChange({ target: { value } }) {
    setText(value);
  }

  function handleEmailChange({ target: { value } }) {
    setEmailText(value);
  }

  return (
    <section>
      <form action="https://formsubmit.co/6714a332d4027e1d85fe840f879dd9b0" method="POST">
        <Input name="Nome" type="text" text={text} handleChange={handleNameChange} />
        <Input name="E-mail" type="email" text={emailText} handleChange={handleEmailChange} />
        <textarea name="Mensagem" cols="30" rows="10" required />
        <button type="submit" disabled={!handleEmailValidation(emailText)}>Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
