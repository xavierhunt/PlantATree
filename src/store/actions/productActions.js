export const addProductToCart = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch({type: 'ADD_PRODUCT_TO_CART', product})
    }
};