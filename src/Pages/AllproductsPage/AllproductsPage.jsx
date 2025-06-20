import React from 'react';
import ProductList from '../../Components/ProductList';
import './AllproductsPage.css';
import Header from '../../Components/Header/Header';

function AllProductsPage() {
  return (


    <div className="all-products-page">
      
      <Header/>
      <header className="page-header">
        <h1>Todos os Produtos</h1>
        <p>Confira todos os itens disponíveis na loja.</p>
      </header>
      <main>
        <ProductList />
      </main>
      <a href="/products">Home</a>
    </div>

  );
}

export default AllProductsPage;
