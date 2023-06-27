import React, { useRef, useState } from "react";
import "./Login.css"
import Button from "./Button";
import ValidationText from "./ValidationText";

const Login = () => {
  const [years, setYears] = useState("");
  const [surname, setSurname] = useState("");
  const [validation, setValidation] = useState(false);
  const surnameRef = useRef();
  const yearsOldRef = useRef();

  const onChangeYears = () => {
    setSurname(surnameRef.current.value);
    console.log(surname);
  };
  const onChangeSurname = () => {
    setYears(yearsOldRef.current.value);
    console.log(years);
  };

  const validationHandler = () => {
    if (surnameRef.current.value.length === 0) {
      surnameRef.current.focus();
      surnameRef.current.style.borderColor = "red";
      surnameRef.current.style.outline = "none";
      alert("completa nombre");
      return;
    } else if (yearsOldRef.current.value.length === 0) {
      yearsOldRef.current.focus();
      yearsOldRef.current.style.borderColor = "red";
      yearsOldRef.current.style.outline = "none";
      alert("completa los anios");
      return;
    } else if (surnameRef.current.value.toLowerCase() === "golzmann") {
      alert("estas baneado bro");
      return;
    } else if (yearsOldRef.current.value <= 17) {
      yearsOldRef.current.focus();
      yearsOldRef.current.style.borderColor = "red";
      yearsOldRef.current.style.outline = "none";
      alert(" no podes ingresar siendo menor");
      return;
    } else {
      setValidation(true);
    }
  };

  return (
    <div>
      <div className="div-login">
        <input
          placeholder="Ingrese su apellido"
          onChange={onChangeSurname}
          type="text"
          ref={surnameRef}
        />
      </div>
      <div className="div-login">
        <input
          placeholder="Ingrese su edad"
          type="number"
          onChange={onChangeYears}
          ref={yearsOldRef}
        />
      </div>
      <div className="div-login">
        <Button funcionProp={validationHandler} />
      </div>
      <div>{validation && <ValidationText />}</div>
    </div>
  );
};

export default Login;
