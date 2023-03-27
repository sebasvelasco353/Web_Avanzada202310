import React, {ReactNode, useState} from 'react';
import {CartItem} from "../../interfaces/interfaces";
import ModalContext from "./ModalContext";

export const ModalProvider = ({children}: { children: ReactNode[] | ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({} as CartItem);

    const toggleModal = () => {
        setOpen(!open);
        return open;
    }

    const clearItem = () => {
        setItem({} as CartItem);
    }

    return (
        <ModalContext.Provider value={{
            isOpen: open,
            toggleModal,
            item,
            setItem,
            clearItem
        }}>
            {children}
        </ModalContext.Provider>
    );
}