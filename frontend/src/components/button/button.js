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

const Button =({
  children,
  type,
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