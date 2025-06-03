import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
      try {
        const authToken = localStorage.getItem('authToken'); // Recupera o token JWT

        if (!authToken) {
          console.warn('Nenhum token encontrado, redirecionando para login.');
          navigate('/login'); // Usuário não autenticado, redireciona
          return;
        }

        
        const response = await fetch('http://localhost:8080/products', { 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`, // 
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else if (response.status === 401 || response.status === 403) {
          
          console.error('Erro de autenticação/autorização ao buscar produtos:', response.status);
          localStorage.removeItem('authToken'); 
          navigate('/login'); 
        } else {
          const errorData = await response.text();
          setError(`Falha ao carregar produtos: ${errorData}`);
          console.error('Erro ao buscar produtos:', response.status, errorData);
        }
      } catch (apiError) {
        setError('Erro de conexão ao buscar produtos. O servidor pode estar indisponível.');
        console.error('Erro na requisição de produtos:', apiError);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    navigate('/login'); 
  };

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Lista de Produtos</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price ? product.price.toFixed(2) : 'N/A'}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
      <button onClick={handleLogout} style={{ marginTop: '20px' }}>Sair</button>
    </div>
  );
}

export default ProductsPage;