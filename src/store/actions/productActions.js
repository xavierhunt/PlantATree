import React from 'react';
import ProductSummary from "../../components/products/ProductSummary";
import CartSummary from "../../components/products/CartSummary";
import { Redirect } from "react-router-dom";

export const removeFromCart = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return firestore
        .collection('users')
        .doc(user.uid)
        .collection('cart')
        .doc(product.id)
        .delete()
        .then(() => {
          dispatch({ type: "REMOVE_PRODUCT_FROM_CART_SUCCESS", product });
        })
        .catch(err => {
          dispatch({ type: "REMOVE_PRODUCT_FROM_CART_FAILED", err });
        });
      } else {
        return <Redirect to="/login" />
      }
    });
  };
};



export const addToCart = (product, count) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        if(product.sizeNow){
          return firestore
        .collection('users')
        .doc(user.uid)
        .collection('cart')
        .add({
          name: product.name,
          type: product.type,
          sizeNow: product.sizeNow,
          sizeGrown: product.sizeGrown,
          image: product.image,
          description: product.description,
          maintenance: product.maintenance,
          price: product.price,
          quantity: count
        })
        .then(() => {
          dispatch({ type: "ADD_PRODUCT_TO_CART_SUCCESS", product });
        })
        .catch(err => {
          dispatch({ type: "ADD_PRODUCT_TO_CART_FAILED", err });
        });
        }else{
          return firestore
        .collection('users')
        .doc(user.uid)
        .collection('cart')
        .add({
          name: product.name,
          type: product.type,
          image: product.image,
          description: product.description,
          price: product.price,
          quantity: count
        })
        .then(() => {
          dispatch({ type: "ADD_PRODUCT_TO_CART_SUCCESS", product });
        })
        .catch(err => {
          dispatch({ type: "ADD_PRODUCT_TO_CART_FAILED", err });
        });
        }
        
      } else {
        return <Redirect to="/login" />
      }
    });
  };
};
