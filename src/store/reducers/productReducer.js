const initState = {
  productError: null
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART_FAILED":
      console.log("Add to cart fail");
      return {
        ...state,
        productError: action.err.message
      };

    case "ADD_PRODUCT_TO_CART_SUCCESS":
      console.log("Add to cart success");
      return {
        ...state,
        productError: null
      };

    case "REMOVE_PRODUCT_FROM_CART_FAILED":
      console.log("Remove product from cart failed");
      return {
        ...state,
        productError: action.err.message
      };

    case "REMOVE_PRODUCT_FROM_CART_SUCCESS":
      console.log("Remove from cart success");
      window.location.reload();
      return {
        ...state,
        productError: null
      };

    default:
      return state;
  }
};

export default productReducer;
