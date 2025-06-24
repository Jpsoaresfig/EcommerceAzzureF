// src/Components/Header.jsx
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">Azzure</h1>
        <nav>
          <a href="/homepage">Início</a>
          <a href="/all-products">Produtos</a>
          <a href="/contato">Contato</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
