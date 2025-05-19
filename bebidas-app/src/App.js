import React from 'react';
import BebidaCard from './BebidaCard';
import bebidas from './data';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1>Bebidas Disponibles</h1>
      <div className="grid">
        {bebidas.map(bebida => (
          <BebidaCard key={bebida.id} bebida={bebida} />
        ))}
      </div>
    </div>
  );
}

export default App;
