import {Item, ModalState} from "../../interfaces/interfaces";

type ModalAction =
    | {type: "set", payload: { item: Item, initQ: number }}
    | {type: "clear"}
    | {type: "new"};

export const modalReducer = (state:  ModalState, action: ModalAction) : ModalState => {
    switch (action.type) {
        case "set":
            return {
                editMode: false,
                isOpen: true,
                item: action.payload.item,
                initialQuantity: action.payload.initQ,
            }
        case "clear":
            return {
                editMode: false,
                isOpen: false,
                item: {} as Item,
                initialQuantity: 0,
            }
        case "new":
            return {
                editMode: true,
                isOpen: true,
                item: {} as Item,
                initialQuantity: 0
            }
        default:
            return state;
    }
}