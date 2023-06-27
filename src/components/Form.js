//ejercicio userRef

import React, { useRef, useState } from 'react';

const Form = () => {
  const newText = useRef(null);
  const [text, setText] = useState('');

  const handlerClick = () => {
    const valor = newText.current.value;
    setText(valor);
    console.log(text);
  };

  return (
    <div className='div-form'>
      <form>
        <input type="text" ref={newText} />
        <div>
          <button onClick={handlerClick}>Enviar</button>
        </div>
        <h3>{text}</h3>
      </form>
    </div>
  );
};

export default Form;