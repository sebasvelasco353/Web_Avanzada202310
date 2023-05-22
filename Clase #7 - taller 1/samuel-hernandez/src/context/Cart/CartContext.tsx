import {createContext} from "react";
import {CartItem} from "../../interfaces/interfaces";

interface ICartContext {
    items: CartItem[],
    productNumber : number,
    itemNumber : number,
    total : number,
    addItem : (item : CartItem) => boolean,
    removeItem : (id : string) => boolean,
    updateItem : (id : string, item : CartItem) => boolean,
    findItemById: (id : string) => CartItem | undefined,
    findItemByName: (name : string) => CartItem | undefined,
    clear: () => void,
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export default CartContext;