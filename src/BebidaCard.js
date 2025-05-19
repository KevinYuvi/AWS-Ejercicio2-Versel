import React from 'react';

function BebidaCard({ bebida }) {
  return (
    <div className="card">
      <img src={bebida.imagen} alt={bebida.nombre} />
      <h3>{bebida.nombre}</h3>
      <p>{bebida.descripcion}</p>
      <p><strong>${bebida.precio.toFixed(2)}</strong></p>
      <button>Añadir al carrito 🛒</button>
    </div>
  );
}

export default BebidaCard;
