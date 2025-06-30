import React, { useState } from "react";

const bebidas = {
  latas: [
    "coca-cola",
    "coca-cola zero",
    "coca-cola zero zero",
    "fuze tea maracuyá",
    "fuze tea limón",
    "fanta naranja",
    "fanta limón",
    "aquarius limón",
    "aquarius naranja",
    "sprite",
    "estrella galicia",
    "estrella galicia 0%",
    "estrella galicia tostada",
  ],
  botellas: [
    "coca-cola",
    "coca-cola zero",
    "coca-cola zero zero",
    "fuze tea maracuyá",
    "fuze tea limón",
    "fanta naranja",
    "fanta limón",
    "aquarius limón",
    "aquarius naranja",
    "sprite",
    "agua",
  ],
};

const App = () => {
  const [counts, setCounts] = useState({});

  const addDrink = (tipo, nombre) => {
    const key = `${tipo}: ${nombre}`;
    setCounts((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
  };

  const resetDrinks = () => {
    setCounts({});
  };

  const renderButtons = (tipo) =>
    bebidas[tipo].map((bebida) => (
      <button
        key={bebida}
        style={styles.button}
        onClick={() => addDrink(tipo, bebida)}
      >
        {bebida}
      </button>
    ));

    const renderResumenUnico = () => {
      const tipos = ["latas", "botellas"];
    
      return tipos.map((tipo) => {
        const items = Object.entries(counts)
          .filter(([key, val]) => key.startsWith(tipo) && val > 0)
          .map(([key, val]) => {
            const nombre = key.replace(`${tipo}: `, "");
            return `${nombre} (${val})`;
          });
    
        if (items.length === 0) return null;
    
        return (
          <p key={tipo} style={styles.resumenText}>
            <strong>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</strong><br />
            {items.join(", ")}
          </p>
        );
      });
    };
    
    
  return (
    <div style={styles.container}>
      <h2>Latas</h2>
      <div style={styles.buttonContainer}>{renderButtons("latas")}</div>
      <br></br>

      <h2>Botellas</h2>
      <div style={styles.buttonContainer}>{renderButtons("botellas")}</div>

      <div style={styles.resultadoBox}>
        {renderResumenUnico()}
      </div>

      <button style={styles.resetButton} onClick={resetDrinks}>
        Resetear todos
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 500,
    margin: "0 auto",
    padding: 20,
    fontFamily: "Arial",
    textAlign: "center",
  },
  buttonContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
    marginBottom: 20,
  },
  button: {
    padding: 12,
    fontSize: 14,
    borderRadius: 8,
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  resultadoBox: {
    padding: 14,
    backgroundColor: "#e8f0fe",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "left",
  },
  resumenText: {
    fontSize: 16,
    marginBottom: 6,
    textTransform: "capitalize",
  },
  resetButton: {
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    border: "none",
    backgroundColor: "#6c757d",
    color: "#fff",
    cursor: "pointer",
    width: "100%",
  },
};

export default App;
