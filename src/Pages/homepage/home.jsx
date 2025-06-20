import './home.css';
import React from 'react';
import ProductList from '../../Components/productList/ProductList.jsx';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx';

//lembrar de validar o token de autenticação e verificar se o usuário está logado antes de renderizar a página

function Home() {
  return (
    <div className="home">
      <Header />

      {/* Banner principal */}
      <section className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Melhor site de venda de Joias</h1>
          <p className="banner-subtitle">
            Aproveite as melhores ofertas e faça parte da nossa família!
          </p>
          <Link to="/all-products" className="btn-primary">Confira os Produtos</Link>
        </div>
      </section>

      {/* Promoções */}
      <section className="promotions">
        <h2 className="section-title">Ofertas Imperdíveis</h2>
         
      </section>

      {/* Sobre a Azzure */}
      <section className="about">
        <h2 className="section-title">Quem Somos</h2>
        <p>
          Na Azzure, acreditamos que mais do que produtos, construímos uma família.
          Oferecemos qualidade, confiança e promoções especiais para você.
        </p>
        <a href="/about" className="btn-primary">Saiba Mais</a>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2025 Azzure. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="/social">Redes Sociais</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
