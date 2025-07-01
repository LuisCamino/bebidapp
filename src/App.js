import React, { useState } from 'react';
import './App.css';

const buttons = [
  { 
    name: 'coca-cola 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(red)',
    color: 'white'
  },
  { 
    name: 'coca-cola zero  33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, red 0%, black 100%)',
    color: 'white'
  },
  { 
    name: 'coca-cola zero zero 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #b71c1c 0%, #b71c1c 50%, #fbc02d 100%)',
    color: 'white'
  },
  { 
    name: 'fuze tea maracuyá 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #4caf50 0%, #388e3c 60%, #b90b3f 100%)',
    color: 'white'
  },
  { 
    name: 'fuze tea limón 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #4caf50 0%, #388e3c 60%, #d0b01f 100%)',
    color: 'white'
  },
  { 
    name: 'fanta naranja 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #fea730 0%, #fea730 60%)',
    color: 'black'
  },
  { 
    name: 'fanta limón 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #fede0c 0%, #fede0c 60%, #d0b01f 100%)',
  },
  { 
    name: 'aquarius limón 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #005da2 0%, #22c2dd 60%, #bdf0fe 100%)',
  },
  { 
    name: 'aquarius naranja 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #005da2 0%, #d2a144 60%, #d2a144 100%)',
  },
  { 
    name: 'sprite 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #1ad529 0%, #1ad529 60%, white 100%)',
  },
  { 
    name: 'estrella galicia 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #c21312 0%, black 60%, black 100%)',
    color: 'white'
  },
  { 
    name: 'estrella galicia 0% 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #2a6eb7 0%, black 60%, black 100%)',
    color: 'white'
  },
  { 
    name: 'estrella galicia tostada 33cl', 
    type: 'lata', 
    backgroundGradient: 'linear-gradient(90deg, #c48441 0%, black 60%, black 100%)',
    color: 'white'
  },
  
  { 
    name: 'coca-cola 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(red)',
    color: 'white'
  },
  { 
    name: 'coca-cola zero 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(90deg, red 0%, black 100%)',
    color: 'white'
  },
  { 
    name: 'coca-cola zero zero 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(90deg, #b71c1c 0%, #b71c1c 50%, #fbc02d 100%)',
    color: 'white'
  },
  { 
    name: 'fuze tea maracuyá 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(90deg, #4caf50 0%, #388e3c 60%, #b90b3f 100%)',
    color: 'white'
  },
  { 
    name: 'fuze tea limón 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(90deg, #4caf50 0%, #388e3c 60%, #d0b01f 100%)',
    color: 'white'
  },
  { 
    name: 'fanta naranja 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(90deg, #fea730 0%, #fea730 60%)',
    color: 'black'
  },
  { 
    name: 'fanta limón 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(90deg, #fede0c 0%, #fede0c 60%, #d0b01f 100%)',
  },
  { 
    name: 'aquarius limón 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(90deg, #005da2 0%, #22c2dd 60%, #bdf0fe 100%)',
  },
  { 
    name: 'aquarius naranja 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(90deg, #005da2 0%, #d2a144 60%, #d2a144 100%)',
  },
  { 
    name: 'sprite 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(90deg, #1ad529 0%, #1ad529 60%, white 100%)',
  },
  { 
    name: 'agua 50cl', 
    type: 'botella', 
    backgroundGradient: 'linear-gradient(white)',
    color: 'black'
  }
];

function App() {
  const [counts, setCounts] = useState({});

  const handleAdd = (name) => {
    setCounts((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + 1,
    }));
  };


  const handleReset = () => {
    setCounts({});
  };

  const getResultsText = () => {
    const grouped = {
      lata: [],
      botella: [],
    };
  
    for (const { name, type } of buttons) {
      const key = `${type}-${name}`;  // si has implementado clave compuesta, si no usa solo name
      if (counts[key] || counts[name]) {
        // Elige la clave correcta según el estado que uses:
        const count = counts[key] || counts[name];
  
        // Quitar "33cl" y "50cl" del nombre para mostrar
        const cleanName = name.replace(/33cl|50cl/gi, '').trim();
  
        grouped[type].push(`${cleanName} x${count}`);
      }
    }

    return (
      <>
        <p><strong>Latas:</strong><br />{grouped.lata.join(', ')}</p>
        <p><strong>Botellas:</strong><br />{grouped.botella.join(', ')}</p>
      </>
    );
  };
  const renderButtonsByType = (type) => (
    <div className="button-group">
      <h2>{type === 'lata' ? 'Latas' : 'Botellas'}</h2>
      <div className="buttons">
      {buttons
  .filter((b) => b.type === type)
  .map(({ name, image, backgroundGradient, color }) => {
    const backgroundImageValue = backgroundGradient
      ? `${backgroundGradient}, url(${image})`
      : `url(${image})`;

      return (
        <button
        key={name}
        onClick={() => handleAdd(name)}
        style={{
          backgroundImage: backgroundImageValue,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center',
          height: '40px',
          color: color,
          border: '1px solid #ccc',
          margin: '5px',
          whiteSpace: 'nowrap',      // texto en una línea
          padding: '0 15px',         // espacio a izquierda y derecha
          minWidth: '80px',          // ancho mínimo opcional
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        {name}
      </button>
    );
  })}

          
        
      </div>
    </div>
  );

  return (
    <div className="App">
      <img src="https://smashyao.com/wp-content/uploads/2025/04/SMASHYAO_-20.png" alt="smashyao Logo" style={{ width: '150px', height: 'auto' }} />
      {renderButtonsByType('lata')}
      {renderButtonsByType('botella')}

      <div className="results">
        {getResultsText()}
      </div>

      <div className="actions">
        <button onClick={handleReset}>Resetear todo</button>
      </div>
    </div>
  );
}

export default App;
