import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    if (!localStorage.getItem('token')) {
      
    }

    navigate(`/compra/${product.id}`);
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>R$ {(product.price / 100).toFixed(2)}</p>
      <button className="buy-button" onClick={handleBuyClick}>Comprar</button>
    </div>
  );
}

export default ProductCard;
