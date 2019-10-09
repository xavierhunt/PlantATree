export const addProductToCart = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const uid = getState().firebase.auth.uid;
        firestore.collection('products').document({uid}).collection('cart').add({
            name: product.name,
            type: product.type,
            size: product.size,
            image: product.image,
            description: product.description,
            maintenance: product.maintenance,
            price: product.price
        }).then(() => {
            dispatch({type: 'ADD_PRODUCT_TO_CART_SUCCESS', product})
        }).catch((err) => {
            dispatch({type: 'ADD_PRODUCT_TO_CART_FAILED', err})
        })   
    }
};