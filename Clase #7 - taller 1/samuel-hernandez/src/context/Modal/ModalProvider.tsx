import React, {ReactNode, useReducer} from 'react';
import {Item, ModalState} from "../../interfaces/interfaces";
import ModalContext from "./ModalContext";
import {modalReducer} from "./modalReducer";

export const ModalProvider = ({children}: { children: ReactNode[] | ReactNode }) => {

    const defaultState :ModalState = {
        isOpen: false,
        item : {} as Item,
    }

    const [modal, dispatch] = useReducer(modalReducer, defaultState);

    const open = (item: Item) => {
        dispatch({type: "set", payload: item});
    }

    const close = () => {
        dispatch({type: "clear"})
    }

    return (
        <ModalContext.Provider value={{
            ...modal,
            open,
            close
        }}>
            {children}
        </ModalContext.Provider>
    );
}