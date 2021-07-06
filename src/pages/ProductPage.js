import React from 'react';
import Product from '../components/Product'
import { Link } from 'react-router-dom'

const ProductPage = ({match}) => {
    return ( 
        <>
        <div>Strona produktu</div>
        <Product id={match.params.id}/>
        <Link to="/products">Powrót do strony produktów</Link>
        </>
     );
}
 
export default ProductPage;