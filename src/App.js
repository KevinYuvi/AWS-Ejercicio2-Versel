import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BebidaCard from './BebidaCard';
import bebidas from './data';
import './styles.css';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="container">
        <h1>Bebidas Disponibles</h1>
        <div className="grid">
          {bebidas.map((bebida) => (
            <BebidaCard key={bebida.id} bebida={bebida} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;