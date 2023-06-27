import React from 'react'
import "./Login.css"


const Button = (props) => {

    const clickHandler = () => {

        props.funcionProp();
    };


  return (
    <div><button onClick={clickHandler}>solicitar entrada</button></div>
  );
}

export default Button