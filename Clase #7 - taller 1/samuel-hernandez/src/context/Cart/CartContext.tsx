import {createContext, Dispatch, SetStateAction} from "react";
import {CartItem} from "../../interfaces/interfaces";

interface ICartContext {
    items: CartItem[],
    addItem : (item : CartItem) => boolean,
    removeItem : (id : string) => boolean,
    updateItem : (id : string, item : CartItem) => boolean,
    findItemById: (id : string) => CartItem | undefined,
    findItemByName: (name : string) => CartItem | undefined,
    clear: () => void,
}

const defaultState :ICartContext = {
    items: [],
    addItem: (item: CartItem) => false,
    removeItem: (id: string) => false,
    updateItem: (id: string, item: CartItem) => false,
    findItemById: (id: string) => undefined,
    findItemByName: (name: string) => undefined,
    clear: () => {}
}

const CartContext = createContext<ICartContext>(defaultState);

export default CartContext;