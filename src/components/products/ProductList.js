import React from 'react';
import ProductSummary from './ProductSummary';
import {Link} from 'react-router-dom';

const ProductList = ({products, filter}) => {
    return(
        <div className="product-list section">
            {products && products.map(product => {
                    if(filter === 'Trees'){
                        return (
                            product.sizeNow && 
                            <Link to={'/product/' + product.id} key={product.id}>
                            <ProductSummary product={product} key={product.id} />
                            </Link>
                        )
                    }else if(filter === 'Equipment'){
                        return (
                            !product.sizeNow &&
                            <Link to={'/product/' + product.id} key={product.id}>
                            <ProductSummary product={product} key={product.id} />
                            </Link>
                        )
                    }else{
                        return (
                            <Link to={'/product/' + product.id} key={product.id}>
                            <ProductSummary product={product} key={product.id} />
                            </Link>
                        )
                    }
            })}
        </div>
    )
}

export default ProductList;