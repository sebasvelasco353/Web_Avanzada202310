import React, {ReactNode, useState} from 'react';
import {CartItem} from "../../interfaces/interfaces";
import CartContext from "./CartContext";

export const CartProvider = ({children}: { children: ReactNode[] | ReactNode }) => {
    const initial: CartItem[] = [] as CartItem[]
    const [cart, setCart] = useState(initial);

    const addItem = (item: CartItem) => {
        const id = item.id;
        const itemExists = cart.find(s => s.id === id) !== undefined;
        if (itemExists) return false;
        setCart([
            ...cart,
            item
        ]);
        return true;
    }

    const removeItem = (id: string) => {
        const itemNotExists = cart.find(s => s.id === id) === undefined;
        if (itemNotExists) return false;
        setCart(
            cart.filter(it => it.id !== id)
        );
        return true;
    }

    const updateItem = (id: string, item: CartItem) => {
        const itemNotExists = cart.find(it => it.id === id) === undefined;
        if (itemNotExists) return false;
        const newCart = cart.map((it, i) => {
            if (it.id === id) return item;
            else return it;
        });
        setCart(newCart);
        return true;
    }

    const findItemById = (id: string) => {
        return cart.find(it => it.id === id);
    }

    const findItemByName = (name: string) => {
        return cart.find(it => it.name === name);
    }

    const clear = () => {
        setCart(initial);
    }

    return (
        <CartContext.Provider value={{
            items: cart,
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