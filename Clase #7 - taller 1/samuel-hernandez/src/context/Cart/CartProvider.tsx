import React, {ReactNode, useReducer, useState} from 'react';
import {CartItem, CartState} from "../../interfaces/interfaces";
import CartContext from "./CartContext";
import {cartReducer} from "./cartReducer";

export const CartProvider = ({children}: { children: ReactNode[] | ReactNode }) => {

    const defaultState : CartState = {
        items: [],
        productNumber: 0,
        itemNumber: 0,
    }

    const [cartState, dispatch] = useReducer(cartReducer, defaultState);

    const addItem = (item: CartItem) => {
        const id = item.id;
        const itemExists = cartState.items.find(s => s.id === id) !== undefined;
        if (itemExists) return false;
        dispatch({type: "add", payload: item});
        return true;
    }

    const removeItem = (id: string) => {
        const lookUpItem = cartState.items.find(s => s.id === id);
        if (!lookUpItem) return false;
        dispatch({type: "remove", payload: {id, item: lookUpItem}});
        return true;
    }

    const updateItem = (id: string, item: CartItem) => {
        const itemNotExists = cartState.items.find(it => it.id === id) === undefined;
        if (itemNotExists) return false;
        dispatch({type: "update", payload: {id, item}});
        return true;
    }

    const findItemById = (id: string) => {
        return cartState.items.find(it => it.id === id);
    }

    const findItemByName = (name: string) => {
        return cartState.items.find(it => it.name === name);
    }

    const clear = () => {
        dispatch({type: "clear"});
    }

    return (
        <CartContext.Provider value={{
            ...cartState,
            addItem,
            removeItem,
            updateItem,
            findItemById,
            findItemByName,
            clear
        }}>
            {children}
        </CartContext.Provider>
    );
}