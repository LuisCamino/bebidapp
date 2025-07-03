import React, { useState, useEffect } from 'react';
import './App.css';



const buttons = [
  {
    name: 'coca-cola 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/CK9dgDfV/lata-coca-cola.jpg',
    color: 'white'
  },
  {
    name: 'coca-cola zero  33cl',
    type: 'lata',
    image: 'https://i.ibb.co/Ng506Mvs/lata-coca-cola-zero.jpg',
    color: 'white'
  },
  {
    name: 'coca-cola zero zero 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/r2y8vwwr/lata-coca-cola-zero-zero.jpg',
    color: 'white'
  },
  {
    name: 'fuze tea maracuyá 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/FF2fYrC/lata-fuze-tea-maracuya.jpg',
    color: 'white'
  },
  {
    name: 'fuze tea limón 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/Rkmq46th/lata-fuze-tea-limon.jpg',
    color: 'white'
  },
  {
    name: 'fanta naranja 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/qLRWGR7g/lata-fanta-naranja.png',
    color: 'black'
  },
  {
    name: 'fanta limón 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/99zp3fm8/lata-fanta-limon.png',
  },
  {
    name: 'aquarius limón 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/0yRdHVT8/lata-aquarius-limon.jpg',
  },
  {
    name: 'aquarius naranja 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/1J7XxFVB/lata-aquarius-naranja.jpg',
  },
  {
    name: 'sprite 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/v4zdL9Ps/lata-sprite.png',
  },
  {
    name: 'estrella galicia 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/FL0tynRP/estrella-galicia-lata.webp',
    color: 'white'
  },
  {
    name: 'estrella galicia 0% 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/xSqsShpd/lata-estrella-galicia-0.webp',
    color: 'white'
  },
  {
    name: 'estrella galicia tostada 33cl',
    type: 'lata',
    image: 'https://i.ibb.co/p6VjKjJs/lata-estrella-galicia-tostada.webp',
    color: 'white'
  },

  {
    name: 'coca-cola 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/Lhb3SZZj/botella-coca-cola.jpg',
    color: 'white'
  },
  {
    name: 'coca-cola zero 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/VcTsFwV5/botella-coca-cola-zero.jpg',
    color: 'white'
  },
  {
    name: 'coca-cola zero zero 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/LD26WFt2/botella-coca-cola-zero-zero.jpg',
    color: 'white'
  },
  {
    name: 'fuze tea maracuyá 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/zWrhTtst/botella-fuze-tea-maracuya.jpg',
    color: 'white'
  },
  {
    name: 'fuze tea limón 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/LdnhBtwq/botella-fuze-tea-limon.jpg',
    color: 'white'
  },
  {
    name: 'fanta naranja 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/27hvx0MY/botella-fanta-naranja.jpg',
    color: 'black'
  },
  {
    name: 'fanta limón 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/v6TQC7C8/botella-fanta-limon.jpg',
  },
  {
    name: 'aquarius limón 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/LDXYTYRy/botella-aquarius-limon.jpg',
  },
  {
    name: 'aquarius naranja 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/kgSLbWSg/botella-aquarius-naranja.jpg',
  },
  {
    name: 'sprite 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/PswJwtsS/botella-sprite.jpg',
  },
  {
    name: 'agua 50cl',
    type: 'botella',
    image: 'https://i.ibb.co/997sbbVG/agua.jpg',
    color: 'black'
  },
];

const SALSA_NAME = [
  {
    name: 'ketchup',
    backgroundColor: 'red'
  },
  {
    name: 'mayonesa',
    backgroundColor: '#f9f4eb'
  },
  {
    name: 'barbacoa',
    backgroundColor: '#7d2d21'
  },
  {
    name: 'trufa',
    backgroundColor: '#c1bd91'
  },
  {
    name: 'cheddar',
    backgroundColor: '#ef9202'
  },
  {
    name: 'bacon',
    backgroundColor: '#be6f6a'
  },
  {
    name: 'ranchera',
    backgroundColor: '#d0cab3'
  }
];

function TwoColumnGroups({ items }) {
  const groupSize = 2;
  const columns = Math.ceil(items.length / groupSize);

  const cols = Array.from({ length: columns }, (_, colIndex) =>
    items.slice(colIndex * groupSize, colIndex * groupSize + groupSize)
  );

  const rows = groupSize;

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '10px' }}>
      {[...Array(rows)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            textAlign: 'left',
            padding: '0 5px',
          }}
        >
          {cols.map((col, colIndex) => (
            <div key={colIndex} style={{ padding: '4px 8px' }}>
              {col[rowIndex] || null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}



function App() {

  const [counts, setCounts] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Detectar scroll y mostrar botón si scrollY > 100
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del event listener al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAdd = (name) => {
    setCounts((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + 1,
    }));
  };

  const handleReset = () => {
    setCounts({});
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getResultsText = () => {
    const grouped = { lata: [], botella: [], otro: [] };

    for (const { name, type } of buttons) {
      if (counts[name]) {
        grouped[type].push(`${name.replace(/ ?(33cl|50cl)/g, '')} x${counts[name]}`);
      }
    }

    for (const { name } of SALSA_NAME) {
      if (counts[name]) {
        grouped.otro.push(`${name} x${counts[name]}`);
      }
    }

    return (
      <>
        {grouped.lata.length > 0 && (
          <>
            <strong>Latas:</strong>
            <TwoColumnGroups items={grouped.lata} />
          </>
        )}
        {grouped.botella.length > 0 && (
          <>
            <strong>Botellas:</strong>
            <TwoColumnGroups items={grouped.botella} />
          </>
        )}
        {grouped.otro.length > 0 && (
          <>
            <strong>Salsas:</strong>
            <TwoColumnGroups items={grouped.otro} />
          </>
        )}
      </>
    );
  };

  // Función para dividir array en chunks
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };


  const renderButtonsByType = (type) => (
    <div className="button-group">
      <h2>{type === 'lata' ? 'Latas' : 'Botellas'}</h2>
      <div className="buttons">
        {buttons
          .filter((b) => b.type === type)
          .map(({ name, image, color }) => (
            <button
              key={name}
              onClick={() => handleAdd(name)}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '120px',
                width: '50px',
                color: color || 'white',
                border: '1px solid #ccc',
                margin: '5px',
                whiteSpace: 'nowrap',
                padding: '0 15px',
                minWidth: '80px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >

            </button>
          ))}
      </div>
    </div>
  );

  return (
    <div className="App">
      <img
        src="https://smashyao.com/wp-content/uploads/2025/04/SMASHYAO_-20.png"
        alt="smashyao Logo"
        style={{ width: '150px', height: 'auto' }}
      />
      <h3>Delivery app</h3>

      <div className="results" style={{
        border: "2px solid black",
        margin: "20px",
        padding: "15px",
        display: 'inline-block',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ccc',
        width: 'fit-content',
        maxWidth: '100%',
        whiteSpace: 'pre-wrap'
      }}>
        {getResultsText()}
      </div>

      <div className="actions">
        <img
          src="https://imgs.search.brave.com/JlAoMqux6hH9Ixgrxm3oCbv4I5WOhWF1MIWp_iux0jE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zNjI1LzM2MjUw/MDUucG5nP3NlbXQ9/YWlzX2h5YnJpZA"
          alt="Reset"
          onClick={handleReset}
          style={{
            cursor: 'pointer',
            width: '32px',
            height: '32px',
            margin: '8px'
          }}
        />
      </div>

      {renderButtonsByType('lata')}
      {renderButtonsByType('botella')}

      <div
        onClick={() => handleAdd(SALSA_NAME)}
        style={{
          display: 'inline-block',

          position: 'relative',
          margin: '20px',
          cursor: 'pointer',
        }}
        title="Añadir salsa"
      >
        <div className="button-group">
          <h2>Salsas</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {SALSA_NAME.map(({ name, backgroundColor }) => (
              <div
                key={name}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                title={name}
                onClick={() => handleAdd(name)}
              >
                <div
                  style={{
                    width: '25px',
                    height: '25px',
                    borderLeft: '4px solid black',
                    borderRight: '4px solid black',
                    borderBottom: '4px solid black',
                    position: 'relative',
                    cursor: 'pointer',
                  }}

                  
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: backgroundColor,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  ></div>
                </div>
                <span style={{ fontSize: '12px', marginTop: '4px', userSelect: 'none' }}>{name}</span>
              </div>
            ))}
          </div>
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '10px 15px',
                fontSize: '14px',
                cursor: 'pointer',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#ea3142',
                color: 'white',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                zIndex: 1000,
              }}
              aria-label="Ir arriba"
            >
              ↑ 
            </button>
          )}
        </div>
      </div>

    </div>
  );
}

export default App;
