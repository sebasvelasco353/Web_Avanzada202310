import {configureStore} from '@reduxjs/toolkit'

const initialState = {
    showModal: false,
    showShopping: false,
    product: {},
    products: []
}

const showModal = 'ShowModal'
const hideModal = 'HideModal'
const showShopping = 'ShowShopping'
const hideShopping = 'HideShooping'
const setProduct = 'SetProduct'
const addProduct = 'AddProduct'
const removeProduct = 'RemoveProduct'


function modalReducer(state = initialState, action){
    switch(action.type) {
        case showModal:
            return {...state, showModal: true};
        case hideModal:
            return {...state, showModal: false};
        case setProduct:
            return {...state, product: action.payload};
        case addProduct:
            return { ...state, products: [ ...state.products, action.payload ] };
        case removeProduct:
            return { ...state, products: state.products.filter(product => product.id !== action.payload.id) };
        case showShopping:
            return { ...state, showShopping: true}
        case hideShopping:
            return { ...state, showShopping: false}
            default:
        return state;
    }
}

const store = configureStore({
    reducer: modalReducer
});

export default store