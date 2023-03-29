import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(200);
  const [user, setUser] = useState("");

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    setCounter(counter - 1);
  };

  const login = () => {
    setUser("pepito");
  };
  return (
    <div>
      <h1>Este es el contador</h1>
      <button onClick={restar}>Restar</button>
      <h3>{counter}</h3>
      <button onClick={sumar}>Sumar</button>
      <br />
      <br />
      <button onClick={login}>Login</button>

      {user.length > 0 ? <h2>Hola chaval {user}</h2> : <h2>Logeate wachin</h2>}
    </div>
  );
};

export default Counter;
