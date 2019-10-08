import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

const ProductDetails = (props) => {
    const { auth} = props; 
    if(!auth.uid) return <Redirect to='/login' />

    return (
        <div className="container section product-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Product Name - {/* {id} */}</span>                  
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum necessitatibus sint, minus iure amet nulla voluptates dolorum expedita animi, vel ratione hic nostrum laboriosam quo delectus perferendis ea consectetur.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Price: $99.99</div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-1">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        //product: product,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProductDetails)
