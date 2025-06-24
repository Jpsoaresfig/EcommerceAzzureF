import React from 'react';
import ProductList from '../../Components/productList/ProductList';
import './AllproductsPage.css';
import Header from '../../Components/Header/Header';

function AllProductsPage() {
  return (
    <>
      <Header />
      <div className="all-products-page">
        <section className="page-header">
          <h1>Todos os Produtos</h1>
          <p className='description'>Confira todos os itens disponíveis na loja.</p>
        </section>

        <main>
          <ProductList />
        </main>

        <div className="back-home">
          <a href="/homepage">← Voltar para a Home</a>
        </div>
      </div>
    </>
  );
}

export default AllProductsPage;
