import "../App.css"
import React, { useState } from 'react';



export const Button = () => {
    const [count, setCount] = useState(0);

    
    const sumCount = () => {
        setCount(count + 1);
    };
    
    const restCount = () => {
        setCount(count - 1);
    };
    
    return (
        <div className='button'>
           <h3>Contador: {count}</h3>
          <button onClick={sumCount}>Sumar</button>
          <button onClick={restCount}>Restar</button>
        </div>
    );
}

export default Button;
