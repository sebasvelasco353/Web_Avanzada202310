import {Item, ModalState} from "../../interfaces/interfaces";

type ModalAction =
    | {type: "set", payload: { item: Item, initQ: number }}
    | {type: "clear"};

export const modalReducer = (state:  ModalState, action: ModalAction) : ModalState => {
    switch (action.type) {
        case "set":
            return {
                isOpen: true,
                item: action.payload.item,
                initialQuantity: action.payload.initQ,
            }
        case "clear":
            return {
                isOpen: false,
                item: {} as Item,
                initialQuantity: 0,
            }
        default:
            return state;
    }
}