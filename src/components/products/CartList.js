import React from 'react';
import CartSummary from './CartSummary';
import {Link} from 'react-router-dom';

const CartList = ({products}) => {
    return(
        <div className="product-list section">
            {products && products.map(product => {
                return (
                    <Link to={'/product/' + product.id} key={product.id}>
                    <CartSummary product={product} key={product.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default CartList;