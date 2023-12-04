import React from 'react';

const Button = ({ type, label, handleClick }) => {
  return (
    <button className={`btn-${type}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;