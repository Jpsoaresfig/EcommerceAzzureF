import React from 'react';
import './ProductCard.css'; // Import your CSS styles for the ProductCard
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>R$ {(product.price / 100).toFixed(2)}</p>
      <button>Comprar</button>
    </div>
  );
}

export default ProductCard;
