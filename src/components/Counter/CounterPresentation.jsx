import { Button } from "@mui/material";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Button
        variant="contained"
        style={{ maxHeight: "26px" }}
        onClick={restar}
      >
        Restar
      </Button>

      <h2>{counter}</h2>
      <Button variant="contained" style={{ maxHeight: "26px" }} onClick={sumar}>
        Sumar
      </Button>
      <Button
        variant="contained"
        style={{ maxHeight: "26px" }}
        onClick={() => onAdd(counter)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentation;
