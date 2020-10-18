import React, { useState} from 'react';
import './button.css';

// function Button(props){
//   const [size] = useState(props.size)
//   const [color] = useState(props.color)
//   const [content] = useState(props.content)
//   return(
//     <button style={{backgroundColor: color, fontSize: size}}>{content}</button>
//   )
// }

const STYLES = [
  "btn--primary--solid",
  "btn--primary--outline",
];

const SIZES = [
  "btn--medium",
  "btn--small"
];

const Button =({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

const checkButtonStyle = STYLES.includes(buttonStyle) 
  ? buttonStyle 
  : STYLES[0];

const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize
  : SIZES[0];

  return (
    <button className={'btn'} onClick={onClick} type={type}>
      {children}
    </button>
  )
};

export default Button;