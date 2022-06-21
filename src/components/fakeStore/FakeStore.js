import React, { useEffect, useState } from 'react';
import './FakeStore.css';
import Products from './Products';

const FakeStore = (props) => {
    const {setCartCount} = props;
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data =>setProducts(data))
    }, [])

    return (
        <div>
            <h1>Fake Store Products : {products.length}</h1>
           <div className="row">
           {
                products.map(product => <Products setCartCount={setCartCount} key={product.id} product={product} ></Products>)
            }
           </div>
        </div>
    );
};

export default FakeStore;