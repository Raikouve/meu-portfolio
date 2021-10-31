import React from 'react';
import PropTypes from 'prop-types';

function Input({
  name, type, text, handleChange,
}) {
  return (
    <label htmlFor={name}>
      {`${name}: `}
      <input name={name} type={type} value={text} required onChange={handleChange} />
    </label>
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
