import React, { useState} from 'react';
import './button.css';

const Button =({
  children,
  type,
  clicked,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  return (
    <button className={'btn'} onClick={onClick} type={type}>
      {children}
    </button>
  )
};

export default Button;