import {createContext, Dispatch, SetStateAction} from "react";
import {CartItem} from "../../interfaces/interfaces";

interface IModalContext {
    isOpen : boolean,
    toggleModal : () => boolean,
    item : CartItem,
    setItem: Dispatch<SetStateAction<CartItem>>
    clearItem : () => void
}

const defaultState :IModalContext = {
    isOpen: false,
    toggleModal: () => false,
    item : {} as CartItem,
    setItem : (item) => {},
    clearItem: () => {}
}

const ModalContext = createContext<IModalContext>(defaultState);

export default ModalContext;