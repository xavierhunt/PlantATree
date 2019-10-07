import React from 'react'

const ProductDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section product-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Product Name - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum necessitatibus sint, minus iure amet nulla voluptates dolorum expedita animi, vel ratione hic nostrum laboriosam quo delectus perferendis ea consectetur.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Price: $99.99</div>
                    <div>Add to cart</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails