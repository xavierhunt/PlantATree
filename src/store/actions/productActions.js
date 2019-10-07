export const addProductToCart = (product) => {
    return (dispatch, getState) => {
        dispatch({type: 'ADD_PRODUCT_TO_CART', product})
    }
};