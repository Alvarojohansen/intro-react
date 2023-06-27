import React, { useRef } from 'react'

const Contador = () => {

    const numRef = useRef(0)

    const incrementNumHandler = () => {

    }

  return (
    <div>
        <h1>{numRef}</h1>
        <button onClick={incrementNumHandler}>incrementar</button>
    </div>
  )
}

export default Contador