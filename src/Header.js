import React from 'react';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="https://herokud1-03800266aff2.herokuapp.com/">Lácteos</a></li>
          <li><a href="#carnes">Carnes y Bebidas</a></li>
          <li><a href="#limpieza">Limpieza</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;