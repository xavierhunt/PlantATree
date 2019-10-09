

const initState = {
    products: [
        {id: 1, name: 'Product name1', price: 99.00},
        {id: 2, name: 'Product name2', price: 55.50},
        {id: 3, name: 'Product name3', price: 66.00},
    ]
}

const productReducer = (state = initState, action) => {
    return state;
}

export default productReducer;