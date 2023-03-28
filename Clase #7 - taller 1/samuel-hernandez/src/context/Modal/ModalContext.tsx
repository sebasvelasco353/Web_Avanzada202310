import {createContext} from "react";
import {Item} from "../../interfaces/interfaces";

interface IModalContext {
    isOpen: boolean,
    item: Item,
    initialQuantity : number,
    open: (item: Item, quantity: number) => void,
    close: () => void,
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export default ModalContext;