import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ScreenBuy.css';

function ScreenBuy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);




  useEffect(() => {
    const token = localStorage.getItem('authToken');//lembrar que é authToken
    console.log("Token dentro do ScreenBuy:", token);

    if (!token) {
      console.warn("Token ausente. Redirecionando para login...");
      navigate('/login');
      return;
    }

    axios.get(`http://localhost:8081/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log("Produto recebido:", res.data);
        setProduct(res.data);
      })
      .catch(err => {
        console.error('Erro ao buscar produto:', err);
        if (err.response?.status === 403) {
          console.warn("Token recusado ou acesso negado. Redirecionando...");
          navigate('/login');
        }
      });


  }, [id, navigate]);

  return (
    <div className="product-details">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.description}</p>
          <p>Preço: R$ {(product.price / 100).toFixed(2)}</p>
          <button>Finalizar compra (futuro)</button>
          <br/>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </>
      ) : (
        <p>Carregando produto...</p>
      )}
    </div>
  );
}

export default ScreenBuy;
