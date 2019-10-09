import authReducer from './authReducer';
import productReducer from './productReducer';
import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;