import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
  });

  console.log(userData);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Bienvenido al carrito </h1>

      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="nombre"
          value={userData.nombre}
          name="nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="apellido"
          value={userData.apellido}
          name="apellido"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
