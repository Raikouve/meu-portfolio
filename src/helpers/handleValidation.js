export function handleNameValidation(name) {
  return (name === '');
}

export function handleEmailValidation(email) {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email);
}

export function handleMessageValidation(message) {
  return (message === '');
}
