import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'


function ProductList() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('http://localhost:8081/products', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Erro ao buscar produtos');
                }
                return resp.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Erro ao buscar produtos:', error);
                setProducts([]); 
            })
    }

        , []);

    return (
        <div className="product-list">
            {products.map(product => (
                
                <ProductCard key={product.id} product={product} />
            
            ))}
        </div>
    );
}

export default ProductList;
