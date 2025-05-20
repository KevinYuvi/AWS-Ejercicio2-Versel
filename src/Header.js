import React from 'react';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="http://3.218.233.15:777/">Inicio</a></li>
          <li><a href="https://herokud1-03800266aff2.herokuapp.com/">Lácteos</a></li>
          <li><a href="http://146.190.160.148:999/">Carnes</a></li>
          <li><a href="https://versel-cyan.vercel.app/">Bebidas</a></li>
          <li><a href="https://ejercicio2-railway.up.railway.app/">Limpieza</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;