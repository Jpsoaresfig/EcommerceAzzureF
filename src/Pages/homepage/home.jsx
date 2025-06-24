import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx';
import Carousel from '../../Components/carousel/carousel.jsx';

import './home.css';

function Home() {
  if (localStorage.getItem('token')) {
    window.location.href = '/homepage';
  }

  return (
    <div className="home">
      <Header />

      {/* Seção de campanha com imagem e texto sobreposto */}
      <section className="campaign-section">
        <div className="campaign-content">
          <h1 className="banner-title">Conheça nossos produtos Azzure</h1>
          <p className="banner-subtitle">Joias feitas para brilhar com você</p>
          <Link to="/all-products" className="btn-primary">Ver Catálogo Completo</Link>
        </div>
      </section>

      {/* Destaques visuais de produtos */}
      <section className="banner">
          <h2 className="section-title">Destaques da Semana</h2>
          <div className="banner-images">
            <Carousel />
          </div>
        
      </section>

      {/* Promoções */}
      <section className="promotions">
        <h2 className="section-title">Ofertas Imperdíveis</h2>
        <p className="text-center">Descontos especiais para membros da nossa comunidade</p>
      </section>

     

     
    </div>
  );
}

export default Home;
