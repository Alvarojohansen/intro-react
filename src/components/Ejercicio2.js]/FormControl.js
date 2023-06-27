import React, { useState } from 'react'

const FormControl = () => {
    const [name, setName]= useState('');
    const [surname, setSurname] = useState('')

    const nameOnChangeHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const surnameOnChangeHandler = (e) =>{
        e.preventDefault();
        setSurname(e.target.value);
    }

  return (
    <form>
    <div>
        <div>
            <input placeholder='nombre' onChange={nameOnChangeHandler} value={name}/>
        </div>
        <div>
            <input placeholder='apellido' onChange={surnameOnChangeHandler} value={surname}/>
        </div>
        <p>{name}</p><p>{surname}</p>
    </div>
    </form>
  )
}

export default FormControl