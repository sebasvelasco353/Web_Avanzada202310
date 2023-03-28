import {createContext} from "react";
import {Item} from "../../interfaces/interfaces";

interface IModalContext {
    isOpen: boolean,
    item: Item,
    open: (item: Item) => void,
    close: () => void,
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export default ModalContext;