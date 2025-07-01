import React, { useState } from 'react';
import './App.css';

/*
<a href="https://ibb.co/XZqS773V"><img src="https://i.ibb.co/997sbbVG/agua.jpg" alt="agua" border="0"></a>
<a href="https://ibb.co/nqN6X6my"><img src="https://i.ibb.co/LDXYTYRy/botella-aquarius-limon.jpg" alt="botella-aquarius-limon" border="0"></a>
<a href="https://ibb.co/zh43904h"><img src="https://i.ibb.co/kgSLbWSg/botella-aquarius-naranja.jpg" alt="botella-aquarius-naranja" border="0"></a>
<a href="https://ibb.co/zHjzs449"><img src="https://i.ibb.co/Lhb3SZZj/botella-coca-cola.jpg" alt="botella-coca-cola" border="0"></a>
<a href="https://ibb.co/pBdSHh25"><img src="https://i.ibb.co/VcTsFwV5/botella-coca-cola-zero.jpg" alt="botella-coca-cola-zero" border="0"></a>
<a href="https://ibb.co/mrMtwjqM"><img src="https://i.ibb.co/LD26WFt2/botella-coca-cola-zero-zero.jpg" alt="botella-coca-cola-zero-zero" border="0"></a>
<a href="https://ibb.co/PvP9s7s8"><img src="https://i.ibb.co/v6TQC7C8/botella-fanta-limon.jpg" alt="botella-fanta-limon" border="0"></a>
<a href="https://ibb.co/0j2CTp9V"><img src="https://i.ibb.co/27hvx0MY/botella-fanta-naranja.jpg" alt="botella-fanta-naranja" border="0"></a>
<a href="https://ibb.co/PGwzJhpb"><img src="https://i.ibb.co/LdnhBtwq/botella-fuze-tea-limon.jpg" alt="botella-fuze-tea-limon" border="0"></a>
<a href="https://ibb.co/XfbZrGXG"><img src="https://i.ibb.co/zWrhTtst/botella-fuze-tea-maracuya.jpg" alt="botella-fuze-tea-maracuya" border="0"></a>
<a href="https://ibb.co/mr6d6Srx"><img src="https://i.ibb.co/PswJwtsS/botella-sprite.jpg" alt="botella-sprite" border="0"></a>
<a href="https://ibb.co/gZLBkFNH"><img src="https://i.ibb.co/0yRdHVT8/lata-aquarius-limon.jpg" alt="lata-aquarius-limon" border="0"></a>
<a href="https://ibb.co/jZbwFnKq"><img src="https://i.ibb.co/1J7XxFVB/lata-aquarius-naranja.jpg" alt="lata-aquarius-naranja" border="0"></a>
<a href="https://ibb.co/8gx3qtHP"><img src="https://i.ibb.co/CK9dgDfV/lata-coca-cola.jpg" alt="lata-coca-cola" border="0"></a>
<a href="https://ibb.co/WNZrWLh6"><img src="https://i.ibb.co/Ng506Mvs/lata-coca-cola-zero.jpg" alt="lata-coca-cola-zero" border="0"></a>
<a href="https://ibb.co/YBjnbLLs"><img src="https://i.ibb.co/r2y8vwwr/lata-coca-cola-zero-zero.jpg" alt="lata-coca-cola-zero-zero" border="0"></a>
<a href="https://ibb.co/1t5kJXBs"><img src="https://i.ibb.co/Rkmq46th/lata-fuze-tea-limon.jpg" alt="lata-fuze-tea-limon" border="0"></a>
<a href="https://ibb.co/Mmrj1vQ"><img src="https://i.ibb.co/FF2fYrC/lata-fuze-tea-maracuya.jpg" alt="lata-fuze-tea-maracuya" border="0"></a>
*/

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

  const handleRemoveOne = (name) => {
    setCounts((prev) => ({
      ...prev,
      [name]: Math.max((prev[name] || 0) - 1, 0),
    }));
  };

  const handleReset = () => {
    setCounts({});
  };

  const getResultsText = () => {
    const grouped = { lata: [], botella: [] };

    for (const { name, type } of buttons) {
      if (counts[name]) {
        const displayName = name.replace(/\s(33|50)cl$/, ''); // Elimina " 33cl" o " 50cl"
        grouped[type].push(`${displayName} x${counts[name]}`);
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
        <button onClick={handleReset}>reset</button>
      </div>

      {renderButtonsByType('lata')}
      {renderButtonsByType('botella')}


    </div>
  );
}

export default App;
